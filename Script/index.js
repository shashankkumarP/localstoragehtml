document.querySelector("form").addEventListener("submit",myfun);

var todol = JSON.parse(localStorage.getItem("todal")) || [];
function myfun(){
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var quantity = document.querySelector("#qty").value;
    var prior = document.querySelector("#priority").value;
    var obj ={itemname:name,itemquan:quantity,itemprior:prior};
    todol.push(obj);
    localStorage.setItem("todoal",JSON.stringify(todol))
}
