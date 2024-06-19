const fs=require("fs");
let data="hi, I am doing great";
fs.writeFileSync("file.txt",data,err=>{
  if(err){
    console.log("Oops,something went wrong");
  }
  else{
    console.log("data inserted into the file")
  }
})