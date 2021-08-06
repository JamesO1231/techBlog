const handleDeletePost = async (event) => {
    event.preventDefault();
    const id = document.querySelector('[data-postID]').getAttribute('data-postId');
    const response = await fetch(`/api/blogpost/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        document.location.replace('/');
        alert('Post successfully deleted!');
    }
};

document.querySelector('#deletPost').addEventListener('click', handleDeletePost);