import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://palette-master-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const refInDB = ref(database, "palettes")


const coolNameEl = document.getElementById("cool-name-el")
const hexCodeEl = document.getElementById("hex-code-el")
const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

saveBtn.addEventListener("click", saveHexCode)
deleteBtn.addEventListener("dblclick", deleteHexCode)

function saveHexCode(){
    let coolNameValue = coolNameEl.value
    let hexCodeValue = hexCodeEl.value

    if(coolNameValue && hexCodeValue){
        renderHexCode(coolNameValue, hexCodeValue)
        console.log("Saving hex")
    } else if(!coolNameValue || !hexCodeValue){
        alert("Name or hex code is missing")
        console.log("Something is missing")
    }
}

function deleteHexCode(){
    alert("Are you sure you want to delete the hexcodes?")
    console.log("Deleting hex codes")
}

function renderHexCode(message, hexcode){
    let listOfHexCodes = ""
    for(let i = 0; i < hexcode.length; i++){
        listOfHexCodes += 
        `
        <li>
            <label>${message}</label>
            <a>${hexcode[i]}</a>
        </li>
        `
    }
    ulEl.innerHTML = listOfHexCodes
}