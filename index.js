//registration form

let sid=document.querySelector("#sid");
let name=document.querySelector("#name");
let email=document.querySelector("#mail");
let contact=document.querySelector("#contact");
let add=document.querySelector("#add");

//deletion form
let delsid=document.querySelector("#sid");
let delname=document.querySelector("#name");
let del=document.querySelector("del");

//update form
let updsid=document.querySelector("#contact");
let updname=document.querySelector("#contact");
let upd=document.querySelector("upd");


add.addEventListener("click",additem);
function additem(sid,name,email,contact){
    let id=document.createElement("h2 ");
    id.innerText=sid.value;
    let n=document.createElement("h3");
    n.innerHTML
    let mail_id=document.createElement("h4");
    let mob=document.createElement("h4");
    
}
class student{

    constructor(student_id,name,email,mail,cont){
        this.name=firstname+lastname;
        this.email=email;
        this.student_id=student_id;
        this.class_=class_;
        this.rollno=rollno;
    }
}