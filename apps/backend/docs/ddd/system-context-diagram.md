```mermaind
graph TD
    %% スタイル定義
    classDef person fill:#08427b,stroke:#052e56,stroke-width:2px,color:#fff;
    classDef system fill:#1168bd,stroke:#0b4884,stroke-width:2px,color:#fff;
    classDef ext_system fill:#999999,stroke:#6b6b6b,stroke-width:2px,color:#fff;

    %% ノード定義
    User("大学生ユーザー<br>[Person]<br><br>.ac.jp等のメールアドレスを持つ学生"):::person
    Admin("システム管理者<br>[Person]<br><br>不適切なコンテンツの削除・運用保守"):::person

    Lopus("Lopus システム<br>[Software System]<br><br>24時間限定の位置情報共有プラットフォーム。"):::system

    Auth("Supabase Auth<br>[Software System]<br><br>ユーザー認証・JWT管理・メール送信"):::ext_system
    DB("Supabase DB (PostGIS)<br>[Software System]<br><br>位置情報やユーザーデータの永続化"):::ext_system
    R2("Cloudflare R2<br>[Software System]<br><br>画像オブジェクトストレージ"):::ext_system
    Map("Map Data Provider<br>[Software System]<br><br>MapTiler / OSM等の無料枠<br>地図タイルの配信"):::ext_system

    %% リレーションシップ
    User -- "サインアップ、マップ閲覧、<br>ピン投稿、画像UP" --> Lopus
    Admin -- "不適切な投稿の削除、<br>ユーザー管理" --> Lopus

    Lopus -- "地図タイルデータの取得" --> Map
    Lopus -- "認証処理・JWT検証" --> Auth
    Lopus -- "画像の保存/取得" --> R2
    Lopus -- "空間検索・データ永続化" --> DB

    Auth -- "認証メール送信" --> User
```
