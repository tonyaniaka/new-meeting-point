// Optional JS for interactivity (if needed in the future)
// Form Submission Handling
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get the form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Validation check
        if (name && email && message) {
            alert(`Thank you, ${name}! We have received your message.\n\nWe will get back to you at ${email} shortly.`);
            
            // Clear form fields after submission
            form.reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
});
