<?php
// Login Form Page
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Aditya</title>
    <link rel="stylesheet" href="../src/css/index.css">
    <link rel="stylesheet" href="../src/css/form_styles.css">
</head>
<body>
    <div class="login-container">
        <h1>Login</h1>
        <form method="POST" action="">
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required>
            </div>

            <div class="remember-forgot">
                <label>
                    <input type="checkbox" name="remember" id="remember">
                    Remember me
                </label>
                <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" class="btn-login">Login</button>

            <div class="signup-link">
                Don't have an account? <a href="#">Sign up here</a>
            </div>

            <div class="back-link">
                <a href="index.php">← Back to Home</a>
            </div>
        </form>
    </div>
</body>
</html>
