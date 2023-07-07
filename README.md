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

If you use prettier >= 3, you can import the config as an ES Module:

```javascript
export { default } from "@tksst/prettier-config";
```

or

```javascript
import config from "@tksst/prettier-config";

export default {
  ...config
  // and your settings here
};
```
