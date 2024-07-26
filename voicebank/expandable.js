document.addEventListener("DOMContentLoaded", function () {
    const expandables = document.querySelectorAll('.vbdeslangexpandable');

    function toggleContent(element) {
        const content = element.nextElementSibling;

        // Close all other expandable contents
        expandables.forEach(exp => {
            const otherContent = exp.nextElementSibling;
            if (exp !== element && otherContent.style.display === "block") {
                otherContent.style.display = "none";
                exp.classList.remove("expanded");
            }
        });

        // Toggle the clicked expandable content
        if (content.style.display === "block") {
            content.style.display = "none";
            element.classList.remove("expanded");
        } else {
            content.style.display = "block";
            element.classList.add("expanded");
        }
    }

    // Add click event listeners to each expandable element
    expandables.forEach(exp => {
        exp.addEventListener('click', function () {
            toggleContent(exp);
        });
    });
});