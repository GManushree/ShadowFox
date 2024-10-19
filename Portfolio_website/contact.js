document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      // Simulate form submission with a success message
      document.getElementById('formResponse').innerHTML = `Thank you, ${name}! Your message has been sent.`;
      document.getElementById('formResponse').style.color = 'green';
  
      // Clear the form
      document.getElementById('contactForm').reset();
    } else {
      document.getElementById('formResponse').innerHTML = 'Please fill out all fields.';
      document.getElementById('formResponse').style.color = 'red';
    }
  });
  