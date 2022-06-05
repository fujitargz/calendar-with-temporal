# Lint & Format

本プロジェクトでは、ESLint、Stylelint、Prettier を導入しています。

## Configuration

### ESLint

設定は`package.json`の`eslint`フィールドに記載しています。\
`create-react-app`の設定をベースに、`import`関係のルールを追加しています。

### Stylelint

設定は`package.json`の`stylelint`フィールドに記載しています。\
SCSS の基本ルールをベースに、プロパティの順序に関するルールを追加しています。

### Prettier

デフォルトの設定を利用しているため、設定ファイルは作成していません。
