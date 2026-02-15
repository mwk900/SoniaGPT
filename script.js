const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.getElementById('formStatus');
    if (!form.checkValidity()) {
      status.textContent = 'Please complete all required fields before submitting.';
      status.className = 'md:col-span-2 text-sm text-red-600';
      return;
    }
    status.textContent = 'Thank you. Your inquiry has been received. An email confirmation workflow can be connected via Formspree or EmailJS.';
    status.className = 'md:col-span-2 text-sm text-green-700';
    form.reset();
  });
}
