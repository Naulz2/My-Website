const container = document.getElementById('container');
const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');

signUpBtn.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInBtn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}
localStorage.removeItem("users");
id=""
function register() {
  let user = regUser.value.trim();
  let pass = regPass.value.trim();

  if (!user || !pass) {
    alert("Vui lòng nhập đủ thông tin");
    return;
  }

  let users = getUsers();

  if (users.find(u => u.username === user)) {
    alert("Tài khoản đã tồn tại");
    return;
  }

  users.push({
    username: user,
    password: pass
  });

  saveUsers(users);
  alert("Đăng ký thành công!");
  showLogin();
}

function login() {
  let user = loginUser.value.trim();
  let pass = loginPass.value.trim();

  let users = getUsers();
  let found = users.find(u => u.username === user && u.password === pass);

  if (found) {
    alert("Đăng nhập thành công!");
    window.location.href
  } else {
    alert("Sai tài khoản hoặc mật khẩu");
  }
      }
