const container = document.getElementById('container');
const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');

signUpBtn.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInBtn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Nếu đã đăng nhập rồi → chuyển trang
if (localStorage.getItem("user")) {
    window.location.href = "../music.html";
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "ngluan2005@gmail.com" && pass === "123") {

        // Lưu thông tin đăng nhập
        localStorage.setItem("user", user);

        alert("Đăng nhập thành công!");
        window.location.href = "../music.html";
    } else {
        alert("Sai email hoặc mật khẩu!");
    }
}
