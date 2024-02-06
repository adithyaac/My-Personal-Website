document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    this.classList.toggle('toggle-on');

});
function like(blogId) {

    let liked = localStorage.getItem(blogId + '-liked') === 'true';
    localStorage.setItem(blogId + '-liked', !liked ? 'true' : 'false');
    updateLikeButtonStyle(blogId, liked);
    updateLikeCountDisplay(blogId, liked);
}

function updateLikeButtonStyle(blogId, liked) {

    const button = document.querySelector(`button[data-blog = '${blogId}']`);
    if (liked) {
        button.classList.add('liked');
    } else {
        button.classList.remove('liked');
    }
}
function updateLikeCountDisplay(blogId, liked) {

    const likeDisplay = document.getElementById(`${blogId}-likes`);
    likeDisplay.textContent = liked ? '1' : '0';
}
function addComment() {
    const input = document.getElementById('commentInput');
    const comment = input.value.trim();
    if (comment) {

        const comments = JSON.parse(localStorage.getItem('comments') || '[]');
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
        input.value = '';
        displayComments(); 
    } else {
        alert('Please enter a comment.');
    }
}


function displayComments() {
    const commentsContainer = document.getElementById('comments');
    const comments = JSON.parse(localStorage.getItem('comments') || '[]');
    commentsContainer.innerHTML = comments.map(comment => `<p>${comment}</p>`).join('');
}


function clearLocalStorage() {
    localStorage.removeItem('comments');
    displayComments(); 
    alert('Comments cleared successfully!');
}


document.addEventListener('DOMContentLoaded', displayComments);
