const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
  alert("Vui lòng đăng nhập!");
  window.location.href = "Auth.html";
}

// Hiển thị thông tin
document.getElementById("username").textContent = currentUser.username;
document.getElementById("pDate").textContent =
  currentUser.data?.createdAt || "Không rõ";

//Trang chủ
function goHome() {
  window.location.href = "../music.html";
}

// Đăng xuất
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "../index.html";
}

// Xóa tài khoản
function deleteAccount() {
  if (!confirm("Bạn có chắc muốn xóa tài khoản không?")) return;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  users = users.filter(u => u.username !== currentUser.username);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.removeItem("currentUser");

  alert("Tài khoản đã bị xóa");
  window.location.href = "Auth.html";
}
