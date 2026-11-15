# personal_portfolio_with_blog

ブログ付きの個人ポートフォリオサイトを、Next.jsとshadcn/uiで作り始めたもの。課題は、200個の作品案を初級から上級まで並べた[dev.toの記事](https://dev.to/kishansheth/200-project-ideas-from-beginner-to-advanced-with-open-source-contributions-3g6a)のBeginnerにある「Personal Portfolio with Blog」。

現在できているのは画面の見た目だけで、データや認証はまだ無い。

- `/` トップ。ヘッダー（「新米SESの備忘録」）と、記事カードの仮置きを3列のグリッドで並べる
- `/article` 記事ページの枠
- `/login` 管理者ログインのフォーム（メールアドレスとパスワード。送信の処理は未実装）
- `/admin` 管理画面の枠（「新規作成」「ログアウト」ボタンのみ）

これからやること（当初のTodo）

- 認証機能
- ブログ記事の作成画面
- 記事ページのダイナミックルーティング

## 動かし方

`package.json` の scripts から確認したコマンド。

```sh
npm install
npm run dev   # next dev --turbopack（http://localhost:3000）
```

## 使った技術

Next.js 15（App Router）、React 19、TypeScript、Tailwind CSS、shadcn/ui（Radix UI）、lucide-react
