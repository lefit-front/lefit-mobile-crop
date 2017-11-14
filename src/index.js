import ImbCrop from './ImbCrop'

document.getElementById('testInput').onchange = function (evt) {
  let file = evt.target.files[0]
  window.crop = new ImbCrop({
    file,
    onConfirm: function () {
      console.log(arguments)
    },
    onCancel: function () {
      console.log(arguments)
    }
  })
}
