let username;

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("name").value ;
    document.getElementById("title").textContent = `HELLO ${username}`
}