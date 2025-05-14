
    const progressBarContainers = document.querySelectorAll('.progress-bar-container');

    progressBarContainers.forEach(container => {
        const skillLevel = container.dataset.skillLevel;
        const progressBar = container.querySelector('.progress-bar');

        // Set the initial width to 0 and then animate
        progressBar.style.width = '0%';
        progressBar.style.transition = 'width 1.5s ease, background-color 0.3s ease, box-shadow 0.3s ease';
        progressBar.style.backgroundColor = 'transparent';

        // Function to trigger the animation when the element is in view
        function animateProgressBar() {
            if (isElementInViewport(container)) {
                progressBar.style.width = `${skillLevel}%`;
                progressBar.style.backgroundColor = '';
                progressBar.style.backgroundImage = 'linear-gradient(to right, #00b0ff, #00ffff)';
                window.removeEventListener('scroll', animateProgressBar);
            }
        }

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Check if the element is in view on load
        animateProgressBar();
        // Listen for scroll events to trigger the animation
        window.addEventListener('scroll', animateProgressBar);
    });
        // Get modal and elements
        var modal = document.getElementById("feedback-form");
        var btn = document.getElementById("feedbackBtn");
        var span = document.getElementsByClassName("close-btn")[0];

        // When the user clicks the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Handle the feedback form submission
        document.getElementById("feedbackForm").onsubmit = function(e) {
            e.preventDefault();
            // Process the form data here (e.g., send it to a server)
            alert("Feedback submitted successfully!");
            modal.style.display = "none"; // Close modal after submission
        };
new Typed("#typed-role", {
  strings: ["Data Scientist", "Web Developer", "ML Enthusiast"],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true
});
document.getElementById("themeToggle").onclick = function () {
  document.body.classList.toggle("light-theme");
};
ScrollReveal().reveal('.service-card, .about-box, .skill', {
  distance: '50px',
  duration: 800,
  easing: 'ease-out',
  origin: 'bottom',
  interval: 200
});
