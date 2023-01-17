let value = 0;
let item1value = 0;
let item2value = 0;
let item3value = 0;
let item4value = 0;
let item5value = 0;
let item6value = 0;

const arr = [];
const ans = [];

function countitem(id) {
  var item = document.getElementById(id);
  if (arr.includes(item) == false) {
    value++;
    document.getElementById("itemsselected").innerHTML = value;
    arr.push(item);
  }
  if (item == "item1") {
    item1value++;
    ans[1] = item1value;
    document.getElementById("show");
    
  } else if (item == "item2") {
    item2value++;
    ans[2] = item2value;
  } else if (item == "item3") {
    item3value++;
    ans[3] = item3value;
  } else if (item == "item4") {
    item4value++;
    ans[4] = item4value;
  } else if (item == "item5") {
    item5value++;
    ans[5] = item5value;
  } else {
    item6value++;
    ans[6] = item6value;
  }
}

// function showitems(id) {
//   document.getElementById(id).innerHTML = 7;
// }
