document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password match a hardcoded value (for demonstration purposes)
    if (username === "correct" && password === "correct") {
      // Redirect to user profile page (for demonstration, just display a message)
      alert("Login successful! Redirecting to user profile page...");
      // Replace 'yourUserProfilePage.html' with the actual user profile page URL
      window.location.href = "index.html";
    } else {
      // Show error message for incorrect credentials
      document.getElementById("errorMsg").textContent =
        "Invalid username or password. Please try again.";
    }
  });
