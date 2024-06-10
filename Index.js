document.addEventListener('DOMContentLoaded', () => {
  const btnLike = document.getElementById('btnLike');
  const btnDisLike = document.getElementById('btnDisLike');
  const countLike = document.getElementById('countLike');
  const countDisLike = document.getElementById('countDisLike');
  const commentInput = document.getElementById('comment');
  const submitBtn = document.getElementById('submit');
  const commentBox = document.getElementById('commentbox');

  let likeCount = 0;
  let dislikeCount = 0;

  btnLike.addEventListener('click', () => {
    likeCount++;
    countLike.textContent = likeCount;
  });

  btnDisLike.addEventListener('click', () => {
    dislikeCount++;
    countDisLike.textContent = dislikeCount;
  });

  submitBtn.addEventListener('click', () => {
    const comment = commentInput.value;
    if (comment.trim()) {
      commentBox.value += comment + '\n';
      commentInput.value = '';
    }
  });
});
