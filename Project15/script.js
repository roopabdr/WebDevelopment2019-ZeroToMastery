var button = document.getElementById("btn1");
var enter = document.getElementById("enter");
var list = document.getElementById("shoppinglist");
var items = document.querySelectorAll("li");
var deleteItems = document.getElementsByClassName("button-error");

function createListItem() {
    var container = document.createElement("div");
    var newItem = document.createElement("li");
    var newButton = createDelButton();
    newItem.appendChild(document.createTextNode(enter.value));
    container.appendChild(newItem);
    container.appendChild(newButton);
    list.appendChild(container);
    newItem.addEventListener("click",function(){
        itemClick(this);
    });
    newButton.addEventListener("click",function(){
        deleteBtnClick(this.parentElement);
    });
    enter.value="";
}

function createDelButton() {
    var newBtn = document.createElement("button");
    // newBtn.appendChild(document.createTextNode("Delete Item"));
    newBtn.classList.add("button-xsmall");
    newBtn.classList.add("button-error");
    newBtn.classList.add("pure-button");
    newBtn.classList.add("fa");
    newBtn.classList.add("fa-trash");
    return newBtn;
}

function buttonClick(){
    if (enter.value.length>0) {
        createListItem();
    }
}

function keyPress(event){
    if (enter.value.length>0 && event.keyCode === 13) {
        createListItem();
    }
}

function itemClick(item){
    // console.log("Worked",item);
    item.classList.toggle("done");
}

function deleteBtnClick(item){
    item.parentElement.removeChild(item);
}

button.addEventListener("click",buttonClick);
enter.addEventListener("keypress",keyPress);

items.forEach(function(item, index) {
    item.addEventListener("click",function(){
        itemClick(item);
    });
});

// deleteItems.forEach(function(deleteItem, index){
//     deleteItem.addEventListener("click",function(){
//         deleteBtnClick(deleteItem.parentElement);
//     });
//     console.log(deleteItem);
// });

for (var i=0; i<deleteItems.length; i++) {
    deleteItems[i].addEventListener("click",function(){
        deleteBtnClick(this.parentElement);
        // console.log(this);
    });
    // console.log(deleteItems[i]);
}