import LefitMobileCrop from './lefit-mobile-crop'

document.getElementById('testInput').onchange = function (evt) {
  let file = evt.target.files[0]
  window.crop = new LefitMobileCrop({
    file,
    onConfirm: function () {
      console.log(arguments)
    },
    onCancel: function () {
      console.log(arguments)
    }
  })
}
