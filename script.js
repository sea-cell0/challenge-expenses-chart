async function loadTopBarsAmount() {
  const response = await fetch("/data.json");
  const amounts = await response.json();

  for (let i = 0; i < 7; i++) {
    document.querySelectorAll("h4")[i].innerText = amounts[i].amount;
  }
}

async function setLowerBarHeight() {
  const response = await fetch("/data.json");
  const amounts = await response.json();
  let biggestNumber = null;
  let height;

  for (let i = 0; i < amounts.length; i++) {
    if (biggestNumber < amounts[i].amount) {
      biggestNumber = amounts[i].amount;
    }
  }

  for (let i = 0; i < amounts.length; i++) {
    height = (amounts[i].amount * 10) / biggestNumber;
    document.querySelectorAll(".bar")[i].style.height = `${height}rem`;
  }
}

function showTopBar() {
  for (let i = 0; i < 7; i++) {
    document
      .querySelectorAll(".bar")
      [i].addEventListener("mousedown", function () {
        document.querySelectorAll(".top-bar")[i].classList.remove("invisible");
      });
  }

  for (let i = 0; i < 7; i++) {
    document
      .querySelectorAll(".bar")
      [i].addEventListener("mouseup", function () {
        document.querySelectorAll(".top-bar")[i].classList.add("invisible");
      });
  }
}

function changeBarColorbyCurrentDay() {
  let dayOfTheWeek = new Date().getDay();
  for (let i = 0; i < document.querySelectorAll(".bar").length; i++) {
    if (+document.querySelectorAll(".bar")[i].id == dayOfTheWeek ) {
      document.querySelectorAll(".bar")[i].style.backgroundColor = "hsl(186, 34%, 60%)";
    }
  }
}

loadTopBarsAmount();
setLowerBarHeight();
showTopBar();
changeBarColorbyCurrentDay();
