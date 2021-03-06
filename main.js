function today()
{
  var d= new Date()
  var date = d.getDate()
//conver day number to day name array
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var day = weekday[d.getDay()];
  var year = d.getFullYear();
  var hour = d.getHours()
  var min = d.getMinutes()
  var timeZone = d.toTimeString().slice(9) +" "+ Intl.DateTimeFormat().resolvedOptions().timeZone
  var offset=d.getTimezoneOffset()

  this.date = date
  this.day = day
  this.year = year
  this.hour = hour
  this.min = min 
  this.timeZone = timeZone
  this.time =`${d.toLocaleTimeString()}`
  this.timeoffset=offset
 
}
window.onpaint = currentTime();

//showing sytem time 
function currentTime()
{
  const Today= new today()
  var nowTime = document.querySelector("#yourtime")
  var nowZone = document.querySelector("#yourzone")
  nowTime.innerText= Today.time
  nowZone.innerText= Today.timeZone
}
setInterval(currentTime,1000)

//filling URL on box
function fillFullURL(queryString){
  if(!window.location.search){
    var link=document.querySelector("#link")
    var url=window.location.href + "timed.html?" + queryString;
    link.value=url
  }

}
 
var formObject={}

const timeForm = document.forms.timeform;
//on submission
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  for(let key of formData.keys())
  {  
    formObject[key]=formData.get(key)
  }
  console.log(formObject.date+" "+formObject.time)
  var submittedDate = new Date(formObject.date+'T'+formObject.time)
  //Convert submittted date and time to UTC
  var utcDate = submittedDate.toISOString()
  utcDate = utcDate.slice(0,19)
  //generating query string with utc and msg
  queryObject={
    "utc":utcDate,
    "msg":formObject.message
  }
  const queryString = new URLSearchParams(queryObject);
  fillFullURL(queryString);
  console.log(queryString)



}

timeForm.addEventListener('submit', handleSubmit);
//Copy button implementation
function linkCopy(){
  var link=document.getElementById("link")
  
  link.select();    
  navigator.clipboard.writeText(link.value); 
  
}
var btn=document.getElementById("copy")
btn.addEventListener("click", linkCopy)


//utc millisecond generated is differnt for different timezones

//modal pop up
var modal = document.getElementsByClassName("modal")[0]
var aboutbtn=document.getElementById("about")
var close=document.getElementsByClassName("close")[0]
aboutbtn.onclick = function(){
  modal.style.display="block"
}

close.onclick=function(){
  modal.style.display="none"
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}