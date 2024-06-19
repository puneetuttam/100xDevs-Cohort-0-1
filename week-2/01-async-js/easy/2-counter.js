let count=0;
function startCounter(){
  count=count+1;
  console.log(count)
  setTimeout(startCounter,1000);
}
startCounter();