const nameInput = document.getElementById('name');
const emailInput = document.getElementById('mail');

const title = document.getElementById('title');
const otherOption = document.getElementById('other-title');

const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');

const activities = document.getElementsByClassName('activities')[0];
const activitieCheckBox = activities.children;

const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const payPal = creditCard.nextSibling.nextSibling;
const bitCoin = payPal.nextSibling.nextSibling;
const cardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');

const form = document.getElementsByTagName('form')[0];

//A named function that takes 4 arguments value, the conditon itself the var i from the for loop and the display property
function shirtInfo(firstDesign, condition, i, display){
  //This sets the value at the start
    shirtColor.value = firstDesign;
    //This sets the display property of the color-js-puns div to either show or hide
    shirtColor.parentNode.style.display = display;
    //If the condition in the argument show the shirt colors according to the design
    if(condition){
      shirtColor.options[i].style.display = '';
    } else {
      shirtColor.options[i].style.display = 'none';
    }
}

//A named function that takes 4 argumentsselectionName, checkboxNumber, disabled, textColor
function checkedAndUnchecked(selectionName, checkboxNumber, disabled, textColor){
  //if the selectionName which is e.target.name is js-framework disable the the checkbox that has a time that conflics with it
  //as well as changing the color of the text when it is disabled. Else if the other ones are selected they will disable the checkbox accordingly.
  if(selectionName === 'js-frameworks'){
    activitieCheckBox[checkboxNumber[0]].firstElementChild.disabled = disabled;
    activitieCheckBox[checkboxNumber[0]].style.color = textColor;
  } else if (selectionName === 'js-libs'){
    activitieCheckBox[checkboxNumber[1]].firstElementChild.disabled = disabled;
    activitieCheckBox[checkboxNumber[1]].style.color = textColor;
  } else if (selectionName === 'express'){
    activitieCheckBox[checkboxNumber[2]].firstElementChild.disabled = disabled;
    activitieCheckBox[checkboxNumber[2]].style.color = textColor;
  } else if (selectionName === 'node'){
    activitieCheckBox[checkboxNumber[3]].firstElementChild.disabled = disabled;
    activitieCheckBox[checkboxNumber[3]].style.color = textColor;
  }
}

//A named function that takes one argument as an array that holds the various displays
function paymentInfo(display){
  //depending on the array inside the argument it will show one and and hide the rest
  creditCard.style.display = display[0];
  payPal.style.display = display[1];
  bitCoin.style.display = display[2];
}

//A named function that takes 4 argument input, textColor, borderColor, error
function errorColor(input, textColor, borderColor, error){
  //this var errorMsg holds the input for each of the inputs in the page
  let errorMsg = input.previousSibling.previousSibling.innerHTML;
  //This sets the color of the text above the input to change to red if the input is not filled
  input.previousSibling.previousSibling.style.color = textColor;
  //This chanes the border color to red if the input is not filled
  input.style.border = borderColor;
//if the color is red
  if(textColor === '#d60505'){
    //if the innerHTML has the string of the argument error more then once or equals -1.
    if(errorMsg.indexOf(error) === -1){
      //a var called span which stores a span with the specific error string inside
      let span = '<span>' + error + '</span>';
      //the span string is then added inside the legends name
      input.previousSibling.previousSibling.insertAdjacentHTML('beforeend', span);
      //if the children of the legends text the error messages have a lenght greater than 1 remove it
      if(input.previousSibling.previousSibling.children.length > 1){
        input.previousSibling.previousSibling.firstElementChild.remove();
      }
    }
  }else{ // else if its not red
    // if the errorMsg has a bracket and its greated then -1 run the code inside remove it
    if(errorMsg.indexOf('(') > -1){
      input.previousSibling.previousSibling.lastElementChild.remove();
    }
  }
}
//a addEventListener that when the window(whole page) loads it runs whatever is inside the function
window.addEventListener("load", function(){
  nameInput.focus(); // After the page loads the name input is focused

/*-------------------Other Choise------------------*/
//If the other option in the job role is selected it will display thsi text input to enter the other job role
  otherOption.style.display = 'none';
  title.addEventListener("change", function(){
    if(title.value === 'other'){
      otherOption.style.display = '';
    } else {
      otherOption.style.display = 'none';
    }
  });

/*-------------------Shirt Choise------------------*/
//When the page loads loop through the children of shirtColor and with the information in the argument
//display it
  for(let i = 0; i < shirtColor.children.length; i++){
    shirtInfo('choosedesign', i < 1, i, 'none');
  }
//When the addEventListener of the shirtDesign selection is changed it runs through this function
shirtDesign.addEventListener('change', function(e){
  //A for loop that loops through the children of shirtColor
  for(let i = 0; i < shirtColor.children.length; i++){
    // if the tag it was changed to has the value of js puns run the custom shirtInfo function else it chooses between the other two
    if(this.value === 'js puns'){
      shirtInfo('cornflowerblue', i >= 1 && i <= 3, i, '');
    }
     else if(this.value === 'heart js'){
       shirtInfo('tomato', i > 3, i, '');
    }
    else {
      shirtInfo('choosedesign', i < 1, i, 'none');
    }
  }
  });

/*-------------------Registration For Activities------------------*/
//When the addEventListener of the activities fieldset is changed it runs through this function
  activities.addEventListener('change', function(e){
    // a var called total which stores the value of 0
    let total = 0;
    //a for loop that loops through the activitieCheckBox var (the children) and ignores the legend tag as well as the h3 tag
  for(var i = 1; i < activitieCheckBox.length - 1; i++){
    //if the targeted checkbox is checked run the code inside
      if(e.target.checked){
        //if as many of the inputs are checked add the value of the checkbox (parseInt changes the string value to a interger) and add it to the total
        if(activitieCheckBox[i].firstElementChild.checked){
          total += parseInt(activitieCheckBox[i].firstElementChild.value);
        }
        //runs the function checkedAndUnchecked which disables the chackbox based on conflicting times
        checkedAndUnchecked(e.target.name, [4,5,2,3], true, '#596D75');
      } else {
        //else if it is unchecked take that number away from the total and run the function checkedAndUnchecked
        if(activitieCheckBox[i].firstElementChild.checked){
          total += parseInt(activitieCheckBox[i].firstElementChild.value);
        }
        checkedAndUnchecked(e.target.name, [4,5,2,3], false, '#000');
    }
  }
    //This add the total to the page
    activitieCheckBox[8].innerHTML = 'Total: ' + total;
  });

/*-------------------Payment Info Selection------------------*/
//when the page is first loaded the value of the payment select tag is creditcard
  payment.value = 'credit card';
  //and runs the fun function paymentInfo showing the credit card information and hiding the other two
  paymentInfo(['', 'none', 'none']);
//When the addEventListener of the payment select is changed it runs through this function
  payment.addEventListener('change', function(e){
    //if the target value is the same as the value credit card run the code inside else run the other codes depending on if they were selected
    if(this.value === 'credit card'){
      paymentInfo(['', 'none', 'none']);
    } else if(this.value === 'paypal') {
      paymentInfo(['none', '', 'none']);
    } else if(this.value === 'bitcoin') {
      paymentInfo(['none', 'none', '']);
    } else {
      paymentInfo(['none', 'none', 'none']);
    }
  });


/*-------------------Form Validation------------------*/
//A var holding a regular expression for email varification
  const emailValid = /[\w.]+@\w+\.((?:\w{2-3}\.)?\w+)/;
  //When the addEventListener of the form is submitted it runs through this function
  form.addEventListener('submit', function(e){
    const numbsOnly = /[^0-9]+/; // regular expression for having numbers only
    let isChecked = false; // a var called isChecked used to verify if a checkbox has been clicked
    let count = 0;
      //if the nameInput value is nothing run the function errorColor
      if(nameInput.value === ''){
        errorColor(nameInput, '#d60505', '2px solid #d60505', ' (Provide Your Name)');
        e.preventDefault();
      } else {
        errorColor(nameInput, '#000', '2px solid #c1deeb', '');
      }
      //if the email does not compleat the regular expression rules it runs the function errorColor changing the color and adding error text else it goes back to noraml
      if(!emailValid.test(emailInput.value.toLowerCase())){
        e.preventDefault();
        errorColor(emailInput, '#d60505', '2px solid #d60505', ' (Provide Your Email)');
      } else {
        errorColor(emailInput, '#000', '2px solid #c1deeb', '');
      }
      //if the shirtDesign value is equal to Select Theme it will run the errorColor function
      if(shirtDesign.value === 'Select Theme'){
        errorColor(shirtDesign.parentNode.previousSibling.previousSibling, '#d60505', '', ' (Pick a Shirt)');
        e.preventDefault();
      } else {
        errorColor(shirtDesign.parentNode.previousSibling.previousSibling, '#184f68', '', '');
      }
      //If more then one checkbox is checked run the errorColor function showing no error else show an error and prevent the page from submitting.
        if(document.querySelectorAll('input[type="checkbox"]:checked').length >= 1){
          errorColor(activitieCheckBox[0].nextSibling.nextSibling, '#184f68', '', '');
        } else {
          errorColor(activitieCheckBox[0].nextSibling.nextSibling, '#d60505', '', ' (Select an Activity)');
          e.preventDefault();
        }
      //if the payment value is equal to credit card this runs a few conditional statements that determine wether or not the credit card information should shoot an error or return in a true manner
      if(payment.value === 'credit card'){
        if(cardNumber.value.length === 0 || numbsOnly.test(cardNumber.value.toLowerCase())){
            errorColor(cardNumber, '#d60505', '2px solid #d60505', ' (Please enter a credit card number)');
            e.preventDefault();
        }
        if(cardNumber.value.length < 13 || cardNumber.value.length > 16 || cardNumber.value.length === 14 || cardNumber.value.length === 15 || numbsOnly.test(cardNumber.value.toLowerCase())){
            errorColor(cardNumber, '#d60505', '2px solid #d60505', ' (Please enter a number that is between 13 and 16 digits long)');
            e.preventDefault();
        } else {
            errorColor(cardNumber, '#000', '2px solid #c1deeb', '');
        }
        if(zipCode.value.length > 5 || zipCode.value.length < 5 || zipCode.value.length === 0 || numbsOnly.test(zipCode.value.toLowerCase())){
          errorColor(zipCode, '#d60505', '2px solid #d60505', ' (Zip Code has to be 5 digits)');
          e.preventDefault();
        } else {
          errorColor(zipCode, '#000', '2px solid #c1deeb', '');
        }
        if(cvv.value.length > 3 || cvv.value.length < 3 || cvv.value.length === 0 || numbsOnly.test(zipCode.value.toLowerCase())){
          errorColor(cvv, '#d60505', '2px solid #d60505', ' (CVV has to be 3 digits)');
          e.preventDefault();
        } else {
          errorColor(cvv, '#000', '2px solid #c1deeb', '');
        }
      }
      if (payment.value === 'paypal'){

      }
      if (payment.value === 'bitcoin') {

      }
  });
  //This emailInput has an addEventListener of input which can change the input value of the email in real-time
  emailInput.addEventListener('input', function(e){
    //if the email dosnt have an @ symbole or the index of the emailInput value is equal to -1 run the function errorColor inside
    if(emailInput.value.indexOf('@') === -1){
      errorColor(emailInput, '#d60505', '2px solid #d60505', ' (Please Provide a @ symbol)');
      e.preventDefault();
    } else if(!emailValid.test(emailInput.value.toLowerCase())){ // else if dons't follow the regular expression rule run the next function errorCode
      errorColor(emailInput, '#d60505', '2px solid #d60505', ' (Provide Your Email)');
      e.preventDefault();
    } else {//finally if there is nothing else return the text and border of input to the normal color
      errorColor(emailInput, '#000', '2px solid #c1deeb', '');
    }
  });
});
