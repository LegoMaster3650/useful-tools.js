cookie-tools
============
#### cookie-tools gives you some simplified capabilities with cookies  
### [Unminified - Has no compression](https://cdn.jsdelivr.net/gh/LegoMaster3650/useful-tools.js@1.0.0-pre1/cookie-tools/cookie-tools.js)  
### [Minified - Maximum compression](https://cdn.jsdelivr.net/gh/LegoMaster3650/useful-tools.js@1.0.0-pre1/cookie-tools/cookie-tools.min.js)  
  
**If you want to remotely call it, use the following html tags:**  
**Unminified:**  
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/LegoMaster3650/useful-tools.js@1.0.0-pre1/cookie-tools/cookie-tools.js"></script>
```  
**Minified:**  
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/LegoMaster3650/useful-tools.js@1.0.0-pre1/cookie-tools/cookie-tools.min.js"></script>
```  
  
**And for downloads:**  
[**Unminified - Has no compression**](https://cdn.jsdelivr.net/gh/LegoMaster3650/useful-tools.js@1.0.0-pre1/cookie-tools/cookie-tools.js)  
[**Minified - Maximum compression**](https://cdn.jsdelivr.net/gh/LegoMaster3650/useful-tools.js@1.0.0-pre1/cookie-tools/cookie-tools.min.js)  
  
Usage
=====  
----------------------------------------------  
```js
cookies.set(key, value[, extras])
```  
Sets a cookie where:  
`key` is the name of the cookie | String,  
`value` is the cookie value | String, and  
`extras` is a json object with optional additions | Json:  
  
`path`: Cookie path | String  
`domain`: Cookie domain | String  
`expires`: The cookie expires. | UTC String of expiration date, Integer (Number) in seconds to last, or a Date object of the expiration date  
`secure`: Transfer over https only if true | Boolean (True/False)
  
**Returns: nothing**  
  
----------------------------------------------  
```js
cookies.get(key)
```  
Gets the cookie where:  
`key` is the name of the cookie to get. | String  
  
**Returns: Cookie value | String**  
  
----------------------------------------------  
```js
cookies.has(key)
```  
Checks if a cookie exists where:  
`key` is the name of the cookie to get. | String  
  
**Returns: If cookie exists | Boolean (True/False)**  
  
----------------------------------------------  
```js
cookies.delete(key[, path[, domain]])
```  
Deltes a cookie where:
`key` is the name of the cookie to get. | String  
`path` (optional) is the path of the cookie to get. | String  
`domain` (optional) is the domain of the cookie to get. | String  
  
**Returns: nothing**  
  
----------------------------------------------  
```js
cookies.list()
```  
Sends a list of the names of every cookie.

**Returns: List of cookie names | Array (List)**  
  
----------------------------------------------  
```js
cookies.list(list)
```  
**WARNING: list must not count as an undefined value (such as false) or this will work like above**  
Sends a json object containing page cookies where:
`list` is the number of cookies to get. If it's not a number, it will list all cookies. | Anything  

**Returns: JSON of cookies**
  
----------------------------------------------  
