function arrayDemo(arrayObj: string[]): void {
  arrayObj.forEach(element => {
    console.log(element);
  });
}

let arrayObj = ["Kishor", "Amita", "Dipti", "Roshan", "Tripti", "Pooja"];
arrayDemo(arrayObj);

function arrayRestParameterDemo(...arrayObj: string[]): void {
  arrayObj.forEach(element => {
    console.log(element);
  });
}

arrayRestParameterDemo("Kishor", "Amita", "Dipti", "Roshan", "Tripti", "Pooja");
