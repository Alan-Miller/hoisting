require('dotenv').config();
const { port } = process.env;
const app = require('express')().listen(port, console.log(`Listening on ${port}.`));

function hoist() {

    let test = 5;
    const getAv = () => {
        
    }
    return test;
}



console.log(hoist());