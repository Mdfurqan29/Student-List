var names = document.getElementById("yourName")
var father = document.getElementById("fatherName")
var age = document.getElementById("age");
var SerialNo = document.getElementById("SerialNo")
var pushData = document.getElementById("pushingData")
var delInp =  document.getElementById("del")
var delBtn = document.getElementsByClassName("delBtn")
var dataOfObject = [
    {
        name: "Md Furqan Ahmed",
        fatherName: "Md Nisar Ahmed",
        age: "18",
        id: Math.floor(Math.random() * 100)
    }  ,
    {
        name: "Usman",
        fatherName: "Shahbudin",
        age: "19",
        id: Math.floor(Math.random() * 100)
    },
      {
        name: "Shahzaib",
        fatherName: "Rashid",
        age: "18",
        id: Math.floor(Math.random() * 100)
    }];
    
function dataBase(){
 for (var i = 0; i < dataOfObject.length; i++) {
    var a = i
        pushData.innerHTML += `<tr>
        <th >${i+1}</th>
        <th >${dataOfObject[i].name}</th>
        <th >${dataOfObject[i].fatherName}</th>
        <th>${dataOfObject[i].age}</th>
        <th>${dataOfObject[i].id}</th>
        <th><i class="fa fa-times" aria-hidden="true" onclick="Del(${a})"></th>
        </tr>`
    }
    SerialNo.innerHTML = dataOfObject.length;
}
dataBase()
function Add() {
    if(names.value === "" || fatherName.value === "" || age.value === ""){
        alert("please fill in the blanks")
    }else{
    var edit = {
        name: names.value,
        fatherName: father.value,
        age: age.value,
        id: Math.floor(Math.random() * 100)
    }
    dataOfObject.push(edit)
    names.value = ""
    fatherName.value = ""
    age.value = ""
    }
    pushData.innerHTML = ""
    dataBase()
}

function Del(n){
    dataOfObject.splice(n,1)
    pushData.innerHTML = ""
    dataBase()
}
