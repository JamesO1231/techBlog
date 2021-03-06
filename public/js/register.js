const registrationHandler = async (event) => {
    console.log(registrationHandler);
    event.preventDefault();
    const username = document.querySelector('#usernameEntry').value.trim();
    const email = document.querySelector('#emailEntry').value.trim();
    const password = document.querySelector('#passwordEntry').value.trim();
    if (username && email && password) {
        const response = await fetch('/api/user/registerUser', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/');
        }else {
            alert('Please enter a valid username, email and password');
        }
    }else {
        alert('Please enter a valid username, email and password');
    }
};

document.querySelector('#register').addEventListener('click', registrationHandler);