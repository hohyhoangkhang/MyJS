// 1. click
const btnClick = document.getElementById("btnClick");
const clickResult = document.getElementById("clickResult");

btnClick.addEventListener("click", function() {
  clickResult.textContent = "Bạn đã bấm nút!";
});

// 2. change
const colorSelect = document.getElementById("colorSelect");
const changeResult = document.getElementById("changeResult");

colorSelect.addEventListener("change", function() {
  changeResult.textContent = "Bạn chọn màu: " + colorSelect.value;
  changeResult.style.color = colorSelect.value;
});

// 3. keyup
const nameInput = document.getElementById("nameInput");
const keyupResult = document.getElementById("keyupResult");

nameInput.addEventListener("keyup", function() {
  keyupResult.textContent = "Xem trước: " + nameInput.value;
});

// 4. submit
const myForm = document.getElementById("myForm");
const submitResult = document.getElementById("submitResult");

myForm.addEventListener("submit", function(e) {
  e.preventDefault();
  submitResult.textContent = "Form đã gửi (nhưng không reload trang)!";
});