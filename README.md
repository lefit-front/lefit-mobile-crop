# lefit-mobile-crop

> 移动端裁剪方案

使用方法:
```
  var crop = new LefitMobileCrop({
    file: file, // 从input拿到的file文件
    imageRatio: '1:1', // width:height，图片裁剪比例，宽度始终为屏幕宽度
    onConfirm: function () { }, // 裁剪成功后的回调
    onCancel: function () { }, // 取消裁剪的回调
    confirmText: '确定', // 确认按钮文字
    cancelText: '取消', // 取消按钮文字
    rotateText: '旋转'// 选择按钮文字
  })
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8024
npm run dev

# build for production with minification
npm run build
```
