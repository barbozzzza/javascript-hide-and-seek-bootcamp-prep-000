function getFirstSelector(selector){
  
  return document.querySelector(selector)
  
}

function nestedTarget() {
  return document.querySelector("#nested .target")
  
}

function deepestChild(){

  var node = document.querySelectorAll('#grand-node div');
 return node[node.length - 1];
  
  
}

function increaseRankBy(n){
  
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
 for (let i = 0; i < lis.length; i++) {
   lis[i].innerHTML = parseInt(lis[i].innerHTML) + parseInt(n);
 }
  
  
  
}