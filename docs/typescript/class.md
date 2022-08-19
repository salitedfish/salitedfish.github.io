---
lang: zh-CN
title: class
description: 页面的描述
---
### 简介
1、ts中class的使用与js区别还是比较大，不单单只是像函数只添加了类型，更是封装了一层。  
2、ts中为class属性及方法新增了许多关键字，如abstract、private、protected、static、readonly、public，readonly和public比较简单就不说了。

### 示例
+ private  
类中带private的属性和方法，只能在当前类内访问，实例、子类及子类实例都无法访问。
```ts
class Person<T extends any> {
  private language: string;
  constructor(name: T) {
    console.log(name)
    this.language = "chinese";
  }
  private say() {}
  speak() {
    this.say();
  }
}

const person = new Person<string>("gxk");
person.language; //err: 属性“language”为私有属性，只能在类“Person”中访问
person.say(); //err: 属性“say”为私有属性，只能在类“Person”中访问

class GXK extends Person {
  constructor() {
    super();
    this.language; //err: 属性“language”为私有属性，只能在类“Person”中访问
    this.say(); //err: 属性“say”为私有属性，只能在类“Person”中访问
  }
}

const gxk = new GXK();
gxk.language; //err: 属性“language”为私有属性，只能在类“Person”中访问
gxk.say(); //err: 属性“say”为私有属性，只能在类“Person”中访问
```

+ protected  
类中带protected的属性和方法，只能在类和子类中访问，实例和子类实例都无法访问。
```ts
class Person {
  protected language: string;
  constructor() {
    this.language = "chinese";
  }
  protected say() {}
  speak() {
    this.say();
  }
}

const person = new Person();
person.language; //err: 属性“language”受保护，只能在类“Person”及其子类中访问
person.say(); //err: 属性“say”受保护，只能在类“Person”及其子类中访问

class GXK extends Person {
  constructor() {
    super();
    this.language;
    this.say();
  }
}

const gxk = new GXK();
gxk.language; //err: 属性“language”受保护，只能在类“Person”及其子类中访问
gxk.say(); //err: 属性“language”受保护，只能在类“Person”及其子类中访问
```

+ static  
类中带static的属性和方法，只能通过类或者子类调用，在类的内部或者实例都无法访问
```ts
class Personal {
  static language: string;
  constructor() {
    this.language = "chinese"; //err: 属性“language”在类型“Personal”上不存在
  }
  static say() {
    this.language;
  }
  speak() {
    this.say(); //err: 类型“typeof Personal”上不存在属性“language”
  }
}

Personal.language;
Personal.say();

const personal = new Personal();
personal.language; //err: 属性“language”在类型“Personal”上不存在
personal.say(); //err: 属性“say”在类型“Personal”上不存在

class GXK extends Personal {
  constructor() {
    super();
    this.language; //err: 属性“language”在类型“GXK”上不存在
    this.say(); //err: 属性“say”在类型“GXK”上不存在
  }
}

GXK.language;
GXK.say();

const gxk = new GXK();
gxk.language; //err: 属性“language”在类型“GXK”上不存在
gxk.say(); //err: 属性“say”在类型“GXK”上不存在
```

+ abstract  
带关键词abstract的类为抽象类，只能被继承，无法实例化
```ts
abstract class Person {
  protected language: string;
  constructor() {
    this.language = "chinese";
  }
  protected say() {}
  speak() {
    this.say();
  }
}

new Person(); //err: 无法创建抽象类的实例

class GXK extends Person {
  constructor() {
    super();
    this.language;
    this.say();
  }
}

const gxk = new GXK()
```

+ 关键词带来的this指向问题  
如下图中，在静态方法中访问公共属性，此时say中的this其实指向的是Personal而不是实例，因此访问不到实例中的属性。同样如果是公共方法访问静态属性，也需要注意this指向问题。
```ts
class Personal {
  public language: string;
  constructor() {
    this.language = "chinese";
  }
  static say() {
    this.language; //err: 类型“typeof Personal”上不存在属性“language”
  }
  private speak() {
    this.language; 
  }
}
```