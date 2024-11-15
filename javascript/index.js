// message board
function fnsubmit() {
  var odiv = document.getElementById("box");
  var otext = document.getElementById("text");
  var oli = odiv.getElementsByTagName("li").length;
  if (otext.value == "") {
    alert("Please enter your message!");
    return;
  }
  var add_li = document.createElement("li");
  add_li.textContent = (oli + 1) + " : " + otext.value; 
  odiv.appendChild(add_li);
  otext.value = "";
  if(document.getElementById("box").getElementsByTagName("li").length>=1){
    document.querySelector("#box > em").style.display="none";
    document.querySelector("#box").classList.add("boxReNew");
  }
}
document.addEventListener("keydown",function(event){
  if(event.key==="Enter"){
    fnsubmit();
  }
});

// counter
var count = 0;
function counter (){
  count ++ ;
  document.getElementById("counter").innerHTML = "Number of visitors : " + count;
};

// var count = 0;
// document.querySelector("body").addEventListener("load", function(){
//   count ++ ;
//   document.getElementById("counter").innerHTML = "Number of visitors : " + count;
// });