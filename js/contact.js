const form = document.querySelector('.form');
const emailInput = form.querySelector('input[name="email"]');
const phoneInput = form.querySelector('input[name="phone"]');
const messageInput = form.querySelector('textarea[name="msg"]');


// Helper function to validate email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Helper function to validate phone number
function validatePhone(phone) {
    const phonePattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return phonePattern.test(phone);
}


form.addEventListener("submit", e => {
    // Stop page from reloading 
    e.preventDefault(); 

    // Validate inputs
    const errors = [];

    if (!validateEmail(emailInput.value)) 
        errors.push('Invalid email.');
    if (!validatePhone(phoneInput.value)) 
        errors.push('Invalid phone number.');
    if (!messageInput.value.trim()) 
        errors.push('Message cannot be empty.');

    if (errors.length > 0) {
        alert(`Please fix the following errors:\n\n${errors.join('\n')}`);
    } else {
        // Show a success message
        alert('Thank you for contacting us! We will get back to you soon.');

        // Clear the form
        form.reset();
    }
})