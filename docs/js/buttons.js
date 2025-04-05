document.addEventListener("DOMContentLoaded", () => {
    const view_button = document.querySelector(".view-button");
    if (view_button) {
      view_button.addEventListener("click", () => {
        window.location.href = "projects.html";
      });
    }

    const explore_button = document.querySelector(".explore-button");
    if (explore_button) {
      explore_button.addEventListener("click", () => {
        window.location.href = "projects.html";
      });
    }

    const feature_buttons = document.querySelectorAll('.feature-button');
    feature_buttons.forEach(button => {
      button.addEventListener('click', function () {
        // Use the data-github attribute to redirect
        const githubURL = button.getAttribute('data-github');
        if (githubURL) {
          window.location.href = githubURL;
        }
      });
    });

    const buttons = document.querySelectorAll('.card-button');
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        // Use the data-github attribute to redirect
        const githubURL = button.getAttribute('data-github');
        if (githubURL) {
          window.location.href = githubURL;
        }
      });
    });
  });
  
