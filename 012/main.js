function squend(number) {
    var result = number * number;
    return result;

}
function calculate() {
    var input =document.getElementById("input").value;
    // alert(input)
    var result = squend(input);
    // alert(result);
     document.getElementById("result").innerHTML = result;
}
   


// var squendOf2 = squend(2)
// document.write("squend of 2 is " + squendOf2+"<br/> ");
// var squendOf5 = squend(5)
// document.write("squend of 5 is " + squendOf5);
