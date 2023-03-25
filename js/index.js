// var user = {
//     name: `Ali`,
//     age: `18`,
//     weight:`60kg`,
//     height:`165sm`,
//     gender:`male`,
// }
// var key = prompt(`Sizga qaysi qimat kerak`,'name');
// var elText = document.querySelector(`.text`);
// elText.textContent=user[key]





 var elForm = document.querySelector('.form');
 var elInput = elForm.querySelector('.Input');
 var elUserList =document.querySelector('.users__list');


  var users =[];
 

  elForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    var newUser ={
        id:1,
        first__name: elInput.value,
    };

    users.push(newUser);
    elInput.value= null;
    elUserList.innerHTML=null;

    

    for( i=0; i< users.length; i++){
        var elLi = document.createElement('Li');
        elLi.className='list__group';
        
       
        elLi.textContent=users[i].first__name

        
        elUserList.appendChild(elLi);
        var LiInput =document.createElement('input');
        LiInput.type="checkbox";
        LiInput.className='list__input';
        elLi.appendChild(LiInput);
     

    }
    
  });