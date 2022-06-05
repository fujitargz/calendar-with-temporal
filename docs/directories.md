# Directories

ソースコードは全て`src/`以下に配置します。

## `src/`

ソースコードの root ディレクトリです。\
直下には`src/index.tsx`など、アプリケーションの root になるファイルのみ配置します。

## `src/components/`

コンポーネントのソースコードを配置するディレクトリです。

1 コンポーネント 1 ディレクトリとして、メインとなるファイルは`index`と命名します。

```
src/
└── components/
    └── COMPONENT_NAME/
        ├── index.tsx
        ├── index.module.scss
        ├── index.stories.tsx
        └── SUB_COMPONENT_NAME/
            ├── index.tsx
            ├── index.module.scss
            └── index.stories.tsx
```
