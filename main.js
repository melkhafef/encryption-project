const caesar =document.querySelector('#caesar');
const playFair =document.querySelector('#playFair');
const caesarKey =document.querySelector('#caesarKey');
const playFairKey =document.querySelector('#playFairKey');
const plainMessage =document.querySelector('#plain');
const encryptedMessage =document.querySelector('#encrypted');
const encrypteBtn =document.querySelector('#encrypte');
const decrypteBtn =document.querySelector('#decrypte');
const resetBtn =document.querySelector('#reset');
playFairKey.disabled = true;
caesarKey.disabled = true;
let encryptedMessageChars=[];
let plainMessageChars=[];
const alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
caesar.addEventListener('click',(e)=>{
    playFairKey.disabled = true;
    caesarKey.disabled = false;
})
playFair.addEventListener('click',(e)=>{
    playFairKey.disabled = false;
    caesarKey.disabled = true;
})
encrypteBtn.addEventListener('click',(e)=>{
    if(caesar.checked){
         if(caesarKey.value===""){
             alert("you must entre number caesar key from 1 to 25")
         }
         else if (isNaN(caesarKey.value)) {
             alert("you must entre number caesar key from 1 to 25")
         }
         else if (caesarKey.value < 1 || caesarKey.value>25){
             alert("you must entre number caesar key from 1 to 25")

         }
         else if(plainMessage.value===""){
             alert("you must entre plain Message ")
         }
         else{
             plainMessageChars = plainMessage.value.split('');
             for (plainMessageCharsIndex = 0; plainMessageCharsIndex < plainMessageChars.length; plainMessageCharsIndex++){
                 if (plainMessageChars[plainMessageCharsIndex] === " ") {
                     continue;
                 }
                 else if (isNaN(plainMessageChars[plainMessageCharsIndex])) {
                     for (alphabetIndex = 0; alphabetIndex < alphabet.length; alphabetIndex++) {
                         if (plainMessageChars[plainMessageCharsIndex].toLowerCase() === alphabet[alphabetIndex]) {
                             encryptedAlphabetIndex = (alphabetIndex + parseInt(caesarKey.value)) % 26;
                             encryptedMessageChars.push(alphabet[encryptedAlphabetIndex]);
                         }
                     }
                 }
                 else {
                     encryptedMessageChars.push(plainMessageChars[plainMessageCharsIndex]);
                 }
                
             }
             encryptedMessage.value = encryptedMessageChars.join("");
             encryptedMessageChars=[];
             plainMessageChars = [];
             plainMessage.value="";
         }
    }
    else if(playFair.checked){

    }
    else{
        alert("you must choose type of encryption")
    }
})
decrypteBtn.addEventListener('click',(e)=>{
    if(caesar.checked){
         if(caesarKey.value===""){
             alert("you must entre number caesar key from 1 to 25")
         }
         else if (isNaN(caesarKey.value)) {
             alert("you must entre number caesar key from 1 to 25")
         }
         else if (caesarKey.value < 1 || caesarKey.value>25){
             alert("you must entre number caesar key from 1 to 25")

         }
         else if(encryptedMessage.value===""){
             alert("you must entre encrypted message ")
         }
         else{
             encryptedMessageChars = encryptedMessage.value.split('');
             for (encryptedMessageCharsIndex = 0; encryptedMessageCharsIndex < encryptedMessageChars.length; encryptedMessageCharsIndex++) {
                 if (encryptedMessageChars[encryptedMessageChars] === " ") {
                     continue;
                 }
                 else if (isNaN(encryptedMessageChars[encryptedMessageCharsIndex])) {
                     for (alphabetIndex = 0; alphabetIndex < alphabet.length; alphabetIndex++) {
                         if (encryptedMessageChars[encryptedMessageCharsIndex].toLowerCase() === alphabet[alphabetIndex]) {
                             plainAlphabetIndex = (alphabetIndex - parseInt(caesarKey.value));
                             if (plainAlphabetIndex<0){
                                 plainAlphabetIndex+=26;
                             }
                             plainMessageChars.push(alphabet[plainAlphabetIndex]);
                         }
                     }        
                 }
                 else {
                     plainMessageChars.push(encryptedMessageChars[encryptedMessageCharsIndex]);
                 }
                
             }
             plainMessage.value = plainMessageChars.join("");
             plainMessageChars = [];
             encryptedMessageChars = [];
             encryptedMessage.value="";
         }
    }
    else if(playFair.checked){

    }
    else{
        alert("you must choose type of encryption")
    }
})
resetBtn.addEventListener('click', (e)=>{
    caesar.checked=false;
    playFair.checked=false;
    caesarKey.disabled=true;
    playFairKey.disabled = true;
    caesarKey.value="";
    playFairKey.value = "";
    plainMessage.value="";
    encryptedMessage.value="";
})
