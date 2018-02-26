const nameInput = document.getElementById('name');

const title = document.getElementById('title');
const otherOption = document.getElementById('other-title');

const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');

const activities = document.getElementsByClassName('activities')[0];

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



activities.addEventListener('change', function(e){
  // console.log(e.target);
  const activitieCheckBox = activities.children;
  // console.log(activitieCheckBox);
  // console.log(e.target.checked);
    // console.log(activitieCheckBox[i].cheZZZ);
    if(e.target.checked){
      console.log('Checked');
      // if(){
      //
      // }
      // console.log(e.target.name);
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
      console.log('Unchecked');
      if(e.target.name === 'js-frameworks'){
        // console.log(activitieCheckBox[4]);
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
});

//if checked add anount price to an array and add all together to get total


});
