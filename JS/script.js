let userinfo = [];

function userexist(){
    if (localStorage.getItem("userinfo") !== null) {
        userinfo = JSON.parse(localStorage.getItem("userinfo"));
    } else {
        userinfo = [];
    }
}

function adduser() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "" || email === "") {
        swal("Please fill in all fields.");
        return;
    }
    if (!validateEmail(email)) {
        swal("Please enter a valid email address.");
        return;
    }
    if (!validatePassword(password)) {
        swal("Password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, and one number.");
        return;
    }
    if (!validateusername(username)) {
        swal("Username must be at least 3 characters long and can only contain alphanumeric characters.");
        return;
    }

    userexist();

    for (let i = 0; i < userinfo.length; i++) {
        if (userinfo[i].username === username || userinfo[i].email === email) {
            swal("Username already exists.");
            return;
        }
    }

    userinfo.push({ username: username,email : email, password: password });
    localStorage.setItem("userinfo", JSON.stringify(userinfo));
    swal("User added successfully!").then(() => {
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        window.location.href = "../index.html"; // Redirect to login page after successful registration
    });
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        swal("Please fill in all fields.");
        return;
    }

    userexist();

    for (let i = 0; i < userinfo.length; i++) {
        if (userinfo[i].email === email && userinfo[i].password === password) {
            // Optionally, store the username in localStorage or sessionStorage for use on the next page
            let username = userinfo[i].username;
            localStorage.setItem("loggedInUsername", username);
            swal("Login successful!").then(() => {
                window.location.href = "home.html"; // Example redirect
            });
            // If you want to set the username on the next page, retrieve it from localStorage there
            return;
        }
    }

    swal("Invalid email or password.");
}

// if the page of home loads get the username from localStorage and set it in the element with id username
function setUsernameOnHomePage() {
    let username = localStorage.getItem("loggedInUsername");
    let usernameElement = document.getElementById("username");
    if (usernameElement) {
        if (username) {
            usernameElement.textContent = username;
        } else {
            usernameElement.textContent = "Guest";
        }
    }
}
// Call this function on the home page to set the username
window.onload = function() {
    if (window.location.pathname.includes("home.html")) {
        setUsernameOnHomePage();
    }
};

function logout() {
    localStorage.removeItem("loggedInUsername");
    swal("Logged out successfully!").then(() => {
        window.location.href = "index.html"; // Redirect to login page
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
function validatePassword(password) {
    // Example validation: at least 6 characters, one uppercase, one lowercase, one number
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return re.test(password);
}
function validateusername(username) {
    // Example validation: at least 3 characters, alphanumeric
    const re = /^[a-zA-Z0-9]{3,}$/;
    return re.test(username);
}