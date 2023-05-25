// // // document.getElementById('generate-code').addEventListener('click', function() {
// // //     var code = generateCode();
// // //     document.getElementById('generated-code').textContent = code;
// // //   });
  
// // //   function generateCode() {
// // //     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// // //     var codeLength = 8;
// // //     var code = '';
  
// // //     for (let index = 0; index < codeLength; index++) {
// // //       var randomIndex = Math.floor(Math.random() * characters.length);
// // //       randomIndex += characters[randomIndex];
// // //     }
  
// // //     return code;
// // //   }
  
// // //   document.getElementById('login-form').addEventListener('submit', function(e) {
// // //     e.preventDefault();
// // //     var username = document.getElementById('username').value;
// // //     var password = document.getElementById('password').value;
  
// // //     // Perform login validation here...
// // //     // You can compare the username and password with your stored data or use an API call for authentication.
  
// // //     // For demonstration purposes, let's just log the entered username and password
// // //     console.log('Username:', username);
// // //     console.log('Password:', password);
// // //   });
  

// // // Generate a random code
// // function generateCode() {
// //     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// //     let code = '';
// //     for (let i = 0; i < 6; i++) {
// //       code += characters.charAt(Math.floor(Math.random() * characters.length));
// //     }
// //     return code;
// //   }
  
// //   // Handle code generation button click
// //   const generateCodeBtn = document.getElementById('generate-code');
// //   const generatedCodeInput = document.getElementById('generated-code');
// //   generateCodeBtn.addEventListener('click', function() {
// //     const code = generateCode();
// //     generatedCodeInput.value = code;
// //   });

// //   const clearBtn = document.getElementById('clear');
// //   clearBtn.addEventListener('click', function() {
// //   generatedCodeInput.value = '';
// // });

// //   
    
// //     const username = document.getElementById('username').value;
// //     const password = document.getElementById('password').value;
// //     const code = document.getElementById('code').value;
// //     const generatedCode = generatedCodeInput.value;
    
// //     // if (username && password && code === generatedCode) {
// //     //   // Perform login process
// //     //   alert('Login successful!');
// //     //   // Redirect to another page or perform necessary actions
// //     // } else {
// //     //   alert('Invalid login credentials or code!');
// //     // }
// //   });
  
// // const generateCodeBtn = document.getElementById('generate-code');
// // const enteredCodeInput = document.getElementById('entered-code');
// // const loginBtn = document.getElementById('login');
// // const clearBtn = document.getElementById('clear');

// // let generatedCode = '';

// // generateCodeBtn.addEventListener('click', generateCode);
// // loginBtn.addEventListener('click', login);

// // clearBtn.addEventListener('click', clearPage);

// // function generateCode() {
// //   // Generate a random 6-digit code
// //   generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
// //   document.getElementById('generated-code').value = generatedCode;
// // }

// // function login() {
// //   const enteredCode = enteredCodeInput.value;
// // if (enteredCode === generatedCode) {
// //   login.textContent = 'Login Successful';
// //   login.style.color = 'green';
// // } else {
// //   login.textContent = 'Login Failed. Incorrect Code';
// //   login.style.color = 'red';
// // }
// //  }

// // function clearPage() {
// //   generatedCode = '';
// //   document.getElementById('generated-code').value = '';
// //   enteredCodeInput.value = '';
// // }
// // document.getElementById("login-form").addEventListener("submit", function(event) {
// //     event.preventDefault(); // Prevent form submission
  
// //     // Get the entered username and password
// //     var username = document.getElementById("username").value;
// //     var password = document.getElementById("password").value;
  
// //     // Check if the username and password are valid (you can customize this validation)
// //     if (username === "your_username" && password === "your_password") {
// //       // Redirect to the home page
// //       window.location.href = "home.html";
// //     } else {
// //       // Show an error message or perform other actions for invalid login
// //       alert("Invalid username or password");
// //     }
// //   });



// const generateCodeBtn = document.getElementById('generate-code');
// const enteredCodeInput = document.getElementById('entered-code');
// const loginBtn = document.getElementById('Login');
// const clearBtn = document.getElementById('Clear');

// let generatedCode = '';

// generateCodeBtn.addEventListener('click', generateCode);
// loginBtn.addEventListener('click', login);
// clearBtn.addEventListener('click', clearPage);

// function generateCode() {
//   // Generate a random 6-digit code
//   generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
//   document.getElementById('generated-code').value = generatedCode;
// }

// function login() {
//   const enteredCode = enteredCodeInput.value;
//   if (enteredCode === generatedCode) {
  
  
// }

// function clearPage() {
//   generatedCode = '';
//   document.getElementById('generated-code').value = '';
//   enteredCodeInput.value = '';
// }
