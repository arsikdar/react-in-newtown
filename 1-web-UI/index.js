console.log('-index.js-')


//----------------------------------------------
// using DOM API
//----------------------------------------------


let alertBox = document.querySelector('.alert')
let showBtn = document.querySelector('.btn-primary')
let hideBtn = document.querySelector('.btn-danger')
let infoBtn = document.querySelector('.btn-info')


infoBtn.addEventListener('click', e => {
    alertBox.innerHTML="start training"
})
showBtn.addEventListener('click', e => {
    alertBox.style.display = ''
})
hideBtn.addEventListener('click', e => {
    alertBox.style.display = 'none'
})