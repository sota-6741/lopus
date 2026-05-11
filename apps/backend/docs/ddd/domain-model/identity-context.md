```plantuml
@startuml
title ドメインモデル図：認証とプロフィール (Identity & Access)

rectangle "大学集約" <<Aggregate>> #f9f9f9 {
  class "大学 (University)" as Univ {
    大学名: 福知山公立大学
    ドメイン名: fukuchiyama.ac.jp
  }
}

rectangle "アカウント集約" <<Aggregate>> #f9f9f9 {
  class "アカウント (Account)" as Acc {
    メールアドレス: hogehoge@fukuchiyama.ac.jp
    ロール: 一般 / 管理者
  }
}

rectangle "プロフィール集約" <<Aggregate>> #f9f9f9 {
  class "プロフィール (Profile)" as Prof {
    ユーザー名: なかどん
    アイコンURL: https://...
  }
}

' 関連
Acc "1" *-- "1" Prof : プロフィールを保持する >
Prof "0..*" --> "1" Univ : 所属先を参照する >

note bottom of Acc
  - 認証に成功した時のみアカウントが生成される
end note

note bottom of Prof
  - 大学名は所属ドメインから自動設定される
  - 所属大学は後から変更できない
end note

@enduml
```
