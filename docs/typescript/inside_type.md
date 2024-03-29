---
lang: zh-CN
title: 内置工具类型
description: 页面的描述
---

##### ts内置工具类型

+ Pick
```ts
type Pick<T, P extends keyof T> = {
  [K in P]: T[P];
};
```

+ Record
```ts
type Record<P extends keyof any, T> = {
  [K in P]: T;
};
```

+ Exclude
```ts
type Exclude<T, U> = T extends U ? never : T;
```

+ Extract
```ts
type Extract<T, U> = T extends U ? T : never
```

+ Partial
```ts
type Partial<T> = {
  [K in keyof T]?: T[K];
}
```

+ Required
```ts
type Required<T> = {
  [K in keyof T]-?: T[K];
}
```

+ Readonly
```ts
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
}
```

+ Omit
```ts
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
```

+ Parameters
```ts
type Parameters<F extends Function> = F extends (...args: infer P) => any ? P : never
```

+ ReturnType
```ts
type Params<A = any> = ReadonlyArray<A>
type ReturnType<F extends Function> = F extends (...args: Params) => infer R ? 
                                      R : never
```

+ NonNullable
```ts
type NonNullable<T> = T extends null | undefined ? never : T
```

+ ConstructorParameters
```ts
type ConstructorParameters<T extends abstract new (...args: any) => any> = 
                T extends abstract new (...args: infer P) => any ? P : never
```

+ InstanceType
```ts
type InstanceType<T extends abstract new (...args: any) => any> = 
                T extends abstract new (...args: any) => infer R ? R : any
```

+ ThisParammeterType
```ts
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? 
                            U : unknown
```

+ OmitThisParameter
```ts
type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? 
                            T : T extends (...args: infer A) => infer R ? 
                            (...args: A) => R : T
```