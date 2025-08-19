document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.querySelector('.nav-toggle');
  var siteNav = document.getElementById('site-nav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert('Please complete all required fields.');
        return;
      }
      var mailto = 'mailto:info@softhubtechno.com'
        + '?subject=' + encodeURIComponent('Website inquiry from ' + name)
        + '&body=' + encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>');
      window.location.href = mailto;
      var success = document.getElementById('contact-success');
      if (success) success.textContent = 'Thanks! Your email client should now open to send us a message.';
    });
  }
});

