var queryString= new URLSearchParams(document.location.search)
var queryObject = {}

for(var key of queryString.keys())
{
    queryObject[key]=queryString.get(key)
}

utc=Number(queryObject.utc)
var viewerDate = new Date()
var viewerOffSet= viewerDate.getTimezoneOffset()
viewerOffSet*=60000
var localTimeMs=utc-viewerOffSet
var localDate= new Date(localTimeMs)

viewUpdatedTime = document.getElementById("time")
viewUpdatedTime.innerText=localDate.toLocaleString()
console.log(localDate)
