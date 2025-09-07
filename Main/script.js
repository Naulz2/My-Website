function updateClock() {
  const now = new Date();

  // Giờ, phút, giây
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Ngày, tháng, năm
  let day = now.getDate();
  let month = now.getMonth() + 1; // Lưu ý: tháng bắt đầu từ 0
  let year = now.getFullYear();

  // Format số có 2 chữ số
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  // Cập nhật giao diện
  document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById("date").textContent = `${day}/${month}/${year}`;
}

setInterval(updateClock, 1000);
updateClock(); // Gọi lần đầu
