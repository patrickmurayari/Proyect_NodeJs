const path = require('node:path')

//barra separadora de carpetas segun SO
console.log(path.sep); 

//unir rutas con path.join
const filePath = path.join('content' , 'subfolder' , 'test.txt')
console.log(filePath);

const extension = path.extname('my.super.image.jpg')
console.log(extension);