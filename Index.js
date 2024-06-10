document.addEventListener('DOMContentLoaded', () => {
  const post1Comments = document.getElementById('comments1');
  const post2Comments = document.getElementById('comments2');

  const addComment = (container, comment) => {
    const div = document.createElement('div');
    div.classList.add('comment', 'mt-2');
    div.textContent = comment;
    container.appendChild(div);
  };

  const addCommentHandler = (container) => {
    const commentBox = container.querySelector('textarea');
    const postBtn = container.querySelector('button');

    postBtn.addEventListener('click', () => {
      const comment = commentBox.value.trim();
      if (comment !== '') {
        addComment(container.querySelector('.comment-section > div'), comment);
        commentBox.value = ''; // Clear the comment input
      }
    });
  };

  addCommentHandler(document.querySelector('.comment-box:nth-child(odd)'));
  addCommentHandler(document.querySelector('.comment-box:nth-child(even)'));
});
