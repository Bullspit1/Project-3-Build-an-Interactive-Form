const nameInput = document.getElementById('name');

const title = document.getElementById('title');
const otherOption = document.getElementById('other-title');

const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');

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


//if checked add anount price to an array and add all together to get total


});
