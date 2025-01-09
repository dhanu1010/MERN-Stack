var listOfDate=[]
//creating array to store the list
var input=document.getElementById("input");
//Dom should collab with html form
var todo=document.getElementById("todo")
//creating ul list using Dom Variable
document.getElementById("button").onclick= click;
//Inserting a data
 function click(){
    listOfDate.push(input.value)
    console.log(listOfDate);
    input.value=""
    showList()
 }
  function showList(){
    todo.innerHTML=" "
  }
  listOfDate.forEach(function(n,i){
    listOfDate.innerHTML=("<li>" +n+"<a onclick='edit("+i+")'>&times |</a></li>")
  
})