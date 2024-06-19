const fs=require('fs')

fs.readFile('dummy.txt','utf-8',(err,data)=>{
  if(err){
    console.log(err)
  }
  else{
    data=data.replace(/\s+/g,' ');
    console.log(data)
    insertDataInFile(data)
  }
})

function insertDataInFile(data){
  fs.writeFile('dummy.txt',data,(err)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log("Space Removed")
    }
  })
}