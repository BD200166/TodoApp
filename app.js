var todos = [];  //<- is an array

todos.push("Learn programming");  //.push adds another index/value to the array
todos.push("Drink enough water");
todos.push("Take a break");

/*
var todoListElement = document.getElementById("todoList");

for(var todo of todos){
    var listItem = document.createElement("li");
    listItem.textContent = todo;
    todoListElement.appendChild(listItem);
}
*/

function displayTodos(){  //purpose of this function is to add the new entries to the HTML document (without it would only add new entries to the console of the javascript file)
    var todoListElement = document.getElementById("todoList");  //document.getElementById reffers to the given id "todoList" from the HTML document

    todoListElement.innerHTML =  '';  //sets everything to 0 again so that there are no overlaps

    for(var todo of todos){
        var listItem = document.createElement("li");  //document.createElement creates -> "li" which are bulletpoints from the (in this case) unordered list of the HTML document
        listItem.textContent = todo;

        var removeBtn = document.createElement("button");  //creates a delete button (for each individual value, since we are in a for of loop)
        removeBtn.style.marginLeft = "10px";
        removeBtn.textContent = "x";
        removeBtn.onclick = () => {  //by using the arrow function you call the function removeTodo(todo)
            removeTodo(todo)
        }

        listItem.appendChild(removeBtn);  //ads a remove button
        todoListElement.appendChild(listItem);  //Adds directly an item/a value to the unordered list of the HTML document
}
}

function addTodo(){  //<- adds another dynamic value (whatever the user has written into the input field) to the todo list
    var newTodo = document.getElementById("todoInput").value;
    todos.push(newTodo);
    
    displayTodos();  //function displayTodos() must be called here, otherwise it will not be executed
}

function removeTodo(todoToRemove){  //pupose of this function is to remove a todo entry (connected to the removeBtn.onclick event)
    var index = todos.indexOf(todoToRemove);  //removes the correct selected index of the todos

    todos.splice(index, 1);  //.splice(index, 1) removes 1 index/value from the list
    displayTodos();  //the entire list is cleaned so that there are no overlaps
}

displayTodos();


/*
index.html comments

<html>
    <head>
        <title>Todo List</title>
    </head>

    <body>
        <h1>Todo App</h1>
        <h3>Your todos...</h3>
        <input type="text" id="todoInput" placeholder="New Todo">  //<input> creates an input field in the HTML document
        <button onclick="addTodo()">+</button>  //<button></button> creates a button in the HTML that can be clicked by the user | onclick="addTodo()" is responsible for the function itself
        <ul id="todoList"></ul>  //<ul></ul> | <- structure of an unordered list | id="todoList" is used here so that the javascript file has access to the HTML document
    </body>

    <footer>
        <script src="app.js"></script>  //footer contains the javascript(.js) refference for the HTML document 
    </footer>                           //<script src=""></script> | <- structure of the script refference
</html>

<style>  |<- CSS (Cascading Style Sheets) design of the HTML document
    li {
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>
*/