var display = document.getElementById("display");
var buttons = document.getElementsByClassName("bttns");
var operator ;
var op1 ;
var op2 ;

for(let i = 0 ; i < buttons.length ; i++)
{
    buttons[i].addEventListener('click' , function(){
        let value = this.getAttribute("data-value");
        if(value === "clear")
        {
            display.innerText = "";
        }
        else if(value === "dlt")
        {
            if(display.innerText == "Error")
            {
                display.innerText = "";
            }
            else
            {
            display.innerText = display.innerText.substr(0,display.innerText.length-1); 
            }
        }

        else if( (display.textContent == "") && (value == '+' || value == '-' || value == '*' || value == '/' || value == "sqre" ))
        {
            display.innerText = "Error";
        }
        else if(value == '+' || value == '-' || value == '*' || value == '/' )
        {
            operator = value ;
            op1 = display.textContent;
            display.textContent = "";
        }
        else if(value == "sqre")
        {
            operator = '*';
            op1 = display.textContent;
            op2 = display.textContent;
            display.textContent = eval(op1 + operator + op2);
        }
        else if(value == '=')
        {
            op2 = display.textContent;
            display.textContent = eval(op1 + operator + op2) ; 
        }
        else{
            display.innerText += value ;
        }
    })
}

document.addEventListener('keypress', function(event){
        if( (display.textContent == "") && (event.key == '+' || event.key  == '-' || event.key  == '*' ||event.key  == '/' || event.key  == '@' ))
        {
            display.innerText = "Error";
        }
       else if(event.key == '+'|| event.key == '-' || event.key == '*'|| event.key == '/')
       {
           operator = event.key ; 
           op1 = display.innerText;
           display.innerText = "";
           console.log(operator);
           console.log(op1);
       }
       else if(event.key == '@' )
        {
             op1 = display.innerText;
             op2 = display.innerText;
             operator = '*';
             display.innerText = eval(op1 + operator + op2 );

        }
       else if(event.key == "=" || event.key == "Enter")
       {
           op2 = display.innerText;
           console.log(op2);
           display.innerText = eval(op1 + operator + op2 );
       }
       else if((event.key == 'x' || event.key == 'X') && (event.shiftKey == true))
       {
           display.innerText = "";
       }
       else{
           display.innerText += event.key;
       }

    console.log(event);
 
    })
