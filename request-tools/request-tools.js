function request(data, cb) {
  var method = data.method
  if (!method) return console.error('No method defined')
  var target = data.target
  if (!target) return console.error('No target defined')
  var headers = data.headers
  var reqobj = new XMLHttpRequest()
  if (cb) {
    reqobj.onreadystatechange = function() {
      cb(this)
    }
    reqobj.open(method, target, true)
    if (headers) if (headers.constructor == Object) {
      var datahkeys = Object.keys(headers)
      for (var i in datahkeys) {
        reqobj.setRequestHeader(datahkeys[i], headers[datahkeys[i]].toString())
      }
    }
    if (data.body) {
      if (data.body.constructor == Object) {
        var reqbody = ''
        var databkeys = Object.keys(data.body)
        for (var i in databkeys) {
          reqbody = reqbody + (i != 0 ? '&' : '') + encodeURIComponent(databkeys[i].toString()) + '=' + encodeURIComponent(data.body[databkeys[i]].toString())
        }
        reqobj.send(reqbody)
      } else {
        reqobj.send(data.body)
      }
    } else {
      reqobj.send()
    }
  } else {
    console.error('No callback defined')
  }
}
request.get = function(target, headers, cb) {
  if (!target) console.error('No target specified')
  if (headers.constructor == Function) {
    cb = headers
    headers = undefined
  }
  if (!cb) console.error('No callback defined')
  var reqdat = {method: 'GET', target: target}
  if (headers) reqdat.headers = headers
  request(reqdat, cb)
}
request.post = function(target, headers, cb, body) {
  if (!target) return console.error('No target specified')
  if (headers.constructor == Function) {
    if (cb) var body = cb
    cb = headers
    headers = undefined
  }
  if (!cb) return console.error('No callback defined')
  var reqdat = {method: 'POST', target: target}
  if (headers) reqdat.headers = headers
  if (body) reqdat.body = body
  request(reqdat, cb)
}
request.put = function(target, headers, cb, body) {
  if (!target) return console.error('No target specified')
  if (headers.constructor == Function) {
    if (cb) var body = cb
    cb = headers
    headers = undefined
  }
  if (!cb) return console.error('No callback defined')
  var reqdat = {method: 'PUT', target: target}
  if (headers) reqdat.headers = headers
  if (body) reqdat.body = body
  request(reqdat, cb)
}
request.delete = function(target, headers, cb, body) {
  if (!target) return console.error('No target specified')
  if (headers.constructor == Function) {
    if (cb) var body = cb
    cb = headers
    headers = undefined
  }
  if (!cb) return console.error('No callback defined')
  var reqdat = {method: 'DELETE', target: target}
  if (headers) reqdat.headers = headers
  if (body) reqdat.body = body
  request(reqdat, cb)
}
