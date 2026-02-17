// make purple bg on click event
// option2
const makeRedBtn = document.getElementById("make-purple-clr");
makeRedBtn.onclick = function makeRed() {
  document.body.style.backgroundColor = "purple";
};


// option 3 
const makeBisque = document.getElementById("make-bisque-clr");

makeBisque.onclick = makeBisqueClr;

function makeBisqueClr(){
    document.body.style.backgroundColor = 'blanchedalmond';
}
