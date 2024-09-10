
document.addEventListener('DOMContentLoaded', function() {
    let toggleButton = document.querySelector('.toggle-policy');
    let policyContent = document.querySelector('.policy-content');
    let closeButton = document.querySelector('.close-button');

    toggleButton.addEventListener('click', function() {
        policyContent.classList.toggle('show');
    });

    closeButton.addEventListener('click', function() {
        policyContent.classList.remove('show');
    });
});