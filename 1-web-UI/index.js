console.log('-index.js-')


//----------------------------------------------
// using DOM API
//----------------------------------------------


let alertBox = document.querySelector('.alert')
let showBtn = document.querySelector('.btn-primary')
let hideBtn = document.querySelector('.btn-danger')
let infoBtn = document.querySelector('.btn-info')


infoBtn.addEventListener('click', e => {
    alertBox.innerHTML = "start training"
})
showBtn.addEventListener('click', e => {
    alertBox.style.display = ''
})
hideBtn.addEventListener('click', e => {
    alertBox.style.display = 'none'
})



//----------------------------------------------
// using DOM API  + XHR/Fetch API
//----------------------------------------------

let todosBtn = document.querySelector('.btn-dark');
todosBtn.addEventListener('click', e => {
    let apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    let promise = fetch(apiUrl)
    promise
        .then(response => response.json())
        .then(todos => {
            let liEles = todos.map(todo => {
                return `<li class="list-group-item ${todo.completed ? 'bg-success' : ''}">${todo.id} - ${todo.title} - ${todo.completed}</li>`
            });
            document.getElementById('todo-list').innerHTML = liEles.join(" ")
        })
})


//----------------------------------------------
// using DOM API  + Timer API
//----------------------------------------------

setInterval(() => {
    let timeEle = document.getElementById('time');
    timeEle.innerHTML = new Date().toLocaleTimeString()
}, 1000);



