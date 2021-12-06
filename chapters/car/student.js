// Schrijf hier je code
function myFirstFunction(bike) {forward(bike);}
function twiceForward(bike){forward(bike);forward(bike);}
function thriceForward(bike){forward(bike);forward(bike); forward(bike);}
function forward4(bike){forward(bike);forward(bike);forward(bike);forward(bike);}
function forward5(bike){
    var i =5; 
    while (i>0){forward(bike); i = i-1;}
}
function forward10(bike){
    var i =10; 
    while (i>0){forward(bike); i = i-1;};
}
function right(bike){turnRight(bike);forward(bike);}
function ellShape(bike){
    var i=5; 
    while (i>0){forward(bike); i = i-1;};
    turnRight(bike);
    var l=4;
    while (l>0){forward(bike); l = l-1;};
}
function uTurn(bike){
    thriceForward(bike);
    turnRight(bike);
    forward10(bike);
    turnRight(bike);
    twiceForward(bike);
}
function forwardN(bike, steps) {
    let i = steps;

    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}
function crookedUTurn(bike){
    forwardN(bike,7);
    turnRight(bike);
    forwardN(bike,9);
    turnRight(bike);
    forwardN(bike,3)
}
function forwardUntilWall(bike){
    while (!sensor(bike)) {
        forward(bike);
    }
}
function smartEllShape(bike){
    while (!sensor(bike)) {
        forward(bike);
    }
    turnRight(bike); 
    while (!sensor(bike)) {
        forward(bike);
    }
}
function spiral(car) {
    while (!sensor(car)) {
        forwardUntilWall(car);
        turnRight(car);
    }
//  function turnLeft(car){
//     turnRight(car);
//     turnRight(car);
//     turnRight(car);
//  }   
// }function left(car){
//     turnLeft(car);
//     forwardN(car,1)
// }