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




//----------------------------------------------
// web component's spec APIs
//---------------------------------------------



// Template 
const template = document.createElement('template');
template.innerHTML = `
            <style>
                .alert{
                    padding:20px;
                    margin:5px;
                }
                .alert-info{
                    background-color:#DEF;
                }
            </style>
            <div class="alert alert-info">
                <button class="btn btn-success">+</button>
                <span class="badge badge-dark">0</span>
                <button class="btn btn-danger">-</button>
            </div>
        `


// Web compoennnt
class XCounter extends HTMLElement {

    static get observedAttributes() {
        return ['value']
    }

    constructor() {
        super()

        this._value = 0;

        this.root = this.attachShadow({ mode: 'closed' }) // shadow DOM

        this.root.appendChild(template.content.cloneNode(true))

        this.valueElement = this.root.querySelector('span');
        this.incrementBtn = this.root.querySelectorAll('button')[0];
        this.decrementBtn = this.root.querySelectorAll('button')[1];

        this.incrementBtn.addEventListener('click', e => {
            this._value++
            this.value = this._value;
        })
        this.decrementBtn.addEventListener('click', e => {
            this._value--
            this.value = this._value;
        })
    }

    set value(value) {
        this.valueElement.innerText = value;
        this.dispatchEvent(new CustomEvent('change', { detail: this._value }))
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === 'value') {
            this._value = Number.parseInt(newValue, 10)
            this.valueElement.innerText = this._value;
        }
    }
}


customElements.define('x-counter', XCounter)




var xCounter = document.querySelector('x-counter');
xCounter.addEventListener('change', e => {
    console.log(e.detail);
})