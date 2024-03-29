---
lang: zh-CN
title: 随笔
description: 页面的描述
---

1、响应式原理
+ 依赖本质上是一个new ReactiveEffetc()实例，上面有run方法或者调度函数，更新依赖本质上是执行调度函数或run方法，是由runtime-core在执行到响应式数据时实例化的。
+ render函数执行响应式数据时，会实例化new ReactiveEffect()，这个实例执行run方法将实例赋值给activeEffect，以便收集，以后每次数据更新会触发依赖更新。  
+ ref和computed这两个都是实现了一个类，类中有get或者set方法，用来收集和触发响应式依赖，类中的dep用来保存依赖。  
+ reactive或者readonly或者shallowReadonly，才用的proxy，根据用户的使用实现不用的getter和setter函数来收集和触发依赖，依赖保存在全局weakMap上。  
```ts
//runtime-core会实例化当前的activeEffect示例，用于依赖收集
export function trackEffects(dep) {
  // 用 dep 来存放所有的 effect
  // 源码中运行时那里会实例化new ReactiveEffect()，每个依赖会生成activeEffect实例，实例中有run方法，执行run就会触发依赖
  // 如果用户用的是effect，初始化的时候会执行，把当前依赖实例activeEffect变成正在处理的实例，并触发依赖收集
  if (!dep.has(activeEffect)) {
    /**
     * 每个响应式数据实例都有个dep用来收集依赖
     */
    dep.add(activeEffect)
    ;(activeEffect as any).deps.push(dep)
  }
}
```
```ts
export function triggerEffects(dep) {
  // 执行收集到的所有的 effect 的 run 方法
  for (const effect of dep) {
    if (effect.scheduler) {
      // scheduler 可以让用户自己选择调用的时机
      // 这样就可以灵活的控制调用了
      // 在 runtime-core 中，就是使用了 scheduler 实现了在 next ticker 中调用的逻辑
      effect.scheduler()
    } else {
      effect.run()
    }
  }
}
```

4、每个vue文件就相当于定义了一个原型对象，其他组件在使用时就相当于基于这个原型实例化了一个实例，并把方法绑定到这个实例上。data是个函数会执行创建新对象，并把属性绑定到新的实例上。data是对象因为依据的是同一个原型上的数据，会导致多个组件间data的复用，其实也能做到不复用，那就要深拷贝，影响性能所以使用函数。props属性还是在原型上。

5、正常情况下：vue模板 —> 编译成ast语法树 —> 编译成render函数(render函数其实返回一个个h函数，而h函数其实就是调用createVNode) —> vue实例初始化时添加render函数(compile模块和runtime模块的交汇点) —> vue实例初始化完后beforeMount前执行render函数(同时会实例化ReactiveEffect触发依赖收集，runtime模块和reactive模块的交汇点) —> 虚拟节点 —> 挂载 —> 渲染 —> 渲染完执行mounted
如果直接写render函数：以上步骤直接从render函数开始

6、ref、computed和reactive、readonly等保存依赖的方式不同，前者是每个包装对象都有个set结构的dep属性，存储着依赖。而后者则保存在一个全局的weakMap上，结构如下：
```ts
// 引用类型的依赖保存结构：key为属性名，target为对象，dep为依赖实例
// WeakMap { Map { Set，Set }, Map { Set, Set} }
// 比如说reactive({name: "gxk", brother: {name: "gxh"}})，target就是{name: "gxk"}，key就是name
{ 
  target => { key => { dep, dep }，key => { dep, dep } }, 
  target => { key => { dep, dep } } 
}
{ 
  {name: "gxk"} => { name => { dep, dep }, brother => { dep, dep } }, // 之所以brother还要加依赖，我猜是有可能把brother整个赋值成其他
  {name: "gxh"} => { name => { dep, dep } } 
}
```
更新时通过target和key来获取到对应的set结构依赖。（proxy只会代理第一层，所以当对象的属性值是对象时，则会递归调用reactive，所以第一层weakMap中的target可能是其他target属性的值）
```ts
const target = {
  name: "gxk",
  brother: {
    name: "gxh",
  },
};
const targetProxy = new Proxy(target, {
  get(target, key) {
    // todo track
    // 如果获取到的是对象，则再调用代理操作reactive
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    console.log(Reflect.get(target, key, value));
    // todo trigger
    return Reflect.set(target, key, value);
  },
});
setInterval(() => {
  targetProxy.brother.name = "gxh"; //这里一层proxy是监听不到的
  targetProxy.name = "gxh"; //这里一层proxy可以监听到
}, 1000);
```

7、vue3之所以用weakMap是，如果用map:
```ts
let a = { a: 1 }
let genMap = new Map()
genMap.set(a, 1)
```
上述代码map中用了a当作键，此时如果把a设为null，垃圾回收机制并不会回收{a:1}这个内存，因为map中还引用着，然后用户永远也无法访问到这个内存（没有及时释放，造成内存泄漏。栈与堆指针没了，如果是数组，那么对象是作为值保存，那么数组内的key与对象的指针还在，所以数组不会有影响），也无法回收。而weakMap中的key是弱引用，不会被垃圾回收机制清除标记，外部如果没有这个对象的引用，则对象就会被回收掉。

8、vue的父子组件执行顺序  
加载：父beforeCreated ->父created ->父beforeMounted ->子beforeCreated ->子created ->子beforeMounted ->子mounted -> 父mounted  
更新：父beforeUpdate->子beforeUpdate->子updated->父updated  
销毁：父beforeDestroy->子beforeDestroy->子destroyed->父destroyed  

#### Ref和ref的简单实现
```ts
/**
 * 随便写的Ref和ref的实现
 */
export class RefGen<T> {
  data: T;
  dep: Set
  readonly _is_ref: true;
  constructor(data: T) {
    this.data = data;
    this._is_ref = true;
  }

  get value() {
    // todo: track
    return this.data;
  }

  set value(data: T) {
    // todo: trigger
    this.data = data;
  }
}
interface Ref<T> {
  value: T;
}
export const isRef = (data: any | Ref<any>): boolean => {
  if (data._is_ref) {
    return true;
  } else {
    return false;
  }
};
export function ref<T>(data: Ref<T>): Ref<T>;
export function ref<T>(data: T): Ref<T>;
export function ref<T>(data: T | Ref<T>): any {
  if (isRef(data)) {
    return data;
  } else {
    return new RefGen(data);
  }
}

const a: Ref<number> = ref(1);
const b = ref<number>(a);

a.value = 3;
b.value = 2;
```

#### reactive中的proxy
```ts
const target = {
  name: "gxk",
  sex: "man",
};

const reactive = <T extends object>(target: T) => {
  const targetProxy = new Proxy<T>(target, {
    get: (target, key) => {
      // todo: track
      if(typeof Reflect.get(target, key) === "object") {
        return reactive(Reflect.get(target, key))
      } else {
        return Reflect.get(target, key);
      }
    },
    set: (target, key, value) => {
      // todo: trigger
      return Reflect.set(target, key, value);
    },
  });
  return targetProxy;
};

const targetProxy = reactive(target);

targetProxy.name = "gxh"
```