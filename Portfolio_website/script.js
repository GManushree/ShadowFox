const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);

  fetch('https://your-server-endpoint', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      successMessage.classList.remove('hidden');
      errorMessage.classList.add('hidden');
    } else {
      errorMessage.classList.remove('hidden');
      successMessage.classList.add('hidden');
    }
  })
  .catch(error => {
    errorMessage.classList.remove('hidden');
    successMessage.classList.add('hidden');
  });
});