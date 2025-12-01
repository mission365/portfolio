<?php
// File: my-arts.php
// Place this file in the same directory as your other PHP pages (e.g. root or pages/). 
// Update the CSS link path below if your CSS folder location is different.
$siteTitle = 'Aditya';
$active = 'gallery'; // used to mark active nav link
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Arts — <?php echo htmlspecialchars($siteTitle); ?></title>
    <!-- Adjust the path to the CSS file depending on where you save it -->
    <link rel="stylesheet" href="../src/css/gallery.css">
</head>
<body>

   

    <main class="arts-page">
        <section class="hero">
            <div class="container">
                <h1>My Arts</h1>
                <p>A curated selection of my artwork and sketches.</p>
                <a class="btn-back" href="../php_files/index.php">← Back to Home</a>
            </div>
        </section>

        <section class="arts-gallery container">
            <!-- Each .art-card can link to a larger image or a detail page -->
            <article class="art-card">
                <a href="../images/art1.jpg" target="_blank">
                    <img src="../images/art1_thumb.jpg" alt="Art 1">
                    <div class="caption">Sketch — Urban Study</div>
                </a>
            </article>

            <article class="art-card">
                <a href="../images/art2.jpg" target="_blank">
                    <img src="../images/art2_thumb.jpg" alt="Art 2">
                    <div class="caption">Concept — Community Plaza</div>
                </a>
            </article>

            <article class="art-card">
                <a href="../images/art3.jpg" target="_blank">
                    <img src="../images/art3_thumb.jpg" alt="Art 3">
                    <div class="caption">Model — Pavilion</div>
                </a>
            </article>

            <!-- Add more art-card blocks as needed -->
        </section>

    </main>

    <footer class="site-footer">
        <div class="container">
            <p>&copy; <?php echo date('Y'); ?> <?php echo htmlspecialchars($siteTitle); ?>. All rights reserved.</p>
        </div>
    </footer>

