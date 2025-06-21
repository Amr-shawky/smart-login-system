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
        alert("Please fill in all fields.");
        return;
    }

    userexist();

    for (let i = 0; i < userinfo.length; i++) {
        if (userinfo[i].username === username || userinfo[i].email === email) {
            alert("Username already exists.");
            return;
        }
    }

    userinfo.push({ username: username,email : email, password: password });
    localStorage.setItem("userinfo", JSON.stringify(userinfo));
    alert("User added successfully!");
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    userexist();

    for (let i = 0; i < userinfo.length; i++) {
        if (userinfo[i].email === email && userinfo[i].password === password) {
            alert("Login successful!");
            // Optionally, store the username in localStorage or sessionStorage for use on the next page
            let username = userinfo[i].username;
            localStorage.setItem("loggedInUsername", username);
            window.location.href = "../screens/home.html"; // Example redirect
            // If you want to set the username on the next page, retrieve it from localStorage there
            return;
        }
    }

    alert("Invalid email or password.");
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
    alert("Logged out successfully!");
    window.location.href = "../index.html"; // Redirect to login page
}