const updateBlogPost = async (event) => {
    event.preventDefault();
    const id = document.querySelector('#disabledText').value.trim();
    const title = document.querySelector('#titleEntry').value.trim();
    const content = document.querySelector('#contentEntry').value.trim();
    const username = document.querySelector('#usernameEntry').value.trim();

    if (id && title && content && username) {
        const response = await fetch(`/api/user/${username}`)
        if (response.ok) {
            const userData = await response.json()
            const user_id = userData.id;
            const putResponse = await fetch(`/api/blogPost/${user_id}`, {
                method: 'PUT',
                body: JSON.stringify({ id, title, content, user_id }),
                headers: {'Content-Type': 'application/json'},
            });
            if (putResponse.ok) {
                document.location.replace(`/post/${user_id}`);
            };
        };
    }else { alert('Must enter all values plus valid username')};
};

document.querySelector('#editPost').addEventListener('click', updateBlogPost);