let inputELs= document.getElementsByClassName('test')
const alertEL = document.getElementsByClassName("alert")

Array.from(inputELs).forEach(function(e){
  e.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard

    if ( event.key >= 0 && event.key <= 9 ) {
      // Focus on the next sibling
      e.nextElementSibling.focus()

      if(e.getAttribute("id")==3){
        Array.from(inputELs).forEach(function(e2){
            e2.classList.add("alert")
        })
        
    }

    } 

    // if(id==4){
    //     e.style.animation = "shake .3s"
    
    // }


    else if(event.key.charCodeAt()==66){
        e.previousElementSibling.focus()
        event.preventDefault()
    }


    else{
        e.value =""
    }                                   
  });




})





