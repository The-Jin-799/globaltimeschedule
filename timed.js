var queryString= new URLSearchParams(document.location.search)
var queryObject = {}

for(var key of queryString.keys())
{
    queryObject[key]=queryString.get(key)
}

var utc=queryObject.utc
utc=utc.replace("T"," ")
utc=utc+" UTC"
console.log(utc)
var viewerDate = new Date(utc)
/*var viewerOffSet= viewerDate.getTimezoneOffset()
viewerOffSet*=60000
var localTimeMs=utc - viewerOffSet
var localDate= new Date(localTimeMs)*/
var userdate=viewerDate.getDate()
var useryear=viewerDate.getFullYear()
var usermonth=viewerDate.getMonth()
var usertime=viewerDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
var months={
    '0':"January",
    '1':"February",
    '2':"March",
    '3':"April",
    '4':"May",
    '5':"June",
    '6':"July",
    '7':"August",
    '8':"September",
    '9':"October",
    '10':"November",
    '11':"December"
}

var date=document.getElementById("date")
var year=document.getElementById("year")
var month=document.getElementById("month")
var time=document.getElementById("time")
var message= document.getElementById("message")

date.innerText=userdate
year.innerText=useryear
month.innerText=months[usermonth]
time.innerText=usertime
var msg=queryObject.msg
message.innerText=msg

console.log(viewerDate)
