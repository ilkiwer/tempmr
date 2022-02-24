console.log("smems");
//Date format: YYYY-MM-DD

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

function writeNames() {
  for (let index = 0; index < list.length; index++) {
    const num = list[index];
    list[index] = names[num - 1];
  }
}

function getNumWorkDays(startDate, endDate) {
  var numWorkDays = 0;
  var currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    // Skips Sunday and Saturday
    if (currentDate.getDay() !== 0) {
      numWorkDays++;
    }
    currentDate = currentDate.addDays(1);
  }
  if (numWorkDays > 0) {
    return numWorkDays;
  } else {
    return 0;
  }
}

let students = 26;
let list = [10,17,11,3,4,22,8,14,23,15,13,21,20,6,26,12,1,19,25,5,7,9,2,18,16, 24];

let names = [
  "Accordini",
  "Badalini",
  "Bajardo",
  "Bonura",
  "Corso",
  "Faccincani",
  "Faedo",
  "Fossati",
  "Francavilla",
  "Gaburo",
  "Gatti",
  "ManzaTi",
  "Perantoni",
  "Perotti",
  "Pozzerle",
  "Rettore",
  "Righetti",
  "Rigo",
  "Romano",
  "Somma",
  "Todorovic",
  "Giovanni",
  "Teresa",
  "Troccoli",

  "Zancarli",
  "Zanotti",
];

changeDate = new Date("2022-02-23");

let sinceChange = getNumWorkDays(
  changeDate,
  new Date(new Date().toDateString())
);

document.getElementById("elapsedDays").innerHTML =
  "L'ultimo cambio è stato il " +
  changeDate +
  ", ovvero " +
  sinceChange +
  " giorni fa.";

function arrayRotate(arr) {
  arr.unshift(arr.pop());
  return arr;
}

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

document.getElementById("toDate").innerHTML = "Oggi è " + new Date() + ".";

for (var i = 0; i < sinceChange; i++) list = arrayRotate(list);

writeNames();
document.getElementById("Angelo").innerHTML = "In memoriam Angeli";
document.getElementById("posto2").innerHTML = list[0];
document.getElementById("posto3").innerHTML = list[1];
document.getElementById("posto4").innerHTML = list[2];
document.getElementById("posto5").innerHTML = list[3];
document.getElementById("posto6").innerHTML = list[4];
document.getElementById("posto7").innerHTML = list[5];
document.getElementById("posto8").innerHTML = list[6];
document.getElementById("posto9").innerHTML = list[7];
document.getElementById("posto10").innerHTML = list[8];
document.getElementById("posto11").innerHTML = list[9];

document.getElementById("posto12").innerHTML = list[10];
document.getElementById("posto13").innerHTML = list[11];
document.getElementById("posto14").innerHTML = list[12];
document.getElementById("posto15").innerHTML = list[13];
document.getElementById("posto16").innerHTML = list[14];
document.getElementById("posto17").innerHTML = list[15];
document.getElementById("posto18").innerHTML = list[16];
document.getElementById("posto19").innerHTML = list[17];
document.getElementById("posto20").innerHTML = list[18];
document.getElementById("posto21").innerHTML = list[19];

document.getElementById("posto22").innerHTML = list[20];
document.getElementById("posto23").innerHTML = list[21];
document.getElementById("posto24").innerHTML = list[22];
document.getElementById("posto25").innerHTML = list[23];
document.getElementById("posto26").innerHTML = list[24];
document.getElementById("posto27").innerHTML = list[25];
