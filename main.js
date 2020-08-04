const todayText = document.querySelector("#today");
const nextTurn = document.querySelector("#next-turn");
const car = document.querySelector("#car");

// Create Car Class
class Car {
  constructor(model, brand, lastDigit) {
    this.model = model;
    this.brand = brand;
    this.lastDigit = lastDigit;
  }
  get getLastDigit() {
    return this.lastDigit;
  }
}

// Change the day
function changeDay() {
  // get Day
  let day = new Date(),
    month = day.toLocaleString("default", { month: "long" }).toUpperCase(),
    hour = day.getHours(),
    today = day.getDate();

  todayText.innerHTML = `${month} ${today}`;

  setTimeout(changeDay, 1000);
}

function gasDay() {
  let day = new Date(),
    today = day.getDate();
  let gasday = new Date(2020, 7, 5),
    dayOnly = gasday.getDate();
  if (dayOnly - today > 0) {
    nextTurn.innerHTML = `Siguiente turno: ${dayOnly - today} día(s).`;
  } else if (dayOnly - today <= 0) {
    nextTurn.textContent = "¡Hoy te toca!";
    dayOnly += 6;
  }
  console.log(dayOnly);
  setTimeout(gasDay, 60000);
}

changeDay();
gasDay();
