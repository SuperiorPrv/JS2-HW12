import { Display , searchInput, selectStatus, selectLocation } from './dom.js';

const API = "https://66c2cf27d057009ee9bdf8d3.mockapi.io/todoapp/Back_2";

let atribute1='',atribute2='',atribute3='';

searchInput.oninput=(e)=>{
    if(e.target.value.trim()!='')
    {
        atribute1='?&name='+e.target.value.trim();
        GetData();
    }
    else
    {
        atribute1='';
        GetData();
    }
}

selectStatus.onchange=(e)=>{
    if(e.target.value!='All')
    {
        if(atribute1=='') atribute2='?&status='+e.target.value;
        else atribute2='&status='+e.target.value;
        GetData();
    }
    else
    {
        atribute2='';
        GetData();
    }
}

selectLocation.onchange=(e)=>{
    if(e.target.value!='All')
    {
        if(atribute1=='' && atribute2=='') atribute3='?&location='+e.target.value;
        else atribute3='&location='+e.target.value;
        GetData();
    }
    else
    {
        atribute3='';
        GetData();
    }
}

async function DeleteData(id) {
    try {
        const response = await axios.delete(`${API}/${id}`);
        GetData();
    } catch (error) {
        console.error(error);
        
    }
}

async function PutData(Obj,id) {
    try {
        const response = await axios.put(`${API}/${id}`,Obj);
        GetData();
    } catch (error) {
        console.error(error);
        
    }
}

async function PostData(Obj) {
    try {
        const response = await axios.post(API,Obj);
        GetData();
    } catch (error) {
        console.error(error);
        
    }
}

async function GetData() {
    try {
        const {data} = await axios.get(API+atribute1+atribute2+atribute3);
        Display(data);
    } catch (error) {
        console.error(error);
        Display([]);
    }
}

export { GetData, PostData, PutData, DeleteData };