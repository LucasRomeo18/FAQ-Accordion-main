let buttonClick = document.getElementById(`button`);
let paraclick = document.getElementById(`para`);


buttonClick.addEventListener('click', function(){
    if(paraclick.classList.contains(`open`)){
        //paraclick.style.display = 'none';
        paraclick.classList.remove(`open`);
    }
    else{
        //paraclick.style.display = 'block';
        paraclick.classList.add(`open`);
    }
    
})  
