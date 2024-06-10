document.addEventListener('DOMContentLoaded', () => {
  const btnLike1 = document.getElementById('btnLike1');
  const btnDisLike1 = document.getElementById('btnDisLike1');
  const countLike1 = document.getElementById('countLike1');
  const countDisLike1 = document.getElementById('countDisLike1');

  const btnLike2 = document.getElementById('btnLike2');
  const btnDisLike2 = document.getElementById('btnDisLike2');
  const countLike2 = document.getElementById('countLike2');
  const countDisLike2 = document.getElementById('countDisLike2');

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
});
