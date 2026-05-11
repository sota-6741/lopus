```mermaid
classDiagram
    class University1 {
        大学名: 福知山公立大学
        ドメイン名: fukuchiyama.ac.jp
    }
    class Account1 {
        メールアドレス: hogehoge@fukuchiyama.ac.jp
        ロール: 一般
    }
    class Profile1 {
        ユーザー名: なかどん
    }

    Account1 *-- Profile1 : 1:1で所有
    Profile1 --> University1 : 所属大学を参照
```
