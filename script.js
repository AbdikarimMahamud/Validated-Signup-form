const form = document.getElementById('form');
const email = document.getElementById('email');
const pw = document.getElementById('pw');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let good = true;
  const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!pattern.test(email.value)) {
    document.getElementById('emailErr').textContent = 'Enter a valid email.';
    email.classList.add('bad');
    good = false;
  } else {
    document.getElementById('emailErr').textContent = '';
    email.classList.remove('bad');
  }
  if (pw.value.length < 8) {
    document.getElementById('pwErr').textContent = 'At least 8 characters.';
    pw.classList.add('bad');
    good = false;
  } else {
    document.getElementById('pwErr').textContent = '';
    pw.classList.remove('bad');
  }
  document.getElementById('ok').textContent = good ? 'Account created!' : '';
});
