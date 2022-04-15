# Usage

## Install

```bash
$ npm install --save-dev @tksst/prettier-config
```

## Using the config

To apply the config simply, put the below to `package.json`:

```jsonc
{
  // ...
  "prettier": "@tksst/prettier-config"
}
```

Or create a `.prettierrc` file, `.prettierrc.json`, `.prettierrc.yml`, `.prettierrc.yaml`, or `.prettierrc.json5` file and just put:

```json
"@tksst/prettier-config"
```

Or if you want to extend the config, import the config on `prettier.config.js` or `.prettierrc.js`:

```javascript
module.exports = {
  ...require("@tksst/prettier-config")
  // and your settings here
};
```
