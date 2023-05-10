const myHeading = document.getElementById('title');
const myNotes = document.getElementById('notes');
const t0 = document.getElementById('t0');
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');

const div0 = document.getElementById('d0');
const div1 = document.getElementById('d1');
const div2 = document.getElementById('d2');
const div3 = document.getElementById('d3');
const div4 = document.getElementById('d4');

let ts0,ts1,ts2,ts3,ts4;
let students;
let string;
let non;

const totalItems = localStorage.length;
console.log(`Total number of items in LocalStorage: ${totalItems}`);

let no=totalItems/2;



            //upload 

function upload(no){
    const myText = myHeading.textContent;
    const myNote = myNotes.textContent;

    // students = [myText,myNote];
    // string = JSON.stringify(students)
    newTitle="Title"+no;
    newNote="Note"+no;

    localStorage.setItem(newTitle, myText);
    localStorage.setItem(newNote, myNote);

    ts1 = localStorage.getItem(newTitle);
    t1.textContent=ts1;
    // open();
    location.reload();
    




    
}



            //get 

function get(non){
    var getNewTitle="Title"+non;
    var getNewNote="Note"+non;
    const myValueT = localStorage.getItem(getNewTitle);
    const myValueN = localStorage.getItem(getNewNote);
    myHeading.textContent=myValueT;
    myNotes.textContent=myValueN;
}


            //delete

function del(non){
    var getNewTitle="Title"+non;
    var getNewNote="Note"+non;
    localStorage.removeItem(getNewTitle);
    localStorage.removeItem(getNewNote);
    location.reload();



            // open();
}



            //make div visible

function open(){

    if("Title0" in localStorage)
    {
        ts0 = localStorage.getItem("Title0");
        div0.style.visibility="visible";
        t0.textContent=ts0;
    }
    if("Title1" in localStorage)
    {
        ts1 = localStorage.getItem("Title1");
        div1.style.visibility="visible";
        t1.textContent=ts1;
    }
    if("Title2" in localStorage)
    {
        ts2 = localStorage.getItem("Title2");
        div2.style.visibility="visible";
        t2.textContent=ts2;
    }
    if("Title3" in localStorage)
    {
        ts3 = localStorage.getItem("Title3");
        div3.style.visibility="visible";
        t3.textContent=ts3;
    }
    if("Title4" in localStorage)
    {
        ts4 = localStorage.getItem("Title4");
        div4.style.visibility="visible";
        t4.textContent=ts4;
    }

    console.log(ts3);
}open();