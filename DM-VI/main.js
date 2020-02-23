let mainCanvas = document.getElementById("mainCanvas");
mainCanvas.width  = window.innerWidth;
mainCanvas.height = window.innerHeight;


let ctx = mainCanvas.getContext("2d");
let ch = mainCanvas.height;
let cw = mainCanvas.width;


const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let NumDaysToPlaceRandomly = 25;
let NumDaysShouldBeInOneMonth = 3;
let NumDaysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let NumDaysOfTheYear = NumDaysPerMonth.reduce((a, b) => a + b, 0)

let RandDays = [];
let RandDaysToMonths = [];
for(i = 0; i < NumDaysToPlaceRandomly; i++){
    RandDays.push(
        Math.floor(
            Math.random() * NumDaysOfTheYear
        ) + 1
    );
}

RandDays.forEach(element => {
    let cMonth = 0;
    while(element > 0){
        element -= NumDaysPerMonth[cMonth];
        cMonth++;
    }
    console.log(monthNames[cMonth -1]);
});


let MonthPixelMargin = 0.25;
let MonthPixelSize = (cw - (30 * MonthPixelMargin))/31;
let MonthPixelHeight = (ch - (11 * MonthPixelMargin))/12;
let MonthPixelUnit = MonthPixelSize + MonthPixelMargin;

let TotalCount = 0;
for (let i = 0; i < NumDaysPerMonth.length; i++) {
    for (let j = 0; j < NumDaysPerMonth[i]; j++) {
        if(RandDays.includes(TotalCount)){
            ctx.fillStyle = "green";
        }
        else{
            ctx.fillStyle = "black";
        }
        ctx.fillRect(j * MonthPixelUnit, i * (MonthPixelHeight + MonthPixelMargin), MonthPixelSize, MonthPixelHeight);
        TotalCount++;
    }
}