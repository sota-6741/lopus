```mermaid
classDiagram
    class University1 {
        大学名: 福知山公立大学
        ドメイン名: fukuchiyama.ac.jp
    }
    class User1 {
        メールアドレス: hogehoge@fukuchiyama.ac.jp
        パスワード: ********
        ロール: 一般
    }
    class Profile1 {
        ユーザー名: なかどん
    }

    User1 *-- Profile1 : 1:1で所有
    Profile1 --> University1 : 所属大学を参照
```
