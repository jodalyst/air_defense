/*
Icon made by Recep Kutuk from www.flaticon.com 
Icon made by Freepik from www.flaticon.com 

*/

CITIES = ["New York","Boston","Pittsburgh", "Kalamazoo", "Stuebenville"]

GAME_WIDTH = 600;
GAME_HEIGHT = 400;
NUMBER_OF_CITIES = 5;
CITY_WIDTH = 20;
CITY_HEIGHT = 30;
CITY_EDGE_BUFFER =10;
CITY_GAP = (GAME_WIDTH-(NUMBER_OF_CITIES*CITY_WIDTH)-2*CITY_EDGE_BUFFER)/(NUMBER_OF_CITIES-1);

console.log(CITY_GAP);

var sams = [];
var cities = [];
var icbms = [];

var game_field = d3.select("#game_field").append("svg").attr("width",GAME_WIDTH).attr("height",GAME_HEIGHT);


function setup(){
    game_field.selectAll("*").remove();
    cities = [];
    for (var i=0; i<NUMBER_OF_CITIES; i++){
        console.log("adding city");
        var city = game_field.append("svg:image").attr("xlink:href", "city.svg")
            .attr("width", CITY_WIDTH).attr("height", CITY_HEIGHT)
            .attr("x", CITY_EDGE_BUFFER+i*(CITY_WIDTH+CITY_GAP)).attr("y",GAME_HEIGHT-CITY_HEIGHT).attr("id", "city_"+CITIES[i]);
        cities.push(city);
    }
}
window.onload = function(){
    game_field.style("background-color", 'black');
    setup();
    console.log(cities);
}

function Missile(
