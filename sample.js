const fs = require('fs');
const marked = require('marked');
const Plugin = require('atokspark-jsplugin');

// 簡易プラグイン記法のサンプルコードです。
Plugin.byRules({
    // async: true,
    // を指定すると、非同期モードで動作します。
    // 非同期モードでは、以下で指定する関数の第一引数として callback が追加され、
    // return ではなく callback を呼び出すよう変わります。

    // replaces: {正規表現: 関数} を指定すると、
    // 正規表現にマッチしたトリガーを、戻り値の文字列に置換します。
    replaces: {
        'pluginjs:': () => {
            return 'node.jsサンプルです';
        },
        'pluginjs2:': () => {
            return '=============\n  ATOK Spark + node.js Plugin\n=============';
        },
        'pluginjs3:(.*):': (matches) => {
            return '正規表現を使う場合のサンプルです。「' + matches[1] + '」にマッチしました。'; 
        },
    },
    // views: {正規表現: 関数} を指定すると、
    // 正規表現にマッチしたトリガーで、戻り値のXHTMLを表示します。
    views: {
        'pluginjs:help:': () => {
            const README_md = fs.readFileSync(__dirname + '/README.md', 'utf8'); 
            return marked(README_md);
        },
    },
});
