"use strict";

function matchPassword(e) {
  const password1 = document.querySelector("#password1");
  const password2 = document.querySelector("#password2");
  const error = document.querySelector(".error");
  e.preventDefault();
  if (password1.value !== password2.value) error.style.display = "block";
}

document.querySelector(".btn").addEventListener("click", matchPassword);
