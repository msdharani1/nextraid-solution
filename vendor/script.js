// First, make sure to include the EmailJS library in your HTML file
// <script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>

// Initialize EmailJS with your user ID
(function(){
    emailjs.init("service_xlrxkm4"); // Replace with your actual EmailJS user ID
})();

// Add an event listener to the form
document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Prepare the email parameters
    var templateParams = {
        from_name: name + ' ' + surname,
        from_email: email,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send('service_xlrxkm4', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
            document.getElementById('contact').reset(); // Clear the form
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send the message. Please try again later.');
        });
});