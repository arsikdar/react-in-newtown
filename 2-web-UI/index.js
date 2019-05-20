console.log('-index.js-')





//---------------------------------------------------------------------
// Plain JS
//---------------------------------------------------------------------

let indiaClockEle = document.getElementById("asia_kolkata");
let dubaiClockEle = document.getElementById("asia_dubai");
let americaClockEle = document.getElementById("america_newyork");

function Clock(props) {
    return `
        <div class="card">
            <p class="card-header">${props.timeZone}</p>
            <p class="card-body">
                <span class="badge badge-dark">${new Date().toLocaleTimeString('en-US', { timeZone: props.timeZone })}</span>
            </p>
        </div>
        `
}

// setInterval(() => {
//     indiaClockEle.innerHTML = Clock({ timeZone: 'Asia/Kolkata' })
//     dubaiClockEle.innerHTML = Clock({ timeZone: "Asia/Dubai" })
//     americaClockEle.innerHTML = Clock({ timeZone: 'America/New_york' })
// }, 1000);




//---------------------------------------------------------------------
// React JS
//---------------------------------------------------------------------

let indiaClockEleV2 = document.getElementById("asia_kolkata_v2");
let dubaiClockEleV2 = document.getElementById("asia_dubai_v2");
let americaClockEleV2 = document.getElementById("america_newyork_v2");


// function NewClock(props) {
//     let p1Ele = React.createElement('p', { key: 1, className: 'card-header' }, props.timeZone);
//     let spanEle = React.createElement('span', { className: 'badge badge-dark' }, new Date().toLocaleTimeString('en-US', { timeZone: props.timeZone }));
//     let p2Ele = React.createElement('p', { key: 2, className: 'card-body' }, spanEle);
//     let divEle = React.createElement('div', { className: 'card' }, [p1Ele, p2Ele]);
//     return divEle;
// }

// or

// JSX 
function NewClock(props) {
    return (
        <div className="card">
            <p className="card-header">{props.timeZone}</p>
            <p className="card-body">
                <span className="badge badge-dark">{new Date().toLocaleTimeString('en-US', { timeZone: props.timeZone })}</span>
            </p>
        </div>
    )
}


setInterval(() => {
    ReactDOM.render(NewClock({ timeZone: 'Asia/Kolkata' }), indiaClockEleV2)
    ReactDOM.render(NewClock({ timeZone: 'Asia/Dubai' }), dubaiClockEleV2)
    ReactDOM.render(NewClock({ timeZone: 'America/New_york' }), americaClockEleV2)
}, 1000);



