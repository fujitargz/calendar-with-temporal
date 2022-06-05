# CI/CD

## VSCode

VSCode では ESLint/Stylelint/Prettier の拡張機能を導入することでそれぞれのツールが自動実行されます。

## Git

Commit 時に、ステージングされたファイルに対して ESLint/Stylelint/Prettier が自動実行されます。

ESLint/Stylelint では Warning が 1 つでも残っていると Commit に失敗します。\
Commit に失敗する場合は rule に従ってコードを修正すべきですが、場合によっては rule を無効化しても良いです。\
`--no-verify`オプションを付けることで各種ツールを実行せずに Commit することも可能ですが、非推奨です。
