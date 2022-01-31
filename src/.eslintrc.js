module.exports ={
    parser: 'babel-eslint',
    env: {
    browser: true,
    commonjs: true,
    es7: true,
    node: true,
    jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures : {
            jest: true, 
     },
    plugins: ['react'],
    rules: {
    
        },
       }
      }