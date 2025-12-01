document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            const topPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: topPosition,
                behavior: "smooth"
            });

            // 🔥 Update active link immediately
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
            // 🔥 Force update active link right away
            updateActiveLink();
        });
    });

    // Update active link on scroll
    const updateActiveLink = () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 10;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", updateActiveLink);
});
