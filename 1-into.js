const amount= 9;
if ( amount < 10){
    console.log('small number');
} else {
    console.log('large number');
}
console.log(`filename is ${__filename} residing in ${__dirname}`);
// console.log(process.env);
//console.log(require);
console.log(module);
setInterval(() => {
    console.log('hello world!')
}, 2000);