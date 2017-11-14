# eslint-plugin-codeceptjs

custom rules for CodeceptJs

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-codeceptjs`:

```
$ npm install eslint-plugin-codeceptjs --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-codeceptjs` globally.

## Usage

Add `codeceptjs` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "codeceptjs"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "codeceptjs/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





