//////////////////////////////////
// Selecting Elements
const id = (id) => document.getElementById(id)

// For inputs
const form = id('form');
const firstname = id('first__name');
const lastname = id('last__name');
const email = id('email');
const phoneNo = id('phoneno')
const gender = id('gender')
const dateofBirth = id('date');
const message = id('message');

const city = id('city');
const state = id('state');
const pincode = id('pincode');

// For validation Error
const firstnameError = id('firstname--error');
const lastnameError = id('lastname--error');
const emailError = id('email--error');
const phoneError = id('phone--error');
const dateError = id('date--error');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  return validateForm();
})

////////////////////////////////
// Validating characters entry in input
// adding eventlisteners 
firstname.addEventListener('keyup', (e) => { lettersOnly(e.target) });
lastname.addEventListener('keyup', (e) => { lettersOnly(e.target) });
city.addEventListener('keyup', (e) => { lettersOnly(e.target) });
state.addEventListener('keyup', (e) => { lettersOnly(e.target) });

pincode.addEventListener('keyup', (e) => { numbersOnly(e.target) });
phoneNo.addEventListener('keyup', (e) => { numbersOnly(e.target) })

function numbersOnly(input) {
  let regex = /[^0-9]/gi;
  input.value = input.value.replace(regex, "");
}

function lettersOnly(input) {
  let regex = /[^a-z^A-Z^' ']/gi;
  input.value = input.value.replace(regex, "");
}

///////////////////////////////////
// Validating date input
const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

dateofBirth.max = `${currentYear}-${currentMonth}-${currentDate + 1}`;

/////////////////////////////
// function for validating the form and giving error mssg on leaving the input blank before submission of form.


function validateForm() {

  let flag = true;

  if (firstname.value == '') {
    firstnameError.innerHTML = "Please fill this detail!";
    flag = false;
  }
  if (lastname.value == '') {
    lastnameError.innerHTML = "Please fill this detail!";
    flag = false;
  }
  if (email.value == '') {
    emailError.innerHTML = "Please fill this detail!";
    flag = false;
  }
  if (phoneNo.value == '') {
    phoneError.innerHTML = "Please fill this detail!";
    flag = false;
  }
  if (date.value == '') {
    dateError.innerHTML = "Please fill this detail!";
    flag = false;
  }
  if (message.value == '') {
    messageError.innerHTML = "Please fill this detail!";
    flag = false;
  }

  if (flag === false) {
    alert("Please Fill all the mandatory details before submitting the form!");
    return false;
  }
}