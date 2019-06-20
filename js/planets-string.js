(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var brplanets = planetsArray.join("<br>");
    console.log(brplanets);

    //This could be useful in HTML to create an unordered list.

    var liplanets = planetsArray.join("</li>,<br><li>");

    console.log(liplanets);

    var splitplanets = liplanets.split(",");
    splitplanets.unshift("<ul><br><li>");
    splitplanets.push("<br></ul>");

    var ulplanets = splitplanets.join(",");
    console.log(ulplanets);

//Instructor Example:

    var planetsUl = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
    console.log(planetsUl);

})();