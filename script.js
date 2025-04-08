let input = document.getElementById('input-box');

let buttons = document.querySelectorAll('button');

let string = ""

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;

        } else if (e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        
        } else if (e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value  = string;

        } else if (e.target.innerHTML == '%'){
            let match = string.match(/(\d+\.?\d*)$/);
            if (match){
                let number = parseFloat(match[0]);
                let percentage = number/ 100
                string = string.replace(/(\d+\.?\d*)$/, percentage);
                input.value = string
            }

        }else{ 
            string += e.target.innerHTML;
            input.value = string;
            
        }


        
    })
})



