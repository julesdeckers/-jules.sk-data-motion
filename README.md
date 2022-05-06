# DataMotion
[![NPM version](https://img.shields.io/npm/v/@jules.sk/data-motion)](https://www.npmjs.com/package/@jules.sk/data-motion)

# ⚙ Usage

## Install
Install `@jules.sk/data-motion` package:
* `npm install @jules.sk/data-motion`

Import script, styles and initialize:
```js
import { init } from '@jules.sk/data-motion';
import '@jules.sk/data-motion/dist/data-motion.css'; // You can also use <link> for styles
// ..
init();
```

## Directives
* `[data-motion=fade-up]`
* `[data-motion=fade-down]`
* `[data-motion-delay]` - 0, 50, 100, 150 ... 3000
* `[data-motion-duration]` - 0, 50, 100, 150 ... 3000