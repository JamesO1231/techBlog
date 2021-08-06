const loginHeader = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#usernameLogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();

    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/');
            alert('Login Successful!');
        }else {
            alert('Please enter a valid username and password.');
        };
    };
};

document.querySelector('#login').addEventListener('click', loginHeader);