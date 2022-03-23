var data2 = JSON.parse(localStorage.getItem("complte"));
console.log(data2);

data2.map(function(e,i){
    var tr1 = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = e.itemname;
    var td2 = document.createElement("td");
    td2.innerText = e.itemquantity;
    var td3 = document.createElement("td");
    td3.innerText = e.itempriority;
    tr1.append(td1,td2,td3);
    document.querySelector("#body").append(tr1);
})