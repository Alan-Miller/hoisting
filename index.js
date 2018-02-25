require('dotenv').config();
const port = 3456;
const app = require('express')().listen(port, console.log(`Listening on ${port}.`));


function getAv() {
    console.log('I know five is', five);
    console.log('I know ten is', ten);
    const ten = 10;
    const args = [...arguments];
    return args.reduce((a, b) => a + b) / args.length;
}


const setAv = () => {
    console.log('I know five is', five);
    console.log('I know ten is', ten);
    var ten = 10;
    const args = [...arguments];
    return args.reduce((a, b) => a + b) / args.length;
}


console.log('I log five is', five, '\navg is', getAv(1, 2, 3, 4, 5));
var five = 5;
