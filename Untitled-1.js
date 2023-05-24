<!DOCTYPE html>
<html>
<head>
  <title>Hotel Management System - Login</title>
  <style>
    body {
      background-color: #f2f2f2;
      font-family: Arial, sans-serif;
    }
    
    .container {
      max-width: 400px;
      margin: 0 auto;
      padding: 40px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
    
    input[type="text"],
    input[type="password"] {
      width: 100%;
      padding: 12px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    
    button[type="submit"] {
      width: 100%;
      padding: 12px;
      background-color: #4CAF50;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
    
    button[type="submit"]:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Hotel Management System</h1>
    <form id="login-form">
      <input type="text" id="username" placeholder="Username" required>
      <input type="password" id="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  </div>

  <script>
    function login(event) {
      event.preventDefault(); // Prevent form submission

      // Get the username and password values
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      // Perform validation or send the login request to the server
      // For demonstration purposes, let's check if the username is "admin" and the password is "password"
      if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect to the main page or perform other actions
      } else {
        alert("Invalid username or password. Please try again.");
      }
    }

    document.getElementById("login-form").addEventListener("submit", login);
  </script>
</body>
</html>
