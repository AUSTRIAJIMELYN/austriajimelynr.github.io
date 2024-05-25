const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("countLike1")

function clickLike1(){
   let totalLikes = parseInt(countLike1.value) + 1
   countLike1.textContent = totalLikes.toString()
}
