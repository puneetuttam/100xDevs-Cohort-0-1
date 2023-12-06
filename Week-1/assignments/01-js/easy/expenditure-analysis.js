/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result=[];
  let total=[];
  for(let i=0;i<transactions.length;i++){
    let curr=transactions[i];
    if(!total[curr.category]){
      total[curr.category]=curr.price;
    }else{
      total[curr.category]+=curr.price;
    }
  }
  for(const category in total){
    result.push({category:category,totalSpent:total[category]});
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
