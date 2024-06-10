const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("countLike1")

function clickLike1(){
   let totalLikes = parseInt(countLike1.value) + 1
   countLike1.textContent = totalLikes.toString()
}
btnLike1.addEventListener("click",clickLike1)

const btnLike2 = document.getElementById("btnLike2")
const countLike2 = document.getElementById("countLike2")

function clickLike2(){
   let totalLikes = parseInt(countLike2.value) + 1
   countLike2.textContent = totalLikes.toString()
}
btnLike2.addEventListener("click",clickLike2)

const btnDisLike1 = document.getElementById("btnDisLike1")
const countDisLike1 = document.getElementById("countDisLike1")

function clickDisLike1(){
  let totalDisLikes = parseInt(countDisLike1.value) + 1
  countDisLike1.textContent = totalDisLikes.toString()
}  
btnDisLike1.addEventListener("click",clickDisLike1)

const btnDisLike2 = document.getElementById("btnDisLike2")
const countDisLike2 = document.getElementById("countDisLike2")

function clickDisLike2(){
  let totalDisLikes = parseInt(countDisLike2.value) + 1
  countDisLike2.textContent = totalDisLikes.toString()
}  
btnDisLike2.addEventListener("click",clickDisLike2)

const comment = document.getElementById("comment")
const submit = document.getElementById("submit")
const commentbox = document.getElementById("commentbox")

function submitComment(){
  commentbox.textContent += comment.value.toString() + "\n"
}
submit.addEventListener("click",submitComment)
