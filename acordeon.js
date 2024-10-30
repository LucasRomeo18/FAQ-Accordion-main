let buttonClick = document.getElementById(`button`);
let paraclick = document.getElementById(`para`);


buttonClick.addEventListener('click', function(){
    if(paraclick.style.display === `block`){
        paraclick.style.display = 'none';
    }
    else{
        paraclick.style.display = 'block';
    }
    
})  
