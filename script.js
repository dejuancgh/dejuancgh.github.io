// Basic form submission example
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // For now, just log the form data to the console (replace with actual form handling logic)
    console.log("Form submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Provide feedback to the user (you could display a success message here)
    alert("Thank you for contacting us! We will get back to you shortly.");
});
h
