const ibox = document.querySelector(".inputf input");
const addBtn = document.querySelector(".inputf button");
const todolist = document.querySelector(".todo");
const deleteall = document.querySelector(".footer button");

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
    const pendingn = document.querySelector(".pending");
    pendingn.textContent = listArr.length;
    if(listArr.length >0){
        deleteall.classList.add("active");
    }else{
        deleteall.classList.remove("active");
    }


    let newLiTag = '';
    listArr.forEach((element,index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})";><i class ="fas fa-trash"></i></span></li>`;
    });
    todolist.innerHTML = newLiTag; //adding new li tag inside ui tag
    ibox.value = ""; //once task added leave the input field blank
}

//  delete task file 
function deleteTask(index){
    let getlocalStorage = localStorage.getItem("New Todo"); //getting local storage
    listArr = JSON.parse(getlocalStorage);
    listArr.splice(index,1); //remove the index
    // after remove the li again update the local storage
    localStorage.setItem("New Todo",JSON.stringify(listArr)); //transforming js object into a json string 
    showTasks(); 
}

// delete all button
deleteall.onclick = ()=>{
    listArr = [];
    // after all remove the li again update the local storage
    localStorage.setItem("New Todo",JSON.stringify(listArr)); //transforming js object into a json string 
    showTasks(); 
}
