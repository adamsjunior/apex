
document.addEventListener('DOMContentLoaded', function () {
  const generateCodeBtn = document.getElementById('generate-code');
  const enteredCodeInput = document.getElementById('code');
  const loginBtn = document.getElementById('login-btn');
  const clearBtn = document.getElementById('clear-btn');

  let generatedCode = '';

  generateCodeBtn.addEventListener('click', generateCode);
  loginBtn.addEventListener('click', login);
  clearBtn.addEventListener('click', clearPage);

  function generateCode() {
    // Generate a random 6-digit code
    generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    document.getElementById('generated-code').value = generatedCode;
  }

  function login(event) {
    event.preventDefault(); // Prevent form submission
  
    const enteredCode = enteredCodeInput.value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (enteredCode === generatedCode) {
      if (username && password && generatedCode) { 
        alert('Login Successful');
        // Redirect to the home page or perform other actions
        // window.location.href = 'home.html';
      } else {
        alert('Login Failed. Please enter both username and password.');
      }
    } else {
      alert('Login Failed. Incorrect Code');
    }
  }
  

  function clearPage() {
    generatedCode = '';
    document.getElementById('generated-code').value = '';
    enteredCodeInput.value = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  }
});
