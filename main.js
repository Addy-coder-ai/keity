nameOfTheStudentArray=[];
function submit()
{ 
var display_student_array=[];
for(var j=1; j<=4; j++){
    var nameofstudent=document.getElementById("name_of_the_student_"+j).value;
    console.log(nameofstudent);
    nameOfTheStudentArray.push(nameofstudent);
}
console.log(nameOfTheStudentArray);
var lengthofnosarray=nameOfTheStudentArray.length;
console.log(lengthofnosarray);
for(var k=0; k<lengthofnosarray; k++){
    display_student_array.push("<h4>NAME_" + nameOfTheStudentArray[k] + "</h4>");
    console.log(display_student_array);
}
console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var removecomma=display_student_array.join(" ");
console.log(removecomma);
document.getElementById("display_name_without_commas").innerHTML=removecomma;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
nameOfTheStudentArray.sort();
console.log(nameOfTheStudentArray);
var displaystudentarraysort=[];
var lengthnotslength=nameOfTheStudentArray.length;
console.log(lengthnotslength);
for(var k=0; k<lengthnotslength; k++){
    displaystudentarraysort.push("<h4>NAME_" + nameOfTheStudentArray[k] + "</h4>");
    console.log(displaystudentarraysort);  
}
var removecomma=displaystudentarraysort.join(" ");
console.log(removecomma);
document.getElementById("display_name_without_commas").innerHTML=removecomma;
}
