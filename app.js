//removing the spinner after a while
setTimeout(() => {
  document.querySelector(".spinner").remove();
}, 2000);

//displaying the <main> after 4 seconds
setTimeout(() => {
  document.querySelector("main").classList.remove("hidden");
}, 2000);
