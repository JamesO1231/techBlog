const registrationHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#usernameEnetry').value.trim();
    const email = document.querySelector('#emailEnetry').value.trim();
    const password = document.querySelector('#passwordEnetry').value.trim();
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