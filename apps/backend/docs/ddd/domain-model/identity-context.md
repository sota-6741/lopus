```plantuml
@startuml
title ドメインモデル図：認証とプロフィール (Identity & Access)

rectangle "大学集約" <<Aggregate>> #f9f9f9 {
  class "大学 (University)" as Univ {
    大学名: 福知山公立大学
    ドメイン名: fukuchiyama.ac.jp
  }
}

rectangle "ユーザー集約" <<Aggregate>> #f9f9f9 {
  class "ユーザー (User)" as User {
    メールアドレス: hogehoge@fukuchiyama.ac.jp
    パスワード: (ハッシュ化済み)
    ロール: 一般 / 管理者
    メール認証済みフラグ: boolean
  }
  class "プロフィール (Profile)" as Prof {
    ユーザー名: なかどん
    アイコンURL: https://...
  }
}

rectangle "メール認証集約" <<Aggregate>> #f9f9f9 {
  class "メール認証トークン (EmailVerificationToken)" as Token {
    トークン値: UUID
    ユーザーID: UserId
    有効期限: DateTime
  }
}

' 関連
User "1" *-- "1" Prof : プロフィールを保持する >
Prof "0..*" --> "1" Univ : 所属先を参照する >
Token "0..1" --> "1" User : ユーザーを認証対象とする(ID参照) >

note bottom of Token
  - 新規登録時に生成される
  - 有効期限（30分など）を持つ
  - 認証完了後、または再発行時に削除される
end note

@enduml
```
