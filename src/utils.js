export default {
  setCss(dom, ...props) {
    for (let i = props.length; i--;) {
      for (let key in props[i]) {
        dom.style[key] = props[i][key]
      }
    }
  },
  convertBase64UrlToBlob (urlData) { // base64blob文件
    let bytes = window.atob(urlData.split(',')[1]) // 去掉url的头，并转换为byte
    // 处理异常,将ascii码小于0的转换为大于0
    let ab = new ArrayBuffer(bytes.length)
    let ia = new Uint8Array(ab)
    for (let i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i)
    }
    return new Blob([ab], {type: 'image/png'})
  }
}