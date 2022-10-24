import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('submit', onSubmit);
formRef.addEventListener('input', throttle(onInput, 500));


function getLocalStorageData(){
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

function onSubmit(e){
    // const dataLocal = getLocalStorageData();
    const email = e.target.email.value;
    const message = e.target.message.value
    e.preventDefault();
    e.target.reset();
    // console.log(dataLocal);
    console.log({email, message});
    localStorage.removeItem(STORAGE_KEY);
  
}
function onInput(e){
    const dataLocal = getLocalStorageData();
    dataLocal[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLocal));
}
