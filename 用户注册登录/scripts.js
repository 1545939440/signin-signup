function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (username && password) {
        // 模拟登录成功后跳转到新的页面
        alert("登录成功！");
        window.location.href = "https://jing-ya-s-dandy-site.webflow.io/";  // 替换为你希望跳转的目标链接
    } else {
        alert("请输入用户名和密码！");
    }
}

function register() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("register-confirm-password").value;

    if (password !== confirmPassword) {
        alert("两次输入的密码不一致！");
        return;
    }

    if (username && password) {
        alert("注册成功！");
        // 这里可以执行注册后跳转的逻辑
        window.location.href = "https://www.example.com";  // 替换为注册后的跳转链接
    } else {
        alert("请输入完整的信息！");
    }
}
