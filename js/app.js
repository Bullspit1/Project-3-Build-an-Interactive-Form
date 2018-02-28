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

window.addEventListener("load", function(){
  nameInput.focus(); // After the page loads the name input is focused

/*-------------------Other Choise------------------*/
    otherOption.style.display = 'none';
title.addEventListener("change", function(){
  if(title.value === 'other'){
    otherOption.style.display = '';
  } else {
    otherOption.style.display = 'none';
  }
});


/*-------------------Shirt Choise------------------*/
for(let i = 0; i < shirtColor.children.length; i++){
  if(i < 1){
    shirtColor.options[i].style.display = '';
  } else {
    shirtColor.options[i].style.display = 'none';
  }

shirtDesign.addEventListener('change', function(e){
  // console.log(this.value);
    if(this.value === 'js puns'){
      // console.log(shirtColor);
      // console.log(shirtColor.options[1].value = 'Cornflower Blue (JS Puns shirt only)');
      shirtColor.value = 'cornflowerblue';
      if(i >= 1 && i <= 3){
        shirtColor.options[i].style.display = '';
      } else {
        shirtColor.options[i].style.display = 'none';
        // console.log(shirtColor.children[i] + " Second");
      }
      // console.log(shirtColor.children.length);
    }
     else if(this.value === 'heart js'){
      // console.log(shirtDesign.options);
      shirtColor.value = 'tomato';
      if(i > 3){
        shirtColor.options[i].style.display = '';
      } else {
        shirtColor.options[i].style.display = 'none';
      }
    }
    else {
      shirtColor.value = 'choosedesign';
     if(i < 1){
       shirtColor.options[i].style.display = '';
     } else {
       shirtColor.options[i].style.display = 'none';
     }
    }
  });
}


//TODO Dry Code this as well as rest of code to make more dev friendly
activities.addEventListener('change', function(e){
  let total = 0;
  // console.log(activitieCheckBox);
  // console.log(e.target.checked);
    // console.log(activitieCheckBox[i].cheZZZ);

    // for(let v = 1; v < activitieCheckBox.length - 1; v++){
    //   console.log(typeof Number(activitieCheckBox[v].firstElementChild.value));
    // }

    // for (var i = 1; i < activitieCheckBox.length - 1; i++) {
    //   total += Number(e.target.value);
    // }
    if(e.target.checked){
      // console.log('Checked');
      // console.log(e.target.value);
      // totalArr.push(Number(e.target.value));
      for(var i = 1; i < activitieCheckBox.length - 1; i++){
        // console.log(activitieCheckBox[i].firstElementChild.value);
        // console.log(activitieCheckBox[i].firstElementChild.checked);
        if(activitieCheckBox[i].firstElementChild.checked){
          total += parseInt(activitieCheckBox[i].firstElementChild.value);
        }
      }


      if(e.target.name === 'js-frameworks'){
        // console.log(activitieCheckBox[4]);
        activitieCheckBox[4].firstElementChild.disabled = true;
        activitieCheckBox[4].style.color = '#596D75';
      } else if (e.target.name === 'js-libs'){
        activitieCheckBox[5].firstElementChild.disabled = true;
        activitieCheckBox[5].style.color = '#596D75';
      } else if (e.target.name === 'express'){
        activitieCheckBox[2].firstElementChild.disabled = true;
        activitieCheckBox[2].style.color = '#596D75';
      } else if (e.target.name === 'node'){
        activitieCheckBox[3].firstElementChild.disabled = true;
        activitieCheckBox[3].style.color = '#596D75';
      }
    } else {
      // console.log('Unchecked');


      for(var i = 1; i < activitieCheckBox.length - 1; i++){
        // console.log(activitieCheckBox[i].firstElementChild.value);
        // console.log(activitieCheckBox[i].firstElementChild.checked);
        if(activitieCheckBox[i].firstElementChild.checked){
          total += parseInt(activitieCheckBox[i].firstElementChild.value);
        }
      }

      if(e.target.name === 'js-frameworks'){
        activitieCheckBox[4].firstElementChild.disabled = false;
        activitieCheckBox[4].style.color = '#000';
      } else if (e.target.name === 'js-libs'){
        activitieCheckBox[5].firstElementChild.disabled = false;
        activitieCheckBox[5].style.color = '#000';
      } else if (e.target.name === 'express'){
        activitieCheckBox[2].firstElementChild.disabled = false;
        activitieCheckBox[2].style.color = '#000';
      } else if (e.target.name === 'node'){
        activitieCheckBox[3].firstElementChild.disabled = false;
        activitieCheckBox[3].style.color = '#000';
      }
    //   for(let i = 1; i < activitieCheckBox.length; i++){
    //     // if(activitieCheckBox[i].firstElementChild){
    //     //
    //     // }
    //   activitieCheckBox[i].firstElementChild.disabled = false;
    //   activitieCheckBox[i].style.color = '#000';
    // }
  }

  activitieCheckBox[8].innerHTML = 'Total: ' + total;

  // console.log(total);
});

/*-------------------Payment Info Selection------------------*/
// console.log(payPal);
payment.value = 'credit card';
payPal.style.display = 'none';
bitCoin.style.display = 'none';

payment.addEventListener('change', function(e){
  // console.log(this.value);
  if(this.value === 'credit card'){
    creditCard.style.display = '';
    payPal.style.display = 'none';
    bitCoin.style.display = 'none';

  } else if(this.value === 'paypal') {
    creditCard.style.display = 'none';
    payPal.style.display = '';
    bitCoin.style.display = 'none';
  } else if(this.value === 'bitcoin') {
    creditCard.style.display = 'none';
    payPal.style.display = 'none';
    bitCoin.style.display = '';
  } else {
    creditCard.style.display = 'none';
    payPal.style.display = 'none';
    bitCoin.style.display = 'none';
  }
});

// console.log(payment.parentNode);
// console.log(payment.nextSibling.nextSibling);

// console.log(form);
form.addEventListener('submit', function(e){
  const emailValid = /[\w.]+@\w+\.(net|com|edu|ca)/;
  const numbsOnly = /[^0-9]+/;
  let isChecked = false;
  // sdittawork@gmail.com
  // s.dittawork@sympatico.ca
  e.preventDefault();
  // console.log(emailValid.test(emailInput.value.toLowerCase()));
  // console.log(e.target.lastElementChild);
    // console.log(nameInput.value === '');
    // console.log(emailInput.value.length - 1);
    // console.log(nameInput);
    if(nameInput.value === ''){
      // console.log(nameInput.previousSibling.previousSibling)
      nameInput.previousSibling.previousSibling.style.color = 'red';
      nameInput.style.border = '2px solid red';
    }

    // console.log(emailInput.value.indexOf('@') > 1);
    // console.log(emailInput.value.indexOf('.') <= emailInput.value.indexOf('@'));

    if(!emailValid.test(emailInput.value.toLowerCase())){
      emailInput.previousSibling.previousSibling.style.color = 'red';
      emailInput.style.border = '2px solid red';
    }

    if(shirtDesign.value === 'Select Theme'){
      shirtDesign.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.style.color = 'red';
    }

    for (var i = 1; i < activitieCheckBox.length - 1; i++) {
      // console.log(!activitieCheckBox[i].firstElementChild.checked || activitieCheckBox[i].firstElementChild.checked );
      if(activitieCheckBox[i].firstElementChild.checked){
        isChecked = true;
      }
      if(!isChecked){
        // alert('more then one checked');
        activitieCheckBox[0].style.color = 'red';
        break;
      }
    }

    if(payment.value === 'credit card'){
      // console.log(numbsOnly.test(cardNumber.value.toLowerCase()));
      // console.log(cardNumber.value.length);
      // console.log( cardNumber.value.legnth > 16 && cardNumber.value.length < 13);
      // console.log(cardNumber.value.length < 13 || cardNumber.value.length > 16 ||cardNumber.value.length === 0 || numbsOnly.test(cardNumber.value.toLowerCase()));
      if(cardNumber.value.length < 13 || cardNumber.value.length > 16 ||cardNumber.value.length === 0 || numbsOnly.test(cardNumber.value.toLowerCase())){
        cardNumber.previousSibling.previousSibling.style.color = 'red';
        cardNumber.style.border = '2px solid red';
      }
      if(zipCode.value.length > 5 || zipCode.value.length < 5 || zipCode.value.length === 0 || numbsOnly.test(zipCode.value.toLowerCase())){
        zipCode.previousSibling.previousSibling.style.color = 'red';
        zipCode.style.border = '2px solid red';
      }
      if(cvv.value.length > 3 || cvv.value.length < 3 || cvv.value.length === 0 || numbsOnly.test(zipCode.value.toLowerCase())){
        cvv.previousSibling.previousSibling.style.color = 'red';
        cvv.style.border = '2px solid red';
      }
    }

//TODO Add a final conditional statement to deturmine if the errors were corrected...
    // if() {
    //   nameInput.previousSibling.previousSibling.style.color = '#000';
    // }
});

});
