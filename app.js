let item=document.querySelector('#item'
)

let toDo=document.querySelector('#todo-box'
)


item.addEventListener("keyup", function(event) {

    if(event.key=='Enter'){

        console.log(this.value);

        this.value='';
    }
});