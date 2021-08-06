const newHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#titleEntry').value.trim();
    const content = document.querySelector('#contentEntry').value.trim();
    const username = document.querySelector('#usernameEntry').value.trim();
    if (title && content && username) {
        const response = await fetch('/api/blogpost/newPost', {
            method: 'POST',
            body: JSON.stringify({ title, content, username }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            console.log(response.body);
            document.location. replace('/');
            alert('New Post Created!');
        }
    }else {
        alert('Must input title, content, and valid username!')
    }
};

document.querySelector('#newForm').addEventListener('click', newHandler);