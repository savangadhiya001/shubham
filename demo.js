// adding click to the main home page i mean logo here
const logo = document.getElementsByClassName("logo");


// adding click to the side element

const x = document.getElementsByClassName("list");

for (var i = 0; i < x.length; i++) {
  var temp = i;
  // x[i].onclick=function(){
  //     console.log(temp)
  // }
  function addclick(index) {
    x[index].addEventListener(
      "click",
      function () {
        const contentlists = document.getElementsByClassName("contentlist");
        const homecontent = document.getElementById("homecontent");
        // if(homecontent.style.display=="block"){
        homecontent.style.display = "none";
        // }
        // console.log(homecontent.style);

        for (let j = 0; j < contentlists.length; j++) {
          if (index == j) {
            contentlists[j].style.display = "block";
          } else {
            contentlists[j].style.display = "none";
          }
        }
      },
      false
    );
  }
  addclick(i);
}

function demo(i) {
  console.log(i);
}
