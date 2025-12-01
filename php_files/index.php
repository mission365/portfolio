<?php
// Simple One Page Website
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My One Page Website</title>
    <link rel="stylesheet" href="../src/css/index.css">
</head>
<body>

    <!-- Navbar -->
    <?php include('../php_files/nav.php'); ?>

    <!-- Home Section -->
    <section id="home" class="section home">
        <div class="home-content">
            <div class="home-left">
                <img src="../images/profile2.jpeg" alt="Profile Photo">
            </div>
            <div class="home-right">
                <h1>Hi, I am Aditya Mitra (Joy)</h1>
                <p>Welcome to my  portfolio</p>
            </div>
        </div>
    </section>


    <!-- About Section -->
    <section id="about" class="section about">
        <div class="about-content">
           <div class="about-right">
                <img src="../images/profile.jpeg" alt="Profile Photo">
            </div>
            <div class="about-left">
                <h1>About Me</h1>
                <p>I’m an architecture student at Rajshahi University of Engineering & Technology (RUET). My academic journey began at Chittagong Government High School and continued at Chittagong College, where I earned a GPA of 5.00 in both SSC and HSC.

From a young age, I’ve been curious about the spaces around me—how buildings, streets, and open areas shape the way people live, interact, and feel. I’m passionate about urban design, sustainability, and architecture that responds to culture and context. For me, architecture is more than creating structures; it’s about crafting experiences, telling stories through spaces, and finding creative ways to make cities and communities more livable.

Outside of my studies, I enjoy playing football, making sketches, and reading books, which inspire my creativity and keep me curious about the world around me.</p>
            </div>
        </div>
    </section>

    <section id="gallery" class="section gallery">
    <div class="content">
        <h2>Gallery</h2>
        <div class="gallery-container">
        <div class="gallery-item">
            <a href="myarts.php">
            <img src="../images/profile.jpeg" alt="Image 1">
            <div class="overlay">My Arts</div></a>
        </div>
        <div class="gallery-item">
            <a href="myprojects.php">
            <img src="../images/profile.jpeg" alt="Image 2">
            <div class="overlay">My Projects</div></a>
        </div>
        <div class="gallery-item">
            <a href="myphg.php">
            <img src="../images/profile.jpeg" alt="Image 3">
            <div class="overlay">My Photographs</div></a>
        </div>
        </div>
    </div>
    </section>


    <!-- Contact Section -->
    <section id="contact" class="section contact">
        <div class="content">
            <h2>Contact Me</h2>
            <form method="POST" action="">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>

            <?php
            // Simple PHP mail handler (for demo)
            if ($_SERVER["REQUEST_METHOD"] === "POST") {
                $name = htmlspecialchars($_POST['name']);
                $email = htmlspecialchars($_POST['email']);
                $message = htmlspecialchars($_POST['message']);

                echo "<p class='success'>Thanks, $name! Your message has been received.</p>";
            }
            ?>
        </div>
    </section>

    <footer>
        <p>&copy; <?php echo date("Y"); ?> MySite. All rights reserved.</p>
    </footer>

    <script src="../src/js/index.js"></script>
</body>
</html>
