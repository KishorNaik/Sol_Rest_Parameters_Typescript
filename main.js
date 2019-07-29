function arrayDemo(arrayObj) {
    arrayObj.forEach(function (element) {
        console.log(element);
    });
}
var arrayObj = ["Kishor", "Amita", "Dipti", "Roshan", "Tripti", "Pooja"];
arrayDemo(arrayObj);
function arrayRestParameterDemo() {
    var arrayObj = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrayObj[_i] = arguments[_i];
    }
    arrayObj.forEach(function (element) {
        console.log(element);
    });
}
arrayRestParameterDemo("Kishor", "Amita", "Dipti", "Roshan", "Tripti", "Pooja");
