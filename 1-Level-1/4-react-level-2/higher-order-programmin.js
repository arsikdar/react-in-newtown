

// function f1() {
//     console.log("before :: LOG");
//     console.log("f1()");
//     console.log("after :: LOG");
// }

// function f2() {
//     console.log("before :: LOG");
//     console.log("f2()");
//     console.log("after :: LOG");
// }

// f1();
// f2();

/*
    // problems
    ==> code tangling / coupling
    ==> code scattering / diplication
*/



function f1() {
    console.log("f1()");
}

function f2() {
    console.log("f2()");
}


function logWrapper(f) {
    return function () {
        console.log("before :: LOG");
        f();
        console.log("after :: LOG");
    }
}


let f1WithLog = logWrapper(f1);
let f2WithLog = logWrapper(f2);

f1WithLog();
f2WithLog();

