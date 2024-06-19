let count=1
function startCounter(){
  console.log("count : ",count,"✅")
  count++;
}
setInterval(startCounter,1000);