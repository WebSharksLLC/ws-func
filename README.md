# ws-helper

Helper functions for node.js projects

* [X]  base64
* [ ]  string
* [ ]  time

## How to use

Example:

````javascript
const {base64Helper} = require('ws-func');
base64Helper.stringToBase64('test string')
````

OR

```javascript
import base54Helper from 'ws-func'
base64Helper.stringToBase64('test string')
```

### BASE64

**isBase64String(str)** - returns true if given base64 string (not file string)

**isBase64File(str)** - returns true if given base64 string contains file with ext

**stringToBase64File(str, mime)** - adds mime type to given base64 string and returns base 64 file string

**base64ToString(str)** - decodes base 64 string

**base64ToBuffer(str)** - returns buffer from base 64 string

**getExtFromBase64(str)** - returns extension from base64 file string

**saveBase64ToFileSync(str, path)** - syncroniusly saves base64 file string to file

**saveBase64ToFile(str, path)** - asyncroniusly saves base64 file string to file

**loadFileAsBase64(path)** - asyncroniusly loads file data by given path and returns it as base64 file string

**loadFileAsBase64Sync(path)** - syncroniusly loads file data by given path and returns it as base64 file string

### STRING

**isNullOrEmpty(str)** - returns true if string is null or empty

**makeSlug(str)** - makes url's slug from givven string and returns it

**random(length)** - returns alphanumeric random string with givven length

### TIME

**timestamp(diff)** - returns current timestamp or current timestamp + diff seconds
