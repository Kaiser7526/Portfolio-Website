document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Log the data to ensure it is being captured correctly
        console.log('Form data:', data);

        // Send the form data using EmailJS
        emailjs.send('service_1shl7rx', 'template_9rd2lqp', data)
            .then(response => {
                console.log('EmailJS response:', response);
                alert('Message sent successfully!');
                form.reset();
            })
            .catch(error => {
                console.error('EmailJS error:', error);
                // Log the complete error object for debugging
                alert('Failed to send message. Please try again. Error: ' + JSON.stringify(error));
            });
    });
});
