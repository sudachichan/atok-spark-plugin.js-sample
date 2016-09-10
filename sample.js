var Plugin = require('atokspark-jsplugin');

// {正規表現: 関数} の連想配列を指定することで、簡単にプラグインを定義できます。
Plugin.byRules({
    replaces: {
        'pluginjs:': function () {
            return 'node.jsサンプルです';
        },
        'pluginjs2:': function () {
            return '=============\n  ATOK Spark + node.js Plugin\n=============';
        },
        'pluginjs3:(.*):': function (matches) {
            return '正規表現を使う場合のサンプルです。「' + matches[1] + '」にマッチしました。'; 
        },
    },
    views: {
        'pluginjs:help:': function () {
            return '<div>hoge</div>';
        },
    },
});
