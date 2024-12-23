// Registration form selectors
let sid = document.querySelector("#sid");
let name1 = document.querySelector("#name1");
let email = document.querySelector("#mail");
let contact = document.querySelector("#contact");
let add_btn= document.querySelector("#add");

let db_list = document.querySelector("#db");
console.log(sid,email,name1,contact,add_btn);

function additem(){
    let id=sid.value;
    let id_h1=document.createElement("h2");
    id_h1.innerHTML=`Student ID: ${id}`;
    let name=name1.value;
    let name_h2=document.createElement("h3");
    name_h2.innerHTML=`Students Name : ${name}`;
    let e_mail=email.value;
    let mail_id=document.createElement("h3");
    mail_id.innerHTML=`Students E-mail : ${e_mail}`;
    let mob=contact.value;
    let no=document.createElement("h3");
    no.innerHTML=`Students contact no. : ${mob}`;

    let student_div=document.createElement("div");
    student_div.appendChild(id_h1);
    student_div.appendChild(name_h2);
    student_div.appendChild(mail_id);
    student_div.appendChild(no);
   
    document.querySelector("#db").append(student_div);
    console.log(student_div);
    

}

add_btn.addEventListener("click",additem);


