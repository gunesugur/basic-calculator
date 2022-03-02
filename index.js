window.onload = function () {
    
    selectedOperator = "";
    leftPart = "";
    rightPart = "";

    var numbers = document.querySelectorAll(".num");
    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", function () {

            document.getElementById('resultInner').innerHTML += this.value;
            if (selectedOperator =="") {
                leftPart += this.value;
                // alert(leftPart);   
            }else{
                rightPart += this.value;
                // alert(rightPart);
            }

        }, false);
    }

    var operators = document.querySelectorAll(".operator");
    for (var i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", function () {

            document.getElementById("resultInner").innerHTML += this.value; 
            
            selectedOperator += this.value;

        }, false);
    }

    document.getElementById("equation").addEventListener("click", function () {

        if (selectedOperator == "+") {
            document.getElementById("resultInner").innerHTML = 
            parseInt(leftPart) + parseInt(rightPart);
        }
        else if (selectedOperator == "-") {
            document.getElementById("resultInner").innerHTML = 
            parseInt(leftPart) - parseInt(rightPart);
        }
        else if (selectedOperator == "*") {
            document.getElementById("resultInner").innerHTML = 
            parseInt(leftPart) * parseInt(rightPart);
        }
        else if (selectedOperator == "/") 
            document.getElementById("resultInner").innerHTML = 
            parseInt(leftPart) / parseInt(rightPart);
        }, false);

    document.getElementById("delete").addEventListener("click", function () {
        selectedOperator = "";
        leftPart = "";
        rightPart = "";
        document.getElementById("resultInner").innerHTML = "";
    }, false);
}