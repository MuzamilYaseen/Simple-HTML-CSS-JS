// Handle Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple form validation
    if (email && message) {
        alert("Thank you for reaching out! We will get back to you soon.");
        document.getElementById("contact-form").reset();  // Reset form after submission
    } else {
        alert("Please fill in both fields.");
    }
});
