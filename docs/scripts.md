# Available Scripts

## `yarn start`

アプリケーションを development モードで実行します。\
[http://localhost:3000](http://localhost:3000)で閲覧可能です。

## `yarn test`

テストを実行します。

## `yarn build`

production ビルドを行い、成果物を`build/`に出力します。

## `yarn eject`

> **Warning**\
> 不可逆な操作なので取り扱い注意。

プロジェクトを eject し、設定のカスタマイズを可能にします。

## `yarn lint:es`

ESLint を`--fix`オプション付きで実行します。\
対象は`src/`以下の全ての`js/jsx/ts/tsx`ファイルです。

## `yarn lint:style`

Stylelint を`--fix`オプション付きで実行します。\
対象は`src/`以下の全ての`css/scss`ファイルです。

## `yarn fmt`

Prettier を`--write`オプション付きで実行します。\
対象は`src/`以下の全ての`js/jsx/ts/tsx/css/scss`ファイルです。

## `yarn fix`

Prettier、ESLint、Stylelint を実行します。

## `yarn prepare`

> **Note**\
> CI 用 script なので、手動で叩く必要はありません。

`husky`をインストールします。

## `yarn storybook`

Storybook を起動します。\
[http://localhost:6006](http://localhost:6006)で閲覧可能です。

## `yarn build-storybook`

Storybook をビルドし、成果物を`storybook-static/`に出力します。
