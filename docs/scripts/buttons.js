// set up the event listeners after the DOM is loaded
window.addEventListener("load", function() {
    const linkedin_button = document.getElementById('linkedin_button');
    const github_button = document.getElementById('github_button');
    linkedin_button.addEventListener('click', function() {
        document.location.href = 'https://www.linkedin.com/in/anjola-aina/';
    });
    github_button.addEventListener('click', function() {
        document.location.href = 'https://github.com/anj0la';
    });
 }); // load