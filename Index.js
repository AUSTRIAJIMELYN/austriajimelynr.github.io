document.addEventListener("DOMContentLoaded", function() {
  const btnLike1 = document.getElementById("btnLike1");
  const countLike1 = document.getElementById("countLike1");

  btnLike1.addEventListener("click", function() {
    let totalLikes = parseInt(countLike1.textContent) + 1;
    countLike1.textContent = totalLikes.toString();
  });

  const btnLike2 = document.getElementById("btnLike2");
  const countLike2 = document.getElementById("countLike2");

  btnLike2.addEventListener("click", function() {
    let totalLikes = parseInt(countLike2.textContent) + 1;
    countLike2.textContent = totalLikes.toString();
  });

  const btnDisLike1 = document.getElementById("btnDisLike1");
  const countDisLike1 = document.getElementById("countDisLike1");

  btnDisLike1.addEventListener("click", function() {
    let totalDisLikes = parseInt(countDisLike1.textContent) + 1;
    countDisLike1.textContent = totalDisLikes.toString();
  });

  const btnDisLike2 = document.getElementById("btnDisLike2");
  const countDisLike2 = document.getElementById("countDisLike2");

  btnDisLike2.addEventListener("click", function() {
    let totalDisLikes = parseInt(countDisLike2.textContent) + 1;
    countDisLike2.textContent = totalDisLikes.toString();
  });

  const comment = document.getElementById("comment");
  const submit = document.getElementById("submit");
  const commentbox = document.getElementById("commentbox");

  submit.addEventListener("click", function() {
    commentbox.textContent += comment.value + "\n";
    comment.value = ""; // Clear the input field after submission
  });
});
