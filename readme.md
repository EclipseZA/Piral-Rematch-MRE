# Readme

## Steps to reproduce

1. Run 'npm install'
2. Build declaration file with the following Piral CLI command: 'piral declaration'
3. Notice multiple warnings like this one: "‼  Could not resolve type node at position 8045 of "E:/Repositories/SanlamCX/Other/Tests/Piral-Rematch-MRE/node_modules/@rematch/core/dist/types.d.ts". Kind: 197."
4. Compare ./dist.index.d.ts types for ExtractParameterFromReducer and ExtractParameterFromEffect with those in ./node_modules/@rematch/core/dist/types.d.ts
5. Notice that some parts of this type have been stripped out, resulting in invalid syntax.

## Type comparisons

Below are comparisons between the types on node_modules/@rematch/core/dist/types.d.ts and those generated in ./dist.index.d.ts
Note: These have been formatted for readability.


### ExtractParameterFromEffect

node_modules/@rematch/core/dist/types.d.ts ExtractParameterFromEffect:
```typescript
declare type ExtractParameterFromEffect<
    P extends unknown[], 
    V extends 'payload' | 'meta'
> = P extends [] 
    ? never 
    : P extends [p?: infer TPayload, s?: unknown] 
    ? V extends 'payload' 
        ? P extends [infer TPayloadMayUndefined, ...unknown[]] 
            ? [p: TPayloadMayUndefined] 
            : [p?: TPayload] 
        : never 
    : P extends [
        p?: infer TPayload,
        s?: unknown,
        m?: infer TMeta,
        ...args: unknown[]
    ] 
    ? V extends 'payload' 
        ? P extends [infer TPayloadMayUndefined, ...unknown[]] 
            ? [p: TPayloadMayUndefined] 
            : [p?: TPayload] 
        : P extends [unknown, unknown, infer TMetaMayUndefined, ...unknown[]] 
        ? [m: TMetaMayUndefined] 
        : [m?: TMeta] 
    : never;
```

./dist.index.d.ts ExtractParameterFromEffect:
```typescript
export type ExtractParameterFromEffect<
    P extends Array<unknown>, 
    V extends "payload" | "meta"
> = P extends [] 
    ? never 
    : P extends [, ] 
    ? V extends "payload" 
        ? P extends [infer TPayloadMayUndefined, ...Array<unknown>] 
            ? [] 
            : [] 
        : never 
    : P extends [
        , 
        , 
        , 

    ] 
    ? V extends "payload" 
        ? P extends [infer TPayloadMayUndefined, ...Array<unknown>] 
            ? [] 
            : [] 
        : P extends [unknown, unknown, infer TMetaMayUndefined, ...Array<unknown>] 
        ? [] 
        : [] 
    : never;
```

### ExtractParameterFromReducer

node_modules/@rematch/core/dist/types.d.ts ExtractParameterFromReducer:

```typescript
declare type ExtractParameterFromReducer<
    P extends unknown[], 
    V extends 'payload' | 'meta'
> = P extends [] 
    ? never 
    : P extends [p?: infer TPayload] 
    ? V extends 'payload' 
        ? P extends [infer TPayloadMayUndefined, ...unknown[]] 
            ? [p: TPayloadMayUndefined] 
            : [p?: TPayload] 
        : never 
    : P extends [p?: infer TPayload, m?: infer TMeta, ...args: unknown[]] 
    ? V extends 'payload' 
        ? P extends [infer TPayloadMayUndefined, ...unknown[]] 
            ? [p: TPayloadMayUndefined] 
            : [p?: TPayload] 
        : P extends [unknown, infer TMetaMayUndefined, ...unknown[]] 
        ? [m: TMetaMayUndefined] 
        : [m?: TMeta] 
    : never;

```

./dist.index.d.ts ExtractParameterFromReducer:

```typescript
  export type ExtractParameterFromReducer<
    P extends Array<unknown>, 
    V extends "payload" | "meta"
> = P extends [] 
    ? never 
    : P extends [] 
    ? V extends "payload" 
        ? P extends [infer TPayloadMayUndefined, ...Array<unknown>] 
            ? [] 
            : [] 
        : never 
    : P extends [, , ] 
    ? V extends "payload" 
        ? P extends [infer TPayloadMayUndefined, ...Array<unknown>] 
            ? [] 
            : [] 
        : P extends [unknown, infer TMetaMayUndefined, ...Array<unknown>] 
        ? [] 
        : [] 
    : never;
```