# Steps to reproduce

```
npm init
npm install typescript zod
touch index.ts
```

`index.ts` has a simple `z.object` shape:
```
const shape = z.object({
  foo: z.string(),
  bar: z.number(),
});
```
and the inferred type:
```
type Shape = z.infer<typeof shape>;
```

and VS Code indicates that `foo` and `bar` are both optional:
```
type Shape = {
    foo?: string;
    bar?: number;
}
```
![image](https://user-images.githubusercontent.com/334661/135726348-ed78c34d-cd63-4dbe-8b95-19c0dba933c7.png)

I would expect them to not be optional, like so:
```
type Shape = {
    foo: string;
    bar: number;
}
```
