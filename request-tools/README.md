request-tools
============
#### request-tools allows you to make http requests client-side easily  
### [Unminified - Has no compression](https://cdn.jsdelivr.net/gh/LegoMaster3650/useful-tools.js@1.0.0/request-tools/request-tools.js)  
### [Minified - Maximum compression](https://cdn.jsdelivr.net/gh/LegoMaster3650/useful-tools.js@1.0.0/request-tools/request-tools.min.js)  
  
**If you want to remotely call it, use the following html tags:**  
**Unminified:**  
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/LegoMaster3650/useful-tools.js@1.0.0/request-tools/request-tools.js"></script>
```  
**Minified:**  
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/LegoMaster3650/useful-tools.js@1.0.0/request-tools/request-tools.min.js"></script>
```  
  
**And for downloads:**  
[**Unminified - Has no compression**](https://cdn.jsdelivr.net/gh/LegoMaster3650/useful-tools.js@1.0.0/request-tools/request-tools.js)  
[**Minified - Maximum compression**](https://cdn.jsdelivr.net/gh/LegoMaster3650/useful-tools.js@1.0.0/request-tools/request-tools.min.js)  
  
Usage
=====  
----------------------------------------------  
```js
request(info, callback)
```  
Does an http request using info as a JSON in the format:  
```js
info = {
  method: 'GET|POST|PUT|DELETE|etc...',
  target: target_url,
  headers: json [optional],
  body: request_body [optional]
}
```  
`method` is the method to use for the HTTP request. | String  
`target` is the target url to aim for. | String  
`headers` is an optional json object with key-value pairs referring to each header. | JSON  
`body` is the body of the HTTP request. If you use JSON, it automatically is converted to a key-value string. | Any Supported Body Type  
  
`callback` is a required function that will execute every time the request state changes. It has a parameter `res` that will contain the status, such as the request state and response text. You should use the `if (res.readyState == 4 && res.status == 200)` method to make sure it is complete.  
  
**Returns: nothing except a chance of an error that halts the proccess**
  
----------------------------------------------  
```js
request.METHOD(target, [headers], callback, [body?])
```  
Supports `.get`, `.post`, `.put`, and `.delete` as `METHOD` with arguments:
`target` as a required target url. | String
`headers` is an optional json object with key-value pairs referring to each header. | JSON  
`callback` is a required function that will execute every time the request state changes. It has a parameter `res` that will contain the status, such as the request state and response text. You should use the `if (res.readyState == 4 && res.status == 200)` method to make sure it is complete.  
`body` is the body of the HTTP request. If you use JSON, it automatically is converted to a key-value string. | Any Supported Body Type  

**Returns: nothing**  
  
----------------------------------------------  
