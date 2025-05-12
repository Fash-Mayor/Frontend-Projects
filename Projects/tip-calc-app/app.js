const total_bill = document.getElementById("bill-total");
const total_people = document.getElementById("total-people");
const total_bill_err = document.querySelector(".total-bill-err");
const total_person_err = document.querySelector(".total-person-err");
const amount = document.querySelector('.amount');
const tip = document.querySelector('.tip');

let total_per_person;
let tip_per_person; 

const isValid = false;//% multiplying value///all tips working///clearing page///responsiveness

//clearing errors
const clear_error = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => input.classList.remove("invalid"));
    const errors = document.querySelectorAll(".error");
    errors.forEach((error) => (error.textContent = ""));
};

//clearing values
document.querySelector(".reset").addEventListener("click", () =>{
    total_bill.value = '';
    total_people.value = '';
    tip.textContent = '0.00';
    amount.textContent = '0.00';
})

//validating inputs
const validate = () => {
    //Bill
    if (total_bill.value.trim() == "") {
        total_bill_err.textContent = "This field is required";
        total_bill.classList.add("invalid");
        isValid = true;
    } else if (isNaN(total_bill.value.trim())) {
        total_bill_err.textContent = "Input must be a number";
        total_bill.classList.add("invalid");
        isValid = true;
    }

    //Number of People
    if (total_people.value.trim() == "") {
        total_person_err.textContent = "This field is required";
        total_people.classList.add("invalid");
        isValid = true;
    } else if (isNaN(total_people.value.trim())) {
        total_person_err.textContent = "Input must be a number";
        total_people.classList.add("invalid");
        isValid = true;
    } else if (total_people.value.trim() == "0") {
        total_person_err.textContent = "Can't be 0 ";
        total_people.classList.add("invalid");
        isValid = true;
    }
};

//Tip percent
//5%
document.querySelector(".btn1").addEventListener("click", () => {
    clear_error();
    validate();
    if(!isValid){
        tip_per_person = (total_bill.value.trim() / total_people.value.trim()) * 0.05;
        total_per_person = total_bill.value.trim() / tip_per_person;

        tip.textContent = tip_per_person.toFixed(2);
        amount.textContent = total_per_person.toFixed(2);
    }
});

//10%
document.querySelector(".btn2").addEventListener("click", () => {
    clear_error();
    validate();
    if(!isValid){
        tip_per_person = (total_bill.value.trim() / total_people.value.trim()) * 0.10;
        total_per_person = total_bill.value.trim() / tip_per_person;

        tip.textContent = tip_per_person.toFixed(2);
        amount.textContent = total_per_person.toFixed(2);
    }
});

//15%
document.querySelector(".btn3").addEventListener("click", () => {
    clear_error();
    validate();
    if(!isValid){
        tip_per_person = (total_bill.value.trim() / total_people.value.trim()) * 0.15;
        total_per_person = total_bill.value.trim() / tip_per_person;

        tip.textContent = tip_per_person.toFixed(2);
        amount.textContent = total_per_person.toFixed(2);
    }
});

//25%
document.querySelector(".btn4").addEventListener("click", () => {
    clear_error();
    validate();
    if(!isValid){
        tip_per_person = (total_bill.value.trim() / total_people.value.trim()) * 0.25;
        total_per_person = total_bill.value.trim() / tip_per_person;

        tip.textContent = tip_per_person.toFixed(2);
        amount.textContent = total_per_person.toFixed(2);
    }
});

//50%
document.querySelector(".btn5").addEventListener("click", () => {
    clear_error();
    validate();
    if(!isValid){
        tip_per_person = (total_bill.value.trim() / total_people.value.trim()) * 0.50;
        total_per_person = total_bill.value.trim() / tip_per_person;

        tip.textContent = tip_per_person.toFixed(2);
        amount.textContent = total_per_person.toFixed(2);
    }
});


