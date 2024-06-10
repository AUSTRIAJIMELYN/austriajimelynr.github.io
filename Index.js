document.addEventListener('DOMContentLoaded', () => {
  const btnLike1 = document.getElementById('btnLike1');
  const btnDisLike1 = document.getElementById('btnDisLike1');
  const countLike1 = document.getElementById('countLike1');
  const countDisLike1 = document.getElementById('countDisLike1');
  const comment1 = document.getElementById('comment1');
  const submit1 = document.getElementById('submit1');
  const commentSection1 = document.getElementById('commentSection1');

  let likeCount1 = 0;
  let dislikeCount1 = 0;

  btnLike1.addEventListener('click', () => {
    likeCount1++;
    countLike1.textContent = likeCount1;
  });

  btnDisLike1.addEventListener('click', () => {
    dislikeCount1++;
    countDisLike1.textContent = dislikeCount1;
  });

  submit1.addEventListener('click', () => {
    const commentText = comment1.value.trim();
    if (commentText !== '') {
      const commentItem = document.createElement('div');
      commentItem.classList.add('mb-2');
      commentItem.textContent = commentText;
      commentSection1.appendChild(commentItem);
      comment1.value = ''; // Clear the comment input
    }
  });
});
