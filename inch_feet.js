function convertFeet(inch){
    var feet = inch / 12;
    var Inch = inch % 12;
    console.log("Feet ",Math.floor(feet));
    console.log("Inch ", Inch);
}
var inch = 75;
var Feet = convertFeet(inch);

