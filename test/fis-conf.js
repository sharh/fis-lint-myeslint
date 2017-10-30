fis.match( '*.js', {
  //添加eslint
  lint: fis.plugin('myeslint', {
    "envs": ["browser", "node", 'es6'],
    "useEslintrc": false,
    "ignoreFiles": ["fis-conf.js", 'lib/**/*.js', 'node_modules/**/*.js'],
    "extends": "standard",
    "globals": [
      "__inline",
      "_",
      "__uri",
      "__RESOURCE_MAP__",
      "$",
      "jQuery",
      "zepto",
      "fis"
    ],
    "formatter": require('eslint-friendly-formatter'),
    "rules": {
        // 箭头函数，不提示
        "arrow-parens": 0,
        // 缩进，使用tab键，请设置编辑器右下角的Spaces,设置为Spaces:4.
        "indent": [0, "tab", {
            "SwitchCase": 4,
            "ArrayExpression": 1,
            "ObjectExpression": 1
        }],
        "semi": [1, "always"],//分号
        "keyword-spacing": 0,//关键词空格
        "space-before-blocks": 0,//块前面加空格
        "space-before-function-paren": 0,//函数括号加空格
        "space-in-parens": 0,//括号加空格
        "spaced-comment": 0,//注释前加空格
        "no-var": 0,//不使用var
        "no-loop-func": 2,//循环定义函数
        "no-magic-numbers": 2,//魔鬼数字，暂时提醒？在使用数组的splice时可能会提醒
        "no-unused-vars": 2,//未使用的变量
        "no-use-before-define": 2,//使用前未定义
        "no-undef": 2,//使用未定义的变量
        "no-mixed-spaces-and-tabs": [1, "smart-tabs"],//空格与tab共存
        "brace-style": [1, "1tbs", { "allowSingleLine": true }],
        "curly": [2, "all"],//“{”需要分行，所有的必须，如if、while等，必须带{}
        "no-restricted-globals": 1,//不允许定义全局变量
        "no-global-assign": 2, //全局变量不允许修改
        "quotes": 0,//引号
        "no-console": 1, //不允许使用console
        // 全等
        "eqeqeq": [2, "always", {"null": "ignore"}],
        "no-tabs": 1,//使用tab
        // //在条件语句中不要使用赋值语句
        "no-cond-assign": 2,
        //const申明的变量禁止修改
        "no-const-assign": 2,
        //函数参数禁止重名
        "no-dupe-args": 2,
        //class中的成员禁止重名
        "no-dupe-class-members": 2,
        //在对象字面量中，禁止使用重复的key
        "no-dupe-keys": 2,
        //在switch语句中禁止重复的case
        "no-duplicate-case": 2,
        //禁止使用不匹配任何字符串的正则表达式
        "no-empty-character-class": 2,
        //在一个本来就会自动转化为布尔值的上下文中就没必要再使用!! 进行强制转化了。
        "no-extra-boolean-cast": 1,
        // 尾部逗号
        "comma-dangle": 2,
        // 关键字加空格
        "key-spacing": 1,
        // 空行
        "no-trailing-spaces": 0,
        // 
        "eol-last": 0,
        // 不允许尾部空格
        "no-trailing-spaces": 0,
        //这条规则，简单来说就是在case语句中尽量加break，避免不必要的fallthrough错误，如果需要fall through，那么看官网。
        "no-fallthrough": 1,
        //简单来说不要写这样的数字.1 1.。应该写全，1.1 1.0 .
        "no-floating-decimal": 2,
        //该规则保证了不使用new Function(); 语句。
        "no-new-func": 2,
        //不要通过new Object（），来定义对象
        "no-new-object": 2,    
        //当定义字符串、数字、布尔值就不要使用构造函数了，String、Number、Boolean
        "no-new-wrappers": 2,
        //禁止无意得把全局对象当函数调用了，比如下面写法错误的：Math(), JSON()
        "no-obj-calls": 2,
        //禁止把require方法和new操作符一起使用。
        "no-new-require": 2,
        //不要重复申明一个变量
        "no-redeclare": 2,
        //操作符前后需要加空格
        "space-infix-ops": 2,
        //不要和自身作比较
        "no-self-compare": 2,
        //禁止对一些关键字或者保留字进行赋值操作，比如NaN、Infinity、undefined、eval、arguments等。
        "no-shadow-restricted-names": 2,
        //没有执行不到的代码
        "no-unreachable": 2,
        //在使用parseInt() 方法时，需要传递第二个参数，来帮助解析，告诉方法解析成多少进制。
        "radix": 2,
        // 使用isNaN判断NaN
        "use-isnan": 2,
        //在使用typeof操作符时，作比较的字符串必须是合法字符串eg:'string' 'object'
        "valid-typeof": 2,
        //立即执行函数需要用圆括号包围
        "wrap-iife": [2, "any"],
        // 添加空行
        "padded-blocks": 0,
        // 多个空行
        "no-multiple-empty-lines": 0,
        // =号加空格
        "space-infix-ops": 2,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
  }),
  // optimizer: fis.plugin( 'uglify-js' ),
  // parser: fis.plugin( 'babel' )
} );

fis.media( 'dev' )
  .match( '*.js', {
    optimizer: null
  } )
  .match( '*', {
    useHash: false,
    relative: true,
    deploy: [ fis.plugin( 'local-deliver', {
      to: './output'
    } ) ]
  } )