const fs=require('fs')

fs.readFile('file.txt','utf-8',function(err,data){
  if(err){
    console.log("Oop, Something went wrong",err);
  }
  else{
    console.log(data);
  }
})
count=1;
for(let i=0;i<100000000;i++){
  count+=count;
}