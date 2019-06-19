"use scrict";

(function () {

//Loops Exercise

// 2.2


    // function showMultiplicationTable(a){
    //     console.log(a + " x 1 = " + (a * 1));
    //     console.log(a + " x 2 = " + (a * 2));
    //     console.log(a + " x 3 = " + (a * 3));
    //     console.log(a + " x 4 = " + (a * 4));
    //     console.log(a + " x 5 = " + (a * 5));
    //     console.log(a + " x 6 = " + (a * 6));
    //     console.log(a + " x 7 = " + (a * 7));
    //     console.log(a + " x 8 = " + (a * 8));
    //     console.log(a + " x 9 = " + (a * 9));
    //     console.log(a + " x 10 = " + (a * 10));
    // };

    //Instructor Example

    // var showMultiplicationTable = function(a){
    //     for (var i = 1; i <= 10; i++) {
    //         console.log(i + " x " + i + " = " + (i * parseInt(a)));
    //     }
    // }
    //
    // showMultiplicationTable(9)



// 2.3



//     function isOdd(numberToTest) {
//         (numberToTest % 2 === 1) ? console.log(numberToTest + " is odd.") : console.log(numberToTest + " is even.");
//     };
//
//     for (var i = 0, i < 10; i++) {
//         var random = Math.floor((Math.random()*200)+20);
//         isOdd(random);
// }

    //Instructor Example

    // var randomEvenOdds = function() {
    //
    //     for (var j = 1; j < 11; j++) {
    //         var randomNum = Math.floor((Math.random() * 180) + 20);
    //         var remainderNum = randomNum % 2
    //         if (remainderNum === 0) {
    //             console.log(randomNum + " is even.");
    //         } else {
    //             console.log(randomNum + "is odd");
    //         }
    //     }
    // }
    //
    // randomEvenOdds();

// 2.4




    //Instructor Example

    var numTree = function () {
        for (var outer = 1; outer <= 9; outer++) {
            var output = '';
            for (var inner = 1; inner <= outer; inner++) {
                output += output;
            }
            console.log(output);
        }
    }

    numTree();


// 2.5

// for (var i = 100; i >= 5; i = i - 5) {
//     console.log(i);
// }

})();