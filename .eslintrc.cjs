module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-base',
    './packages/web/auto-imports.json',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh', '@typescript-eslint', 'import'],
  rules: {
    'react-refresh/only-export-components': 'warn',

    // 常用
    'linebreak-style': 'off',
    'max-len': ['warn', 120],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],

    // 箭头函数参数需要括号
    'arrow-parens': 0,

    // 可在方法中使用require
    'global-require': 'warn',

    // 在 return 语句前换行
    'newline-before-return': 'off',

    // 使用 console
    'no-console': 'warn',

    // 使用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 禁止未使用的变量
    'no-unused-vars': 1,
    '@typescript-eslint/no-unused-vars': 1,

    // 在 return 语句中不允许赋值运算符
    'no-return-assign': 0,

    // 防止赋值给声明为函数参数的变量引起的错误
    'no-param-reassign': ['warn', { props: false }],

    // 可以使用 for in
    'no-restricted-syntax': 0,

    // 函数内局部变量可与全局变量重名，阅读代码时容易混淆
    'no-shadow': 'warn',

    'no-tabs': 'warn',

    // 除非在 global 中注释提及，否则不允许使用未声明的变量
    'no-undef': 'error',

    // 禁止 ++ --
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    // 'comma-dangle': [
    //   'error',
    //   {
    //     arrays: 'always',
    //     objects: 'always',
    //     imports: 'never',
    //     exports: 'never',
    //     functions: 'never',
    //   },
    // ],

    // 控制逗号前后的空格
    'comma-spacing': [2, { before: false, after: true }],

    // 控制逗号在行尾出现还是在行首出现
    'comma-style': [2, 'last'],

    'import/no-extraneous-dependencies': [1, { devDependencies: true }],
    'import/no-unresolved': 0,
    'import/no-absolute-path': 0,
    'object-curly-newline': ['error', { multiline: true }],
    'prefer-destructuring': ['error', { object: true, array: false }],

    // add new line above comment
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/extensions': ['warn', { scss: 'ignorePackages' }],
  },
}
