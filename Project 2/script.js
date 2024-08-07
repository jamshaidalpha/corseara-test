/*

"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".open-modal");
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++);

btnsOpenModal[i].addEventListener("click", function ()

    console.log("Button clicked");
    modal.classList.remove(".hidden");
     overlay.classList.remove('hidden'); 
      const closeModal = function () {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
  };


  
  btnsCloseModal.addEventListener('click', closeModal());
  
  overlay.addEventListener('click', function () {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
) */
"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".open-modal");

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    console.log("Button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

const closeModal = function (e) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

/*
document.addEventListener('keydown', function () {
  console.log('A key was pressed');
}); 
*/

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if(e.key==='Escape' &&!modal.classList.contains('hidden')){
    closeModal();
    

  }
});

