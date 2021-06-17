const acceptBtn = document.querySelector(".accept-btn");
const randomBtn = document.querySelector(".random-btn");
const resetBtn = document.querySelector(".reset-btn");
let passInfo = document.querySelector(".passinfo").value;

let x;
const letters = /[A-Z]/i;
const numbers = /[0-9]/;
const numsLetters = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
];

function randomLettersNumbers() {
  return numsLetters[Math.trunc(Math.random(x) * numsLetters.length)];
}

drawNumsLetters = () => {
  const arr = Array.from({ length: 4 }, (x) => (x = randomLettersNumbers()));
  const arr2 = Array.from({ length: 4 }, (x) => (x = randomLettersNumbers()));
  const arr3 = Array.from({ length: 4 }, (x) => (x = randomLettersNumbers()));
  const arr4 = Array.from({ length: 4 }, (x) => (x = randomLettersNumbers()));
  document.getElementById("AX").value = arr.join("");
  document.getElementById("BX").value = arr2.join("");
  document.getElementById("CX").value = arr3.join("");
  document.getElementById("DX").value = arr4.join("");
};

clearInputs = () => {
  document.getElementById("AX").value = "";
  document.getElementById("BX").value = "";
  document.getElementById("CX").value = "";
  document.getElementById("DX").value = "";
};

checkInputs = () => {
  if (
    document.getElementById("AX").value.length === 4 &&
    document.getElementById("AX").value.match(letters) &&
    document.getElementById("AX").value.match(numbers) &&
    document.getElementById("BX").value.length === 4 &&
    document.getElementById("BX").value.match(letters) &&
    document.getElementById("BX").value.match(numbers) &&
    document.getElementById("CX").value.length === 4 &&
    document.getElementById("CX").value.match(letters) &&
    document.getElementById("CX").value.match(numbers) &&
    document.getElementById("DX").value.length === 4 &&
    document.getElementById("DX").value.match(letters) &&
    document.getElementById("DX").value.match(numbers)
  ) {
    document.querySelector(".passinfo").innerHTML = "Correct";
  } else {
    document.querySelector(".passinfo").innerHTML = "Wrong";
  }
};

/* EVENTS */
acceptBtn.addEventListener("click", checkInputs);
randomBtn.addEventListener("click", drawNumsLetters);
resetBtn.addEventListener("click", clearInputs);

/* BTNS */

const movAxBx = document.querySelector(".mov1");
const movAxCx = document.querySelector(".mov2");
const movAxDx = document.querySelector(".mov3");

const movBxAx = document.querySelector(".mov4");
const movBxCx = document.querySelector(".mov5");
const movBxDx = document.querySelector(".mov6");

const movCxAx = document.querySelector(".mov7");
const movCxBx = document.querySelector(".mov8");
const movCxDx = document.querySelector(".mov9");

const movDxAx = document.querySelector(".mov10");
const movDxBx = document.querySelector(".mov11");
const movDxCx = document.querySelector(".mov12");

movAxBxFnc = () => {
  document.getElementById("BX").value = document.getElementById("AX").value;
};
movAxCxFnc = () => {
  document.getElementById("CX").value = document.getElementById("AX").value;
};
movAxDxFnc = () => {
  document.getElementById("DX").value = document.getElementById("AX").value;
};

movBxAxFnc = () => {
  document.getElementById("AX").value = document.getElementById("BX").value;
};
movBxCxFnc = () => {
  document.getElementById("CX").value = document.getElementById("BX").value;
};
movBxDxFnc = () => {
  document.getElementById("DX").value = document.getElementById("BX").value;
};

movCxAxFnc = () => {
  document.getElementById("AX").value = document.getElementById("CX").value;
};
movCxBxFnc = () => {
  document.getElementById("BX").value = document.getElementById("CX").value;
};
movCxDxFnc = () => {
  document.getElementById("DX").value = document.getElementById("CX").value;
};

movDxAxFnc = () => {
  document.getElementById("AX").value = document.getElementById("DX").value;
};
movDxBxFnc = () => {
  document.getElementById("BX").value = document.getElementById("DX").value;
};
movDxCxFnc = () => {
  document.getElementById("CX").value = document.getElementById("DX").value;
};

movAxBx.addEventListener("click", movAxBxFnc);
movAxCx.addEventListener("click", movAxCxFnc);
movAxDx.addEventListener("click", movAxDxFnc);

movBxAx.addEventListener("click", movBxAxFnc);
movBxCx.addEventListener("click", movBxCxFnc);
movBxDx.addEventListener("click", movBxDxFnc);

movCxAx.addEventListener("click", movCxAxFnc);
movCxBx.addEventListener("click", movCxBxFnc);
movCxDx.addEventListener("click", movCxDxFnc);

movDxAx.addEventListener("click", movDxAxFnc);
movDxBx.addEventListener("click", movDxBxFnc);
movDxCx.addEventListener("click", movDxCxFnc);

/* CHANGE BUTTONS */
const xchgAxBx = document.querySelector(".chg1");
const xchgAxCx = document.querySelector(".chg2");
const xchgAxDx = document.querySelector(".chg3");

const xchgBxAx = document.querySelector(".chg4");
const xchgBxCx = document.querySelector(".chg5");
const xchgBxDx = document.querySelector(".chg6");

const xchgCxAx = document.querySelector(".chg7");
const xchgCxBx = document.querySelector(".chg8");
const xchgCxDx = document.querySelector(".chg9");

const xchgDxAx = document.querySelector(".chg10");
const xchgDxBx = document.querySelector(".chg11");
const xchgDxCx = document.querySelector(".chg12");

xchgAxBxFnc = () => {
  const tmp = document.getElementById("AX").value;
  document.getElementById("AX").value = document.getElementById("BX").value;
  document.getElementById("BX").value = tmp;
};

xchgAxCxFnc = () => {
  const tmp = document.getElementById("AX").value;
  document.getElementById("AX").value = document.getElementById("CX").value;
  document.getElementById("CX").value = tmp;
};

xchgAxDxFnc = () => {
  const tmp = document.getElementById("AX").value;
  document.getElementById("AX").value = document.getElementById("DX").value;
  document.getElementById("DX").value = tmp;
};

xchgBxAxFnc = () => {
  const tmp = document.getElementById("BX").value;
  document.getElementById("BX").value = document.getElementById("AX").value;
  document.getElementById("AX").value = tmp;
};

xchgBxCxFnc = () => {
  const tmp = document.getElementById("BX").value;
  document.getElementById("BX").value = document.getElementById("CX").value;
  document.getElementById("CX").value = tmp;
};

xchgBxDxFnc = () => {
  const tmp = document.getElementById("BX").value;
  document.getElementById("BX").value = document.getElementById("DX").value;
  document.getElementById("DX").value = tmp;
};

xchgCxAxFnc = () => {
  const tmp = document.getElementById("CX").value;
  document.getElementById("CX").value = document.getElementById("AX").value;
  document.getElementById("AX").value = tmp;
};

xchgCxBxFnc = () => {
  const tmp = document.getElementById("CX").value;
  document.getElementById("CX").value = document.getElementById("BX").value;
  document.getElementById("BX").value = tmp;
};

xchgCxDxFnc = () => {
  const tmp = document.getElementById("CX").value;
  document.getElementById("CX").value = document.getElementById("DX").value;
  document.getElementById("DX").value = tmp;
};

xchgDxAxFnc = () => {
  const tmp = document.getElementById("DX").value;
  document.getElementById("DX").value = document.getElementById("AX").value;
  document.getElementById("AX").value = tmp;
};

xchgDxBxFnc = () => {
  const tmp = document.getElementById("DX").value;
  document.getElementById("DX").value = document.getElementById("BX").value;
  document.getElementById("BX").value = tmp;
};

xchgDxCxFnc = () => {
  const tmp = document.getElementById("DX").value;
  document.getElementById("DX").value = document.getElementById("CX").value;
  document.getElementById("CX").value = tmp;
};

xchgAxBx.addEventListener("click", xchgAxBxFnc);
xchgAxCx.addEventListener("click", xchgAxCxFnc);
xchgAxDx.addEventListener("click", xchgAxDxFnc);

xchgBxAx.addEventListener("click", xchgBxAxFnc);
xchgBxCx.addEventListener("click", xchgBxCxFnc);
xchgBxDx.addEventListener("click", xchgBxDxFnc);

xchgCxAx.addEventListener("click", xchgCxAxFnc);
xchgCxBx.addEventListener("click", xchgCxBxFnc);
xchgCxDx.addEventListener("click", xchgCxDxFnc);

xchgDxAx.addEventListener("click", xchgDxAxFnc);
xchgDxBx.addEventListener("click", xchgDxBxFnc);
xchgDxCx.addEventListener("click", xchgDxCxFnc);

const movAhAx = document.querySelector(".AH1");
const movAlAx = document.querySelector(".AL1");
const movAhBx = document.querySelector(".AH2");
const movAlBx = document.querySelector(".AL2");
const movAhCx = document.querySelector(".AH3");
const movAlCx = document.querySelector(".AL3");
const movAhDx = document.querySelector(".AH4");
const movAlDx = document.querySelector(".AL4");
const movBhAx = document.querySelector(".BH1");
const movBlAx = document.querySelector(".BL1");
const movBhBx = document.querySelector(".BH2");
const movBlBx = document.querySelector(".BL2");
const movBhCx = document.querySelector(".BH3");
const movBlCx = document.querySelector(".BL3");
const movBhDx = document.querySelector(".BH4");
const movBlDx = document.querySelector(".BL4");
const movChAx = document.querySelector(".CH1");
const movClAx = document.querySelector(".CL1");
const movChBx = document.querySelector(".CH2");
const movClBx = document.querySelector(".CL2");
const movChCx = document.querySelector(".CH3");
const movClCx = document.querySelector(".CL3");
const movChDx = document.querySelector(".CH4");
const movClDx = document.querySelector(".CL4");
const movDhAx = document.querySelector(".DH1");
const movDlAx = document.querySelector(".DL1");
const movDhBx = document.querySelector(".DH2");
const movDlBx = document.querySelector(".DL2");
const movDhCx = document.querySelector(".DH3");
const movDlCx = document.querySelector(".DL3");
const movDhDx = document.querySelector(".DH4");
const movDlDx = document.querySelector(".DL4");

movAhAxfnc = () => {
  console.log(`object`);
  if (document.getElementById("AX").value === "") {
    document.getElementById("AX").value = document.getElementById("AH").value;
  } else if (
    (document.getElementById("AX").value = document.getElementById("AH").value)
  ) {
    document.getElementById("AX").value =
      document.getElementById("AH").value + document.getElementById("AL").value;
  } else {
    document.getElementById("AX").value = document.getElementById("AL").value;
  }
};

movAlAxfnc = () => {
  if (document.getElementById("AX").value === "") {
    document.getElementById("AX").value = document.getElementById("AL").value;
  } else if (
    (document.getElementById("AX").value = document.getElementById("AH").value)
  ) {
    document.getElementById("AX").value =
      document.getElementById("AH").value + document.getElementById("AL").value;
  } else {
    document.getElementById("AX").value = document.getElementById("AL").value;
  }
};

movAhBxfnc = () => {
  if (document.getElementById("BX").value === "") {
    document.getElementById("BX").value = document.getElementById("AH").value;
  } else if (
    (document.getElementById("BX").value = document.getElementById("AL").value)
  ) {
    document.getElementById("BX").value =
      document.getElementById("AH").value + document.getElementById("AL").value;
  } else {
    document.getElementById("BX").value = document.getElementById("AH").value;
  }
};

movAlBxfnc = () => {
  if (document.getElementById("BX").value === "") {
    document.getElementById("BX").value = document.getElementById("AL").value;
  } else if (
    (document.getElementById("BX").value = document.getElementById("AL").value)
  ) {
    document.getElementById("BX").value =
      document.getElementById("AL").value + document.getElementById("AH").value;
  } else {
    document.getElementById("BX").value = document.getElementById("AH").value;
  }
};

movAhCxfnc = () => {
  if (document.getElementById("CX").value === "") {
    document.getElementById("CX").value = document.getElementById("AH").value;
  } else if (
    (document.getElementById("CX").value = document.getElementById("AL").value)
  ) {
    document.getElementById("CX").value =
      document.getElementById("AH").value + document.getElementById("AL").value;
  } else {
    document.getElementById("CX").value = document.getElementById("AH").value;
  }
};

movAlCxfnc = () => {
  if (document.getElementById("CX").value === "") {
    document.getElementById("CX").value = document.getElementById("AL").value;
  } else if (
    (document.getElementById("CX").value = document.getElementById("AH").value)
  ) {
    document.getElementById("CX").value =
      document.getElementById("AH").value + document.getElementById("AL").value;
  } else {
    document.getElementById("CX").value = document.getElementById("AL").value;
  }
};
movAhDxfnc = () => {
  if (document.getElementById("DX").value === "") {
    document.getElementById("DX").value = document.getElementById("AH").value;
  } else if (
    (document.getElementById("DX").value = document.getElementById("AL").value)
  ) {
    document.getElementById("DX").value =
      document.getElementById("AH").value + document.getElementById("AL").value;
  } else {
    document.getElementById("DX").value = document.getElementById("AH").value;
  }
};
movAlDxfnc = () => {
  if (document.getElementById("DX").value === "") {
    document.getElementById("DX").value = document.getElementById("AL").value;
  } else if (
    (document.getElementById("DX").value = document.getElementById("AL").value)
  ) {
    document.getElementById("DX").value =
      document.getElementById("AL").value + document.getElementById("AH").value;
  } else {
    document.getElementById("DX").value = document.getElementById("AH").value;
  }
};

movBhAxfnc = () => {
  if (document.getElementById("AX").value === "") {
    document.getElementById("AX").value = document.getElementById("BH").value;
  } else if (
    (document.getElementById("AX").value = document.getElementById("BL").value)
  ) {
    document.getElementById("AX").value =
      document.getElementById("BH").value + document.getElementById("BL").value;
  } else {
    document.getElementById("AX").value = document.getElementById("BH").value;
  }
};
movBlAxfnc = () => {
  if (document.getElementById("AX").value === "") {
    document.getElementById("AX").value = document.getElementById("BL").value;
  } else if (
    (document.getElementById("AX").value = document.getElementById("BH").value)
  ) {
    document.getElementById("AX").value =
      document.getElementById("BH").value + document.getElementById("BL").value;
  } else {
    document.getElementById("AX").value = document.getElementById("BL").value;
  }
};
movBhBxfnc = () => {
  if (document.getElementById("BX").value === "") {
    document.getElementById("BX").value = document.getElementById("BH").value;
  } else if (
    (document.getElementById("BX").value = document.getElementById("BL").value)
  ) {
    document.getElementById("BX").value =
      document.getElementById("BH").value + document.getElementById("BL").value;
  } else {
    document.getElementById("BX").value = document.getElementById("BH").value;
  }
};
movBlBxfnc = () => {
  if (document.getElementById("BX").value === "") {
    document.getElementById("BX").value = document.getElementById("BL").value;
  } else if (
    (document.getElementById("BX").value = document.getElementById("BH").value)
  ) {
    document.getElementById("BX").value =
      document.getElementById("BH").value + document.getElementById("BL").value;
  } else {
    document.getElementById("BX").value = document.getElementById("BL").value;
  }
};
movBhCxfnc = () => {
  if (document.getElementById("CX").value === "") {
    document.getElementById("CX").value = document.getElementById("BH").value;
  } else if (
    (document.getElementById("CX").value = document.getElementById("BL").value)
  ) {
    document.getElementById("CX").value =
      document.getElementById("BH").value + document.getElementById("BL").value;
  } else {
    document.getElementById("CX").value = document.getElementById("BH").value;
  }
};
movBlCxfnc = () => {
  if (document.getElementById("CX").value === "") {
    document.getElementById("CX").value = document.getElementById("BL").value;
  } else if (
    (document.getElementById("CX").value = document.getElementById("BH").value)
  ) {
    document.getElementById("CX").value =
      document.getElementById("BH").value + document.getElementById("BL").value;
  } else {
    document.getElementById("CX").value = document.getElementById("BL").value;
  }
};

movBhDxfnc = () => {
  if (document.getElementById("DX").value === "") {
    document.getElementById("DX").value = document.getElementById("BH").value;
  } else if (
    (document.getElementById("DX").value = document.getElementById("BL").value)
  ) {
    document.getElementById("DX").value =
      document.getElementById("BH").value + document.getElementById("BL").value;
  } else {
    document.getElementById("DX").value = document.getElementById("BH").value;
  }
};
movBlDxfnc = () => {
  if (document.getElementById("DX").value === "") {
    document.getElementById("DX").value = document.getElementById("BL").value;
  } else if (
    (document.getElementById("DX").value = document.getElementById("BH").value)
  ) {
    document.getElementById("DX").value =
      document.getElementById("BH").value + document.getElementById("BL").value;
  } else {
    document.getElementById("DX").value = document.getElementById("BL").value;
  }
};

movChAxfnc = () => {
  if (document.getElementById("AX").value === "") {
    document.getElementById("AX").value = document.getElementById("CH").value;
  } else if (
    (document.getElementById("AX").value = document.getElementById("CL").value)
  ) {
    document.getElementById("AX").value =
      document.getElementById("CH").value + document.getElementById("CL").value;
  } else {
    document.getElementById("AX").value = document.getElementById("CH").value;
  }
};
movClAxfnc = () => {
  if (document.getElementById("AX").value === "") {
    document.getElementById("AX").value = document.getElementById("CL").value;
  } else if (
    (document.getElementById("AX").value = document.getElementById("CH").value)
  ) {
    document.getElementById("AX").value =
      document.getElementById("CH").value + document.getElementById("CL").value;
  } else {
    document.getElementById("AX").value = document.getElementById("CL").value;
  }
};
movChBxfnc = () => {
  if (document.getElementById("BX").value === "") {
    document.getElementById("BX").value = document.getElementById("CH").value;
  } else if (
    (document.getElementById("BX").value = document.getElementById("CL").value)
  ) {
    document.getElementById("BX").value =
      document.getElementById("CH").value + document.getElementById("CL").value;
  } else {
    document.getElementById("BX").value = document.getElementById("CH").value;
  }
};
movClBxfnc = () => {
  if (document.getElementById("BX").value === "") {
    document.getElementById("BX").value = document.getElementById("CL").value;
  } else if (
    (document.getElementById("BX").value = document.getElementById("CH").value)
  ) {
    document.getElementById("BX").value =
      document.getElementById("CH").value + document.getElementById("CL").value;
  } else {
    document.getElementById("BX").value = document.getElementById("CL").value;
  }
};

movChCxfnc = () => {
  if (document.getElementById("CX").value === "") {
    document.getElementById("CX").value = document.getElementById("CH").value;
  } else if (
    (document.getElementById("CX").value = document.getElementById("CL").value)
  ) {
    document.getElementById("CX").value =
      document.getElementById("CH").value + document.getElementById("CL").value;
  } else {
    document.getElementById("CX").value = document.getElementById("CH").value;
  }
};
movClCxfnc = () => {
  if (document.getElementById("CX").value === "") {
    document.getElementById("CX").value = document.getElementById("CL").value;
  } else if (
    (document.getElementById("CX").value = document.getElementById("CH").value)
  ) {
    document.getElementById("CX").value =
      document.getElementById("CH").value + document.getElementById("CL").value;
  } else {
    document.getElementById("CX").value = document.getElementById("CL").value;
  }
};
movChDxfnc = () => {
  if (document.getElementById("DX").value === "") {
    document.getElementById("DX").value = document.getElementById("CH").value;
  } else if (
    (document.getElementById("DX").value = document.getElementById("CL").value)
  ) {
    document.getElementById("DX").value =
      document.getElementById("CH").value + document.getElementById("CL").value;
  } else {
    document.getElementById("DX").value = document.getElementById("CH").value;
  }
};

movClDxfnc = () => {
  if (document.getElementById("DX").value === "") {
    document.getElementById("DX").value = document.getElementById("CL").value;
  } else if (
    (document.getElementById("DX").value = document.getElementById("CH").value)
  ) {
    document.getElementById("DX").value =
      document.getElementById("CH").value + document.getElementById("CL").value;
  } else {
    document.getElementById("DX").value = document.getElementById("CL").value;
  }
};

movDhAxfnc = () => {
  if (document.getElementById("AX").value === "") {
    document.getElementById("AX").value = document.getElementById("DH").value;
  } else if (
    (document.getElementById("AX").value = document.getElementById("DL").value)
  ) {
    document.getElementById("AX").value =
      document.getElementById("DH").value + document.getElementById("DL").value;
  } else {
    document.getElementById("AX").value = document.getElementById("DH").value;
  }
};
movDlAxfnc = () => {
  if (document.getElementById("AX").value === "") {
    document.getElementById("AX").value = document.getElementById("DL").value;
  } else if (
    (document.getElementById("AX").value = document.getElementById("DH").value)
  ) {
    document.getElementById("AX").value =
      document.getElementById("DH").value + document.getElementById("DL").value;
  } else {
    document.getElementById("AX").value = document.getElementById("DL").value;
  }
};
movDhBxfnc = () => {
  if (document.getElementById("BX").value === "") {
    document.getElementById("BX").value = document.getElementById("DH").value;
  } else if (
    (document.getElementById("BX").value = document.getElementById("DL").value)
  ) {
    document.getElementById("BX").value =
      document.getElementById("DH").value + document.getElementById("DL").value;
  } else {
    document.getElementById("BX").value = document.getElementById("DH").value;
  }
};
movDlBxfnc = () => {
  if (document.getElementById("BX").value === "") {
    document.getElementById("BX").value = document.getElementById("DL").value;
  } else if (
    (document.getElementById("BX").value = document.getElementById("DH").value)
  ) {
    document.getElementById("BX").value =
      document.getElementById("DH").value + document.getElementById("DL").value;
  } else {
    document.getElementById("BX").value = document.getElementById("DL").value;
  }
};
movDhCxfnc = () => {
  if (document.getElementById("CX").value === "") {
    document.getElementById("CX").value = document.getElementById("DH").value;
  } else if (
    (document.getElementById("CX").value = document.getElementById("DL").value)
  ) {
    document.getElementById("CX").value =
      document.getElementById("DH").value + document.getElementById("DL").value;
  } else {
    document.getElementById("CX").value = document.getElementById("DH").value;
  }
};
movDlCxfnc = () => {
  if (document.getElementById("CX").value === "") {
    document.getElementById("CX").value = document.getElementById("DL").value;
  } else if (
    (document.getElementById("CX").value = document.getElementById("DH").value)
  ) {
    document.getElementById("CX").value =
      document.getElementById("DH").value + document.getElementById("DL").value;
  } else {
    document.getElementById("CX").value = document.getElementById("DL").value;
  }
};
movDhDxfnc = () => {
  if (document.getElementById("DX").value === "") {
    document.getElementById("DX").value = document.getElementById("DH").value;
  } else if (
    (document.getElementById("DX").value = document.getElementById("DL").value)
  ) {
    document.getElementById("DX").value =
      document.getElementById("DH").value + document.getElementById("DL").value;
  } else {
    document.getElementById("DX").value = document.getElementById("DH").value;
  }
};
movDlDxfnc = () => {
  if (document.getElementById("DX").value === "") {
    document.getElementById("DX").value = document.getElementById("DL").value;
  } else if (
    (document.getElementById("DX").value = document.getElementById("DH").value)
  ) {
    document.getElementById("DX").value =
      document.getElementById("DH").value + document.getElementById("DL").value;
  } else {
    document.getElementById("DX").value = document.getElementById("DL").value;
  }
};

movAhAx.addEventListener("click", movAhAxfnc);
movAlAx.addEventListener("click", movAlAxfnc);
movAhBx.addEventListener("click", movAhBxfnc);
movAlBx.addEventListener("click", movAlBxfnc);
movAhCx.addEventListener("click", movAhCxfnc);
movAlCx.addEventListener("click", movAlCxfnc);
movAhDx.addEventListener("click", movAhDxfnc);
movAlDx.addEventListener("click", movAlDxfnc);
movBhAx.addEventListener("click", movBhAxfnc);
movBlAx.addEventListener("click", movBlAxfnc);
movBhBx.addEventListener("click", movBhBxfnc);
movBlBx.addEventListener("click", movBlBxfnc);
movBhCx.addEventListener("click", movBhCxfnc);
movBlCx.addEventListener("click", movBlCxfnc);
movBhDx.addEventListener("click", movBhDxfnc);
movBlDx.addEventListener("click", movBlDxfnc);
movChAx.addEventListener("click", movChAxfnc);
movClAx.addEventListener("click", movClAxfnc);
movChBx.addEventListener("click", movChBxfnc);
movClBx.addEventListener("click", movClBxfnc);
movChCx.addEventListener("click", movChCxfnc);
movClCx.addEventListener("click", movClCxfnc);
movChDx.addEventListener("click", movChDxfnc);
movClDx.addEventListener("click", movClDxfnc);
movDhAx.addEventListener("click", movDhAxfnc);
movDlAx.addEventListener("click", movDlAxfnc);
movDhBx.addEventListener("click", movDhBxfnc);
movDlBx.addEventListener("click", movDlBxfnc);
movDhCx.addEventListener("click", movDhCxfnc);
movDlCx.addEventListener("click", movDlCxfnc);
movDhDx.addEventListener("click", movDhDxfnc);
movDlDx.addEventListener("click", movDlDxfnc);
