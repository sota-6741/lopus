# Lopus (ローパス)

大学生限定の「今ココ」を共有する、24時間限定の位置情報共有プラットフォーム。

## 1. プロジェクトの目的
全国の大学生が、所属大学の枠を超えてリアルタイムな情報を地図上で共有・閲覧できる場を提供します。大学認証（.ac.jp等）により、現役学生のみが参加できる安心なコミュニティを構築します。

## 2. コア・コンセプト
- **University First:** 大学メールアドレスによる厳格なドメイン認証。
- **Ephemeral (24h):** 全ての投稿（ピン）は24時間で自動消滅し、常に「鮮度の高い」情報のみがマップに残ります。
- **Cross University:** 大学ごとにエリアを分けず、全ユーザーが同一の地図空間で繋がります。
- **Dynamic Tagging:** pixivのように、ユーザーが自由にタグを作成・利用できる動的な分類システム。

## 3. 主な機能
- **認証・アカウント:**
  - 大学ドメイン検証付きメール認証。
  - アカウント（認証）とプロフィール（表示）の分離によるプライバシー保護。
- **エフェメラル・ピン:**
  - 現在地または任意地点へのピン投稿（テキスト、画像、カスタムタグ）。
  - PostGISを活用した高速な空間検索（中心点からの半径指定）。
- **インタラクション:**
  - ピンへのスタンプ・リアクション。
  - 現在有効なピンに基づくトレンドタグ・フィルタ。

## 4. 技術スタック
- **Frontend:** React Router v7, TypeScript, Vanilla CSS
- **Backend:** Hono, TypeScript, Cloudflare Workers
- **Database:** Supabase (PostgreSQL / PostGIS / Auth)
- **Storage:** Cloudflare R2
- **Infrastructure:** Cloudflare Pages / Workers

## 5. プロジェクト構造
```text
lopus/
├── apps/
│   ├── frontend/     # React Router v7 アプリケーション
│   └── backend/      # Hono / Cloudflare Workers API
│       └── docs/     # DDD設計ドキュメント、要件定義
└── ...
```

## 6. 開発ドキュメント
詳細な設計については `apps/backend/docs` を参照してください。
- [要件定義](./apps/backend/docs/requirements.md)
- [画面構成定義](./apps/backend/docs/screen-configuration.md)
- [ドメインモデル設計](./apps/backend/docs/ddd/)

## 7. セットアップ
```bash
# 依存関係のインストール
bun install

# フロントエンド開発
cd apps/frontend
bun run dev

# バックエンド開発
cd apps/backend
bun run dev
```
