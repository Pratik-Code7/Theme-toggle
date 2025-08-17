btn1 = document.querySelector("#btn");
let bg = false;
btn1.addEventListener("click", function () {
  if (!bg) {
    document.documentElement.style.setProperty("--white", "#333333");
    document.documentElement.style.setProperty("--dark", "#ffffff");
    document.documentElement.style.setProperty("--text", "#ffffff");

    bg = true;
  } else {
    document.documentElement.style.setProperty("--white", "#ffffff");
    document.documentElement.style.setProperty("--text", "#333333");

    document.documentElement.style.setProperty("--dark", "#333333");
    bg = false;
  }
});
