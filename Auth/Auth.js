const container = document.getElementById('container');
const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');

signUpBtn.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInBtn.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// ================= LOCAL STORAGE =================
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// ================= ĐĂNG KÝ =================
function register() {
  const username = document.getElementById("regUser").value.trim();
  const password = document.getElementById("regPass").value.trim();

  if (!username || !password) {
    alert("Vui lòng nhập đủ thông tin");
    return;
  }

  let users = getUsers();

  if (users.find(u => u.username === username)) {
    alert("Tài khoản đã tồn tại");
    return;
  }

  users.push({
    username: username,
    password: password
  });

  saveUsers(users);
  alert("Đăng ký thành công!");
  container.classList.remove('right-panel-active');
}

// ================= ĐĂNG NHẬP =================
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  let users = getUsers();
  let found = users.find(
    u => u.username === username && u.password === password
  );

  if (found) {
    localStorage.setItem("currentUser", JSON.stringify(found));
    alert("Đăng nhập thành công!");
    window.location.href = "../index.html"; // chỉnh lại nếu cần
  } else {
    alert("Sai tài khoản hoặc mật khẩu");
  }
}
