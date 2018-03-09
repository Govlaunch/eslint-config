## `Govlaunch/eslint-config`

Reusable **eslint** settings for our projects.

## Front-end

In order to add eslint with Govlaunch' settings, you'll need to do the following:

```
yarn add -D @govlaunch/eslint-config-frontend lint-staged husky
```

Then create a **.eslintrc.js**:

```JS
module.exports = {
  extends: ["@govlaunch/eslint-config-frontend"]
};
```

Update your **package.json** with the following:

```JSON
{
  "scripts": {
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "*.js": [
      "prettier --trailing-comma all --write",
      "eslint --fix",
      "git add"
    ]
  }
}
```

## Back-end

The same as above, except that you'll replace `eslint-config-frontend` with `eslint-config-backend`.
Idem for installation process.

Update your **package.json** with the following:

```JSON
{
  "scripts": {
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "*.js": [
      "prettier --trailing-comma es5 --parser flow --write",
      "eslint --fix",
      "git add"
    ]
  }
}
```
