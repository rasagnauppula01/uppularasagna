const signInButton = document.querySelector('.showcase-top .btn-rounded');
const emailInput = document.getElementById('mail');
signInButton.addEventListener('click', () => {
    const email = emailInput.value;
    // Perform validation on the email address
    if (isValidEmail(email)) {
        // Display a success message or redirect to a new page
        displaySuccessMessage(email);
    } else {
        alert('Please enter a valid email address.');
    }
});
function isValidEmail(email) {
    // Use a regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// Function to display a success message
function displaySuccessMessage(email) {
    const successMessages = [
        "Successfully signed in!",
        "Thanks for signing up!"
    ];
    const randomIndex = Math.floor(Math.random() * successMessages.length);
    const randomSuccessMessage = successMessages[randomIndex];
    alert(`${randomSuccessMessage}`);
}