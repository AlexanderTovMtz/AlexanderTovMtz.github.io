const cardDOS = document.querySelector(".cardDOS");
const containerDOS = document.querySelector(".containerDOS");
//Items
const titleDOS = document.querySelector(".titleDOS");
const sneakerDOS = document.querySelector(".sneakerDOS img");
const descriptionDOS = document.querySelector(".infoDOS h3");
const sizesDOS = document.querySelector(".sizesDOS");

const cuadro = document.querySelector(".cuadro")
const gif = document.querySelector(".gifeva")

cuadro.addEventListener("click", (e) => {
    cuadro.remove(".cuadro");
})

gif.addEventListener("click", (e) => {
  document.location.reload(true);
})

//Moving Animation Event
containerDOS.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 0.1;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 0.1;
  cardDOS.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
containerDOS.addEventListener("mouseenter", (e) => {
  cardDOS.style.transition = "none";
  //Popout
  titleDOS.style.transform = "translateZ(0px)";
  sneakerDOS.style.transform = "translateZ(150px)";
  descriptionDOS.style.transform = "translateZ(50px)";
  sizesDOS.style.transform = "translateZ(0px)";
});
//Animate Out
containerDOS.addEventListener("mouseleave", (e) => {
  cardDOS.style.transition = "all 0.5s ease";
  cardDOS.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  titleDOS.style.transform = "translateZ(0px)";
  sneakerDOS.style.transform = "translateZ(0px) rotateZ(0deg)";
  descriptionDOS.style.transform = "translateZ(0px)";
  sizesDOS.style.transform = "translateZ(0px)";
});