# Functions 基礎
## Firebase立ち上げ
bash 1.
npm run dev:firebase

## Functions立ち上げ
bash 2.
firebase serve --only functions

## 関数の記述
functions/index.js
に記述されているファイルが実行される
index.js 以外で関数を記述し、functions として機能させたい場合は
exports require を使う

## 関数のテスト
```bash
curl -X GET http://localhost:5000/nextjs-firebase-template-1d036/us-central1/testGet
it is get request

curl -X POST -H "Content-Type:application/json" http://localhost:5000/nextjs-firebase-template-1d036/us-central1/testPost-testPost
it is post request

```


# More...
## Stripe テスト
```bash
curl -X GET http://localhost:5000/nextjs-firebase-template-1d036/us-central1/stripe-createQuote
it is get request

curl -X POST -H "Content-Type:application/json" http://localhost:5000/nextjs-firebase-template-1d036/us-central1/stripe-createQuote -d '{"customer":"cus_Kr3AYzzA3obm40"}' 
curl -X POST http://localhost:5000/nextjs-firebase-template-1d036/us-central1/stripe-createQuote -d customer=cus_Kr3AYzzA3obm40
curl -X POST http://localhost:5000/nextjs-firebase-template-1d036/us-central1/stripe-createQuote -data customer=cus_Kr3AYzzA3obm40
# -d customer=cus_Kr3AYzzA3obm40
it is post request
```
