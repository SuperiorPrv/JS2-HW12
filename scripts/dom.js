import { PostData , PutData , DeleteData} from "./api.js";

const box = document.querySelector('.box');

const addNewUserButton = document.querySelector('.addNewUserButton');
const addUserDialog = document.querySelector('.addUserDialog');
const addUserForm = document.querySelector('.addUserForm');
const closeAddUserDialog = document.querySelector('.closeAddUserDialog');

const moreAboutDialog = document.querySelector('.moreAboutDialog');
const closeMoreAboutDialog = document.querySelector('.closeMoreAboutDialog');

const editButton = document.querySelector('.editButton');
const editUserDialog = document.querySelector('.editUserDialog');
const editUserForm = document.querySelector('.editUserForm');
const closeEditUserDialog = document.querySelector('.closeEditUserDialog');

const deleteButton = document.querySelector('.deleteButton');

const editButton1 = document.querySelector('.editButton1');
const editUserDialog1 = document.querySelector('.editUserDialog1');
const editUserForm1 = document.querySelector('.editUserForm1');
const closeEditUserDialog1 = document.querySelector('.closeEditUserDialog1');

const deleteButton1 = document.querySelector('.deleteButton1');

const infoButton = document.querySelector('.infoButton');
const infoDialog = document.querySelector('.infoDialog');
const closeInfoDialog = document.querySelector('.closeInfoDialog');

const searchInput = document.querySelector('.searchInput');
const selectStatus = document.querySelector('.selectStatus');
const selectLocation = document.querySelector('.selectLocation');

const infoBoxAvatar = document.querySelector('.infoBoxAvatar');
const infoBoxName = document.querySelector('.infoBoxName');
const infoBoxEmail = document.querySelector('.infoBoxEmail');
const infoBoxCity = document.querySelector('.infoBoxCity');
const infoBoxStatus = document.querySelector('.infoBoxStatus');
const infoBoxPhone = document.querySelector('.infoBoxPhone');

const body = document.querySelector('body');
const lightButton = document.querySelector('.lightButton');
const darkButton = document.querySelector('.darkButton');

let ind = 0;

lightButton.onclick = () => {
    body.classList.remove('dark');
}

darkButton.onclick = () => {
    body.classList.add('dark');
}

closeMoreAboutDialog.onclick=()=>{
    moreAboutDialog.close();
}

deleteButton1.onclick=()=>{
    DeleteData(ind);
    infoDialog.close();
    moreAboutDialog.close();
}

editButton1.onclick=()=>{
    editUserDialog1.showModal();
}

editUserForm1.onsubmit=(e)=>{
    e.preventDefault();
    if(editUserForm1["editAvatar"].value.trim()=='' || editUserForm1["editName"].value.trim()=='' || editUserForm1["editEmail"].value.trim()=='' || editUserForm1["editLocation"].value.trim()=='' || editUserForm1["editPhone"].value.trim()=='')
    {
        alert("Please fill all fields!")
    }
    else
    {
        let Obj = {
            name:editUserForm1['editName'].value,
            email:editUserForm1['editEmail'].value,
            location:editUserForm1['editLocation'].value,
            phone:editUserForm1['editPhone'].value,
            avatar:editUserForm1['editAvatar'].value,
            status:false
        }
        PutData(Obj,ind);
        editUserDialog1.close();
        infoDialog.close();
        moreAboutDialog.close();
    }
}
closeEditUserDialog1.onclick=()=>{
    editUserDialog1.close();
}

infoButton.onclick=()=>{
    infoDialog.showModal();
}

closeInfoDialog.onclick=()=>{
    infoDialog.close();
}

deleteButton.onclick = () => {
    DeleteData(ind);
    moreAboutDialog.close();
}

editButton.onclick=()=>{
    editUserDialog.showModal();
}

editUserForm.onsubmit=(e)=>{
    e.preventDefault();
    if(editUserForm["editAvatar"].value.trim()=='' || editUserForm["editName"].value.trim()=='' || editUserForm["editEmail"].value.trim()=='' || editUserForm["editLocation"].value.trim()=='' || editUserForm["editPhone"].value.trim()=='')
    {
        alert("Please fill all fields!")
    }
    else
    {
        let Obj = {
            name:editUserForm['editName'].value,
            email:editUserForm['editEmail'].value,
            location:editUserForm['editLocation'].value,
            phone:editUserForm['editPhone'].value,
            avatar:editUserForm['editAvatar'].value,
            status:false
        }
        PutData(Obj,ind);
        editUserDialog.close();
        moreAboutDialog.close();
    }
}
closeEditUserDialog.onclick=()=>{
    editUserDialog.close();
}

addNewUserButton.onclick=()=>{
    addUserDialog.showModal();
}

addUserForm.onsubmit=(e)=>{
    e.preventDefault();
    if(addUserForm['addAvatar'].value.trim()=='' || addUserForm['addName'].value.trim()=='' || addUserForm['addEmail'].value.trim()=='' || addUserForm['addLocation'].value.trim()=='' || addUserForm['addPhone'].value.trim()=='')
    {
        alert('Please fill all fields!');
    }
    else
    {
        let Obj = {
            name:addUserForm['addName'].value,
            email:addUserForm['addEmail'].value,
            location:addUserForm['addLocation'].value,
            phone:addUserForm['addPhone'].value,
            avatar:addUserForm['addAvatar'].value,
            status:false
        }
        PostData(Obj);
        addUserForm.reset();
        addUserDialog.close();
    }
}

closeAddUserDialog.onclick=()=>{
    addUserForm.reset();
    addUserDialog.close();
}

function Display(Data) {
    box.innerHTML = '';
    console.log(Data);
    Data.forEach((e,i)=>{
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.classList.add('td1');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');
        const td1_1 = document.createElement('img');
        td1_1.classList.add('td1_1');
        const td1_2 = document.createElement('div');
        td1_2.classList.add('td1_2');
        const td1_2_1 = document.createElement('h3');
        const td1_2_2 = document.createElement('h4');
        const td5_1 = document.createElement('button');
        td1_1.src = e.avatar;
        td1_2_1.innerHTML = e.name;
        td1_2_2.innerHTML = e.email;
        td2.innerHTML = e.location;
        td6.innerHTML = e.status?"Active":"Inactive";
        td3.innerHTML = e.phone;
        td5_1.innerHTML = '...';
        td5_1.classList.add('btn--');
        td5_1.onclick=()=>{
            ind = e.id;
            editUserForm['editName'].value=e.name,
            editUserForm['editEmail'].value=e.email,
            editUserForm['editLocation'].value=e.location,
            editUserForm['editPhone'].value=e.phone,
            editUserForm['editAvatar'].value=e.avatar
            editUserForm1['editName'].value=e.name,
            editUserForm1['editEmail'].value=e.email,
            editUserForm1['editLocation'].value=e.location,
            editUserForm1['editPhone'].value=e.phone,
            editUserForm1['editAvatar'].value=e.avatar
            infoBoxAvatar.src = e.avatar;
            infoBoxName.innerHTML = e.name;
            infoBoxEmail.innerHTML = e.email;
            infoBoxCity.innerHTML = e.location;
            infoBoxStatus.innerHTML = e.status? 'Active' : 'Inactive';
            infoBoxPhone.innerHTML = e.phone;
            moreAboutDialog.showModal();
        }
        td1_2.append(td1_2_1,td1_2_2);
        td1.append(td1_1,td1_2);
        td5.appendChild(td5_1);
        tr.append(td1,td2,td6,td3,td5);
        box.appendChild(tr);
    });
}

export { Display , searchInput, selectStatus, selectLocation};