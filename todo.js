const ibox = document.querySelector(".inputf input");
const addBtn = document.querySelector(".inputf button");
const todolist = document.querySelector(".todo");

ibox.onkeyup = () => {
    let userData = ibox.value; // getting user entered value
    if (userData.trim() != 0) {  // user values arenot only sapce 
        addBtn.classList.add("active"); //active the add button
    } else {
        addBtn.classList.remove("active"); //unactive the add button
    }
}
showTasks(); //calling fnuction
addBtn.onclick = () => {
    let userData = ibox.value ; // getting user data
    let getlocalStorage = localStorage.getItem("New Todo"); //getting local storage
    if(getlocalStorage == null){
        listArr = []; //creating blank arr
    }else{
        listArr = JSON.parse(getlocalStorage); //transforming json string into js object
    }

    listArr.push(userData); //adding user data
    localStorage.setItem("New Todo",JSON.stringify(listArr)); //transforming js object into a json string 
    showTasks(); //calling fnuction
}

//ffunction to add task list inside ul
function showTasks(){
    let getlocalStorage = localStorage.getItem("New Todo"); //getting local storage
    if(getlocalStorage == null){
        listArr = []; //creating blank arr
    }else{
        listArr = JSON.parse(getlocalStorage); //transforming json string into js object
    }
    let newLiTag = '';
    listArr.forEach((element,index) => {
        newLiTag += `<li> ${element} <span><i class ="fas fa-trash"></i></span></li>`;
    });
    todolist.innerHTML = newLiTag; //adding new li tag inside ui tag
    ibox.value = ""; //once task added leave the input field blank
}
