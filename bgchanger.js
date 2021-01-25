let color = document.getElementsByClassName('col');
/*let a1 = document.querySelector('.a1');
let a2 = document.querySelector('.a2');
let a3 = document.querySelector('.a3');
let a4 = document.querySelector('.a4');*/

for (i = 0; i < color.length; i++) {
    color[i].addEventListener('click', bgcolor);
}

function bgcolor(color) {
    //console.log(this.id);

    /*Using switch case*/
    switch (color.target.id) {
        case "red":
            document.body.className = 'a1';
            break;
        case "aqua":
            document.body.className = 'a2';
            break;
        case "lightgreen":
            document.body.className = 'a3';
            break;
        case "yellow":
            document.body.className = 'a4';
            break;
        default:
            document.body.style.backgroundColor = "grey";
    }

    /*Using if-else*/
    /*if(this.id==="red"){
        document.body.style.backgroundColor=this.id;
    }
    else if(this.id==="aqua"){
        document.body.style.backgroundColor=this.id;
    }
    else if(this.id==="lightgreen"){
        document.body.style.backgroundColor=this.id;
    }
    else if(this.id==="yellow"){
        document.body.style.backgroundColor=this.id;
    }
    else{
        document.body.style.backgroundColor=this.id;
    }*/
}