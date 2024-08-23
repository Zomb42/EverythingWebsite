document.getElementById('openPdfButton').addEventListener('click', function() {
    // Replace 'path/to/yourfile.pdf' with the actual path to your PDF file
    window.open('resume.pdf', '_blank');
  });

function checkPassword() {
  const correctPassword = 'abc'; // Replace with your actual password
  const inputPassword = document.getElementById('password').value;
  
  if (inputPassword === correctPassword) {
      document.getElementById('login').style.display = 'none';
      document.getElementById('protected-content').style.display = 'block';
  } else {
      document.getElementById('error-message').style.display = 'block';
  }
}