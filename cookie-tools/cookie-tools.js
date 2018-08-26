var cookies = {
  set: function (key, value, extras) {
    if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) return false
    document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value) + (extras ? (extras.path ? '; path=' + extras.path : '') + (extras.domain ? '; path=' + extras.domain : '') + (extras.expires ? (extras.expires.constructor == Number ? '; max-age=' + extras.expires + '; expires=' + new Date(Date.now() + extras.expires).toUTCString() : extras.expires.constructor == String ? '; max-age=' + new Date(extras.expires).getTime() + '; expires=' + extras.expires : extras.expires.constructor == Date ? '; max-age=' + ((extras.expires.getTime() - Date.now()) / 1000).toString() + '; expires=' + extras.expires.toUTCString() : '') : '') + (extras.secure ? '; secure' : '') : '')
    return true
  },
  get: function (key) {
    if (!key) return null
    return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\s*' + encodeURIComponent(key).replace(/\+\*\.\-/g, '\\$&') + '\s*\=\s*([^;]*).*$)|^.*$'), '$1')) || null
  },
  has: function (key) {
    if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) return false
    return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(key).replace(/\+\*\.\-/g, '\\$&') + '\\s*\\=')).test(document.cookie)
  },
  delete: function (key, path, domain) {
    if (!this.has(key)) return false
    document.cookie = encodeURIComponent(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (path ? '; path=' + path : '') + (domain ? '; domain=' + domain : '')
    return true
  },
  list: function (count) {
    if (!count) {
      var them = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/)
      var thems = them.map(function(value, index, array) { array[index] = decodeURIComponent(value); })
      return them
    } else {
      var them = document.cookie.split(/\s*[;=]\s*/g)
      var thems = {}
      for (var i in them) {
        if (!(Math.abs(i % 2) == 1)) {
          var key = decodeURIComponent(them[i].toString())
        } else {
          thems[key] = decodeURIComponent(them[i])
        }
        if (i / 2 >= count && typeof count == 'number') return thems
      }
      return thems
    }
  }
}
