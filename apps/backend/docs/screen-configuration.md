# 画面構成定義: Lopus

本書は、大学生限定のリアルタイム位置情報共有プラットフォーム「Lopus」の画面構成と機能のイメージを定義します。

## 1. 画面構成案 (UI Composition)

### 1.1 ログイン画面 (Login Screen)
- **要素:** メールアドレス、パスワード、ログインボタン。

### 1.2 新規アカウント作成画面 (Signup Screen)
- **要素:** 大学メアド入力（リアルタイムドメイン検証）、パスワード、ユーザー名。

### 1.3 メインマップ画面 (Main Map View)
- **タグフィルタ:** 画面上部にチップス形式で表示。
  - **仕様:** 現在有効なピンが紐付いているタグのみを表示（トレンド順）。
- **投稿ボタン (FAB):** 「ピンをドロップ」。
- **ユーザー情報:** 大学名を表示（`university_id` から動的に取得）。

### 1.4 投稿ドロワー (Pin Submission Drawer)
- **カスタムタグ入力:** 
  - 既存タグのサジェストを表示。
  - 新しい単語を入力して投稿すると、自動的に新タグとして登録される（pixiv方式）。

### 1.5 ピン詳細カード (Pin Detail Card)
- **要素:** ユーザー名、大学名、タグ、投稿内容、24時間カウントダウン。

---

## 2. Figma Make 用プロンプト (Recommended Prompt)

```text
Design a simple mobile app mockup for "Lopus", a location-based social platform for university students. 
**Important:** All UI text must be in **Japanese**.
**Style:** Clean functional mockup, minimalist aesthetic.

**Key Screens:**
1. **Login & Signup:** Focused on university email verification.
2. **Main Map:** Full-screen map with top horizontal scrolling filter chips for "Active Tags" (e.g., "すべて", "勉強", "食事"). Bottom FAB labeled "ピンをドロップ".
3. **Pin Submission Drawer:** Include a "Create/Select Tag" field (タグを入力・選択) where users can type custom tags. Post button "24時間限定で投稿".
4. **Pin Detail:** Map overlay showing the user's university name, a custom tag, and a "Remaining Time" (残り時間) 24h countdown.
```
