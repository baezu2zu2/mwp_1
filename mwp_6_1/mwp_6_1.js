const c = require("ansi-colors")

function helloWithColor(name, color=c.red){
    console.log(color(name)+"님 안녕하세요!")
}

function hello(name){
    console.log(name+"님 안녕하세요!")
}