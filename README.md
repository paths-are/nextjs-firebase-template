# Next.js Firebase Template

## 構成

- Next.js
- Recoil
- TypeScript
- MUI
- Firebase
  - Authentication
  - Firestore
  - Functions
  - Analytics
  - Storage?
- Stripe

## 構築手順(0 から構築)

```bash
curl https://codeload.github.com/mui-org/material-ui/tar.gz/master | tar -xz --strip=2  material-ui-master/examples/nextjs-with-typescript
mv nextjs-with-typescript/ nextjs-firebase-template/
git init

firebaseのコンソール画面から新規プロジェクトを作成する
https://console.firebase.google.com/u/0/
プロジェクト名を入力 → 続行
このプロジェクトでGoogleアナリティクスを有効にするをONにする → 続行
アカウントを選択
→ 続行
```

### Firestore Database 始める

１．Cloud Firestore のセキュリティ保護ルールは「テストモードで開始する」を選択
２．Cloud Firestore のロケーションを設定しますは「asia-northeast1」（Tokyo）を選択

### Functions 始める

「プロジェクトをアップグレード」を実行
Blaze プランを購入する
予算が心配な人は予算アラートを設定

```bash
firebase init
? Are you ready to proceed?
-> yes
? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices.
-> Firestore,Function,Storage,Emulatorsを選択する
? Please select an option:
-> Use an existing project
? Please specify a unique project id (warning: cannot be modified afterward) [6-30 characters]:
-> さっき作ったやつを選択する
```

```bash:firebase init全量
$ firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You re about to initialize a Firebase project in this directory:

  C:\*****\nextjs-firebase-template

? Are you ready to proceed? `Yes`
? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. `Firestore: Configure security rules and indexes files for Firestore, Functions: Configure a Cloud Functions directory and its files, Storage: Configure a security rules file for Cloud Storage, Emulators: Set up local emulators for Firebase products`

=== Project Setup

First, let s associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we ll just set up a default project.

? Please select an option: `Use an existing project`
? Select a default Firebase project for this directory: `nextjs-firebase-template-******** (nextjs-firebase-template)`
i  Using project nextjs-firebase-template-******** (nextjs-firebase-template)

=== Firestore Setup

Firestore Security Rules allow you to define how and when to allow
requests. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore Rules? `firestore.rules`

Firestore indexes allow you to perform complex queries while
maintaining performance that scales with the size of the result
set. You can keep index definitions in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore indexes? `firestore.indexes.json`

=== Functions Setup

A functions directory will be created in your project with sample code
pre-configured. Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? `JavaScript`
? Do you want to use ESLint to catch probable bugs and enforce style? `No`
+  Wrote functions/package.json
+  Wrote functions/index.js
+  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? `Yes`

added 233 packages, and audited 234 packages in 21s

11 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

=== Storage Setup

Firebase Storage Security Rules allow you to define how and when to allow
uploads and downloads. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Storage Rules? `storage.rules`
+  Wrote storage.rules

=== Emulators Setup
? Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your choices. `Authentication Emulator, Functions Emulator, Firestore Emulator, Storage Emulator`
? Which port do you want to use for the auth emulator? `9099`
? Which port do you want to use for the functions emulator? `5001`
? Which port do you want to use for the firestore emulator? `8080`
? Which port do you want to use for the storage emulator? `9199`
? Would you like to enable the Emulator UI? `Yes`
? Which port do you want to use for the Emulator UI (leave empty to use any available port)?
? Would you like to download the emulators now? `No`

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

+  Firebase initialization complete!
```

### ライブラリインストール

```bash
npm i recoil
npm i firebase
```

### firebase authentication 設定

始める
Google を有効化

### firebase 設定

Firebase の設定 → Web アプリへ Firebase を追加
名前は適当に入れる 例）next-firebase-template

```bash
touch .env
```

TODO : 設定する

```.env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_MEASUREMENT_ID=
```

### インポート文の From のフォルダの統一化

```json:tsconfig.json
  // add
  "baseUrl": ".",
  "paths": {
    "@/src/*": ["src/*"]
  }
```

### pages フォルダを src 配下に移動し、見やすくする

```
mv pages/ src/pages/
```

pages 配下の import 文を修正

```js
// before
import Something from "../*";

// after
import Something from "@/*";
```

### ディレクトリ構成

mkdir src/hooks src/types src/utils src/components src/containers src/constants src/libs

### auth

### emulators
init （さっきし忘れた） 
→これだとemurators:startで失敗して、firebase initしなおすことになるから
上で説明しているfirebase init の最後の「? Would you like to download the emulators now? `No`」の部分をYesに修正した方が良い
```

$ firebase init emulators

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

C:\Users\kumag\OneDrive\デスクトップ\works-private\15_next_firebase_template

? Are you ready to proceed? Yes

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: nextjs-firebase-template-1d036 (nextjs-firebase-template)
i Using project nextjs-firebase-template-1d036 (nextjs-firebase-template)

=== Emulators Setup
? Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your choices. Authe
ntication Emulator, Functions Emulator, Firestore Emulator, Storage Emulator
? Which port do you want to use for the auth emulator? 9099
? Which port do you want to use for the functions emulator? 5001
? Which port do you want to use for the firestore emulator? 8080
? Which port do you want to use for the storage emulator? 9199
? Would you like to enable the Emulator UI? Yes
? Which port do you want to use for the Emulator UI (leave empty to use any available port)?
? Would you like to download the emulators now? Yes

i Writing configuration info to firebase.json...
i Writing project information to .firebaserc...
i Writing gitignore file to .gitignore...

- Firebase initialization complete!
```

### Functions のデプロイ

```bash
構文：firebase deploy --only functions:[function-name]
firebase deploy --only functions:createUserDocument
```

### Analytics 設定
通常は１時間おきにバッチで分析情報がアップロードされるっぽい
開発ですぐに検証するには下記を行う
https://firebase.google.com/docs/analytics/debugview

### 便利コマンド

## 諸設定

pages は src 配下に入れて見やすくしている → next.config.js を更新 → next.js v9 から設定は必要なかったみたい

## 拡張おすすめ

pwa -> next-pwa
https://www.npmjs.com/package/next-pwa

## 代替ツール

状態管理 use, redux?

## Future Adding

TEST Library
TEST Code Sample
ESLint
