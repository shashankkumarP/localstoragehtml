var data = JSON.parse(localStorage.getItem("todoal")) || [];

data.map(function(el){
    
    var rowa = document.createElement("tr");
    var task = document.createElement("td");
    task.innerText = el.itemname;
    var quan = document.createElement("td");
    quan.innerText = el.itemquan;
    var pr = document.createElement("td");
    pr.innerText = el.itemprior;
    var tdr = document.createElement("td");
    var btn = document.createElement("button");
    btn.innerText = "complete";
    btn.addEventListener("click",function(){
        myfunc(el);
    })
    tdr.append(btn);
    rowa.append(task,quan,pr,tdr);
    document.querySelector("#body").append(rowa);
    
})
var data1 = JSON.parse(localStorage.getItem("complte")) || [];
function myfunc(e) {
    var task1 = e.itemname;
    var qty1 = e.itemquan;
    var prr = e.itemprior;
    var obj ={
        itemname:task1,
        itemquantity:qty1,
        itempriority:prr
    }
    data1.push(obj);
    localStorage.setItem("complte",JSON.stringify(data1));
}
