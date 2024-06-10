document.addEventListener('DOMContentLoaded', () => {
  const btnLike1 = document.getElementById('btnLike1');
  const btnDisLike1 = document.getElementById('btnDisLike1');
  const countLike1 = document.getElementById('countLike1');
  const countDisLike1 = document.getElementById('countDisLike1');

  const btnLike2 = document.getElementById('btnLike2');
  const btnDisLike2 = document.getElementById('btnDisLike2');
  const countLike2 = document.getElementById('countLike2');
  const countDisLike2 = document.getElementById('countDisLike2');

  const commentInput = document.getElementById('comment');
  const submitBtn = document.getElementById('submit');
  const commentBox = document.getElementById('commentbox');

  let likeCount1 = 0;
  let dislikeCount1 = 0;
  let likeCount2 = 0;
  let dislikeCount2 = 0;

  btnLike1.addEventListener('click', () => {
    likeCount1++;
    countLike1.textContent = likeCount1;
  });

  btnDisLike1.addEventListener('click', () => {
    dislikeCount1++;
    countDisLike1.textContent = dislikeCount1;
  });

  btnLike2.addEventListener('click', () => {
    likeCount2++;
    countLike2.textContent = likeCount2;
  });

  btnDisLike2.addEventListener('click', () => {
    dislikeCount2++;
    countDisLike2.textContent = dislikeCount2;
  });

  submitBtn.addEventListener('click', () => {
    const comment = commentInput.value;
    if (comment.trim()) {
      commentBox.value += comment + '\n';
      commentInput.value = '';
    }
  });

  const postImg1 = document.getElementById('postImg1');
  const postImg2 = document.getElementById('postImg2');
  const modalImage = document.getElementById('modalImage');
  const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

  postImg1.addEventListener('click', () => {
    modalImage.src = postImg1.src;
    imageModal.show();
  });

  postImg2.addEventListener('click', () => {
    modalImage.src = postImg2.src;
    imageModal.show();
  });
});
