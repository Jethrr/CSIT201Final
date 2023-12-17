document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "correct" && password === "correct") {
      alert("Login successful! Redirecting to user profile page...");

      window.location.href = "userprofile.html";
    } else {
      document.getElementById("errorMsg").textContent =
        "Invalid username or password. Please try again.";
    }
  });
