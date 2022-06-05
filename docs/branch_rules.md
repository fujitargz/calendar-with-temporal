# Branch Rules

基本的に git-flow に従います。

## `main`

本番環境用ブランチです。\
`develop`ブランチからの Pull Request のみを受け付けます。

## `develop`

開発用ブランチです。\
`feature`ブランチからの Pull Request を受け付けます。\
リリース時には`main`ブランチに対して Pull Request を発行します。

## `feature`

開発用ブランチです。\
プロジェクトメンバーが作業を行うためのブランチで、`develop`から派生させます。\
ただし、衝突防止のため`feature/#ISSUE_ID`のように一意に定まる名前を付ける必要があります。\
作業完了時には`develop`ブランチに対して Pull Request を発行します。
