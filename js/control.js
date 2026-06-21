let score = 7.2;

// TODO 1: dùng if...else if...else để in ra xếp loại
if (score >= 9) {
  console.log("Xuất sắc");
} else if (score >= 7) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

console.log("In các số từ 1 đến 5 bằng vòng for:");
// TODO 2: viết vòng for in các số từ 1 đến 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let total = 0;
// TODO 3: viết vòng for tính tổng từ 1 đến 5
for (let i = 1; i <= 5; i++) {
  total += i;
}
console.log("Tổng =", total);
