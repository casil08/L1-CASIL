const result = document.getElementById("result");
const sno = document.getElementById("sno");
const fname = document.getElementById("fname");
const sex= document.getElementById("sex");
const course = document.getElementById("course");
const add = document.getElementById("add");
const ylevel = document.getElementById("ylevel");
const contact = document.getElementById("contact");
const tablebody = document.querySelector("table tbody");

function CreateTD(text) {
    const td = document.createElement("td");

    td.innerHTML = text;

    return td;

}

function CreateTR() {
    return document.createElement("tr");
}

function Apply() {
    const tr = CreateTR();

    tr.appendChild(CreateTD(sno.value));
    tr.appendChild(CreateTD(fname.value));
    tr.appendChild(CreateTD(sex.value));
    tr.appendChild(CreateTD(course.value));
    tr.appendChild(CreateTD(add.value));
    tr.appendChild(CreateTD(ylevel.value));
    tr.appendChild(CreateTD(contact.value));

    tablebody.appendChild(tr);

    sno.value = "";
    fname.value = "";
    sex.value = "";
    course.value = "";
    add.value = "";
    ylevel.value = "";
    contact.value = "";
    
}
