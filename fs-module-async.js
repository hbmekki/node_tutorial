const {
    readFile,
    writeFile
} = require("fs");

console.log("start");
readFile("./content/text.txt", "utf8", (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = res;
    console.log(res);
    console.log('read the file');
    writeFile("./content/new-async.txt", first, {
        flag: "a"
    }, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(res);
        console.log('finish writing the file!')
    });
    console.log('exiting readFile');
});
console.log('exit script!');