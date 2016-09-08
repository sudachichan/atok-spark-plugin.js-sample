# atokspark-jsplugin-sample

node.js で動作する ATOK Spark プラグインのサンプルです。

## How to run

以下のコマンドでエラーが出なければ動作するはずです。
```
$ git clone https://github.com/sudachichan/atokspark-jsplugin-sample.git
$ cd atokspark-jsplugin-sample
$ npm install
$ npm run test
```

なお、 ATOK Spark の plugin.lst には以下のように指定してください。(Mac, nodebrew で node.js をインストールしている場合の例)
```
/Users/YOUR_ACCOUNT/.nodebrew/current/bin/node PATH/TO/sample.js
```
- `YOUR_ACCOUNT`: あなたのユーザ名
- `PATH/TO/sample.js`: sample.js がチェックアウトされたパス
