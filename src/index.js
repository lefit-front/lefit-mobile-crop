// import LefitMobileCrop from '../dist/lefit-mobile-crop.min.js'
import LefitMobileCrop from './lefit-mobile-crop'

document.getElementById('testInput').onchange = function (evt) {
  let file = evt.target.files[0]
  window.crop = new LefitMobileCrop({
    file,
    // src: 'https://cdn.leoao.com/act-head-img-528-2018-0a13wcg7zepe',
    imageRatio: '750:1334', //
    widthRatio: '4:5',
    limitWidth: 900 // 限制输出的图片宽度  没有高度 不要问我为什么
  })
  window.crop.render().then(res => {
    console.log(res)
    document.getElementById('img').setAttribute('src', res.base64)
  }).catch(err => {
    console.log(err)
  })
  console.log(window.crop)
}
