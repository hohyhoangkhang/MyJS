const btnToggle = document.getElementById("btnToggle");
const info = document.getElementById("info");

btnToggle.addEventListener("click", function() {
  if (info.style.display === "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
});


const contactForm = document.getElementById("contactForm");
const formResult = document.getElementById("formResult");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();


  if (name === "" || email === "" || message === "") {
    formResult.style.color = "red";
    formResult.textContent = "Vui lòng điền đầy đủ thông tin!";
    return;
  }

  formResult.style.color = "green";
  formResult.textContent = "Gửi thành công! Cảm ơn " + name + ".";
  contactForm.reset();
});
