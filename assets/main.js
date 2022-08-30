let input = $(".value1");
let input1 = $("#input1");
let input2 = $("#input2");
let signe = $("select");
input.on("keyup", function() {
    let signeValue = signe.val();
    let valueInput1 = input1.val();
    let valueInput2 = input2.val();
    let result = 0;
   
    
    if (signeValue === "+" ) {
        result = parseInt(valueInput1) + parseInt(valueInput2) ; 
    }
    if (signeValue === "-") {
        result=  valueInput1 - valueInput2 ;
    }
    if (signeValue === "/") {
        result= valueInput1 / valueInput2;
    }
    if (signeValue === "*") {
       result = valueInput1 * valueInput2; 
    }
    if ( isNaN(input1)){
        alert("veuillez entrer un nombre valide");
         {
            if ( isNaN(input2)){
                alert("veuillez entrer un nombre valide");
            }
        
        }
       
    }
    

    $("span").html(result);
});

