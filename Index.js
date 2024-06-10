document.addEventListener('DOMContentLoaded', () => {
  const btnLike1 = document.getElementById('btnLike1');
  const btnDisLike1 = document.getElementById('btnDisLike1');
  const countLike1 = document.getElementById('countLike1');
  const countDisLike1 = document.getElementById('countDisLike1');
  const comment1 = document.getElementById('comment1');
  const submit1 = document.getElementById('submit1');

  const btnLike2 = document.getElementById('btnLike2');
  const btnDisLike2 = document.getElementById('btnDisLike2');
  const countLike2 = document.getElementById('countLike2');
  const countDisLike2 = document.getElementById('countDisLike2');
  const comment2 = document.getElementById('comment2');
  const submit2 = document.getElementById('submit2');

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

  submit1.addEventListener('click', () => {
    const comment = comment1.value.trim();
    if (comment !== '') {
      // You can handle posting the comment here
      console.log('Comment 1:', comment);
      comment1.value = ''; // Clear the comment input
    }
  });

  btnLike2.addEventListener('click', () => {
    likeCount2++;
    countLike2.textContent = likeCount2;
  });

  btnDisLike2.addEventListener('click', () => {
    dislikeCount2++;
    countDisLike2.textContent = dislikeCount2;
  });

  submit2.addEventListener('click', () => {
    const comment = comment2.value.trim();
    if (comment !== '') {
      console.log('Comment 2:', comment);
      comment2.value = ''; 
    }
  });
});
      
