// subscriber form js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.subscriber-form');
    const emailInput = form.querySelector('input[type="email"]');
    const storedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];

    form.addEventListener('submit', function(event) {
        const email = emailInput.value;

        if (storedEmails.includes(email)) {
            event.preventDefault();
            alert('This email address has already been used to subscribe.');
        } else {
            storedEmails.push(email);
            localStorage.setItem('subscribedEmails', JSON.stringify(storedEmails));
        }
    });
});