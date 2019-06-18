"use strict";

//Loops Exercise

// 1.2

// var num = 1;
//
// while (num < 65536){
//     num = num * 2;
//     console.log(num);
// }

// 1.3

var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones);


do {
    var custCones = Math.floor(Math.random() * 5) + 1;
    if (custCones < remainCones) {

        console.log(custCones + "cones sold today");
    }
    if (remainCones < custCones) {
        console.log("I cannot sell you " + custCones + " cones, I only have " + remainCones);
    }
    if (remainCones == 0) {
        console.log("Yay! I sold them all!");
    }

} while (remainCones > 0);