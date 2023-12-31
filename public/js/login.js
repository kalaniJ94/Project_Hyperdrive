const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect login values
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  const signUpFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect login values
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

document.querySelector('#loggin-btn').addEventListener('click', loginFormHandler);
document.querySelector('#signup-btn').addEventListener('click', signUpFormHandler);