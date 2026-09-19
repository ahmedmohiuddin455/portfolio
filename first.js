// Contact Form Submission Handler
document.getElementById('portfolioForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! Your message has been sent successfully.');
  this.reset();
});