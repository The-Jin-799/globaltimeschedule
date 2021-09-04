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

viewUpdatedTime = document.getElementById("time")
viewUpdatedTime.innerText=viewerDate.toLocaleString()
var message=queryObject.msg
var msg= document.getElementById("msg")
msg.innerText=message
console.log(viewerDate)
