// inicio...............
const inicio = document.querySelector(".container_initial"),
  contDev = document.querySelector(".container_dev"),
  btn_initial = document.querySelector(".btn_initial");
btn_initial.addEventListener("click", () => {
  inicio.style.display = "none";
  contDev.style.display = "flex";
});

//funcion para pasar entre divs
const btnNext = document.querySelector(".next"),
  btnBack = document.querySelector(".back"),
  circles = document.querySelectorAll(".circle");
desafios = document.querySelectorAll(".desafios");
let increment = 1;
const update = () => {
  circles.forEach((elem, idx) => {
    if (idx < increment) {
      elem.classList.add("active");
    } else {
      elem.classList.remove("active");
    }
  });
  desafios.forEach((div, idx) => {
    if (idx === increment - 1) {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  });
};
btnBack.addEventListener("click", () => {
  increment--;
  if (increment < 1) {
    increment = 1;
  }
  update();
});
btnNext.addEventListener("click", () => {
  increment++;
  if (increment > circles.length) {
    increment = circles.length;
  }
  update();
});
//convertidor de monedas

const objMonedas = {
  PE: {
    USD: 0.26,
    MXN: 4.7,
    PE: 1,
  },
  MXN: {
    PE: 0.21,
    USD: 0.05,
    MXN: 1,
  },
  USD: {
    MXN: 18.15,
    PE: 3.86,
    USD: 1,
  },
};
const btn_convert = document.querySelector(".btn_convert");
btn_convert.addEventListener("click", (e) => {
  e.preventDefault();
  const count = document.querySelector(".count"),
    currency = document.querySelector(".currency"),
    change = document.querySelector(".change"),
    rest = document.querySelector(".rest");
  if (/^[0-9,$]*$/.test(count.value) && count.value !== "") {
    let resultado =
      parseInt(count.value) * objMonedas[currency.value][change.value];
    return (rest.innerHTML = resultado.toFixed(2));
  }
});
//numero secreto..........

const msj = {
  cerca: "caliente 🥵🥵🥵",
  aproxima: "tibio 😳😳😳",
  lejos: "frio 🥶🥶🥶",
  win: "🎉🎉🎉 Felicidades Ganaste 🎉🎉🎉",
  lose: "Lo siento perdiste pipipi 😫😫",
};
let numeroAlet = Math.round(Math.random() * 20);
let intentos = 5;

const reset = document.querySelector(".reset"),
  adivinar = document.querySelector(".adivinar"),
  entrada = document.querySelector(".entrada"),
  mensaje = document.querySelector(".mensaje"),
  intent = document.querySelector(".intent");
reset.addEventListener("click", () => {
  numeroAlet = Math.round(Math.random() * 20);
  intentos = 5;
  entrada.value = "";
  intent.innerHTML = intentos;
  mensaje.textContent = "";
  adivinar.disabled = false;
});
adivinar.addEventListener("click", () => {
  intentos--;
  intent.innerHTML = intentos;
  if (intentos > 0) {
    if (numeroAlet === parseFloat(entrada.value)) {
      mensaje.textContent = msj["win"];
      adivinar.disabled = true;
    } else if (entrada.value > numeroAlet) {
      if (entrada.value - numeroAlet <= 3) {
        mensaje.textContent = msj["cerca"];
      } else if (entrada.value - numeroAlet <= 6) {
        mensaje.textContent = msj["aproxima"];
      } else {
        mensaje.textContent = msj["lejos"];
      }
    } else if (entrada.value < numeroAlet) {
      if (numeroAlet - entrada.value <= 3) {
        mensaje.textContent = msj["cerca"];
      } else if (numeroAlet - entrada.value <= 6) {
        mensaje.textContent = msj["aproxima"];
      } else {
        mensaje.textContent = msj["lejos"];
      }
    }
  } else {
    mensaje.style.color = "red";
    mensaje.textContent = msj["lose"];
    adivinar.disabled = true;
  }
});


//pelicula favorita..........

const agregarImg = document.querySelector(".agregar_img"),
btn_submit = document.querySelector(".btn_submit"),
galery=document.querySelector('.galery');

btn_submit.addEventListener('click',()=>{
    let img = document.createElement('img');
    img.classList.add('imgs');
    img.src=agregarImg.value;
    galery.appendChild(img)
    agregarImg.value="";
})

