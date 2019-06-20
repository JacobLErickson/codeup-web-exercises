"use strict";

function powerOn(){
    console.log("Powering on!");
}

var macBook = {
    size: 13,
    color: "silver",
    memory:{
        value: 999,
        unit: "GB"
    },
    owner: {
        first_name: "Sophie",
        last_name: "Kurihara"
    },
    arrows: ["up","down","left","right"],
    power: powerOn()
};

var iPhone = {
    "size": "13",
    "color": "gold"
};

iPhone.properties = function(){
    console.log(this.size);
};
iPhone.properties();

macBook.power();

//creating Arrays of Objects

var cups = [
    {
        type: "cup",
        color: "green",
        message: function(){
            console.log("I'm all good");
        }
    },
    {
        type: "cup",
        color: "yellow",
        message: function(){
            console.log("I'm working");
        }
    },
    {
        type: "cup",
        color: "red",
        message: function(){
            console.log("Need some help");
        }
    }
];

/*
*Hello class! Let's use what we know to make "playable" game characters!
* But first, we need to learn about Objects.
* */

function spongeBob(){
    return "I'm ready!"
}

function patrick(){
    return "No, this is Patrick";
}

function mrKrabs(){
    return "moneymoneymoneymoney";
}

function squidward(){
    return "SQUILLIAMMMMM";
}

var chooseYourFighter = [
    {
        name:{
            first: "Spongebob",
            last: "Squarepants"
        },
        weapon: "Spatula",
        greeting: spongeBob(),
        attacks: ["Bubble Buddy", "Karate", "Jellyfishing"]
    },
    {
        name:{
            first: "Patrick",
            last: "Star"
        },
        weapon: "Mayonnaise",
        greeting: patrick(),
        attacks: ["Secret Picture", "Rock", "Imagination"]
    },
    {
        name:{
            first: "Eugene",
            last: "Krabs"
        },
        weapon: "Secret Formula",
        greeting: mrKrabs(),
        attacks: ["Take Money", "Count Money", "Hide Money"]
    },
    {
        name:{
            first: "Squidward",
            last: "Tentacles"
        },
        weapon: "Clarinet",
        greeting: squidward(),
        attacks: ["Yell at Spongebob", "Off Pitch", "Interpretative Dance"]
    }
];

//iterate through chooseYourFighter array of objects
//each "fighter" is an element in the array - which is an object
chooseYourFighter.forEach(function(fighter){
    //log out each fighter's first name + message
    console.log(fighter.name.first + "'s attacks are:");
    //look at each "fighter's" attacks, it's an array so we can foreach
    // through it
    fighter.attacks.forEach(function(attack){
        //log out each attack
        console.log(attack);
    });
    //just added for separation of characters
    console.log("----------");
});