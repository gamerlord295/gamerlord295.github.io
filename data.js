// function storage(item){
//   return parseInt(localStorage.getItem(item));
  
// }

// idleprice = parseInt(localStorage.getItem('idleprice'));
// speedPrice = parseInt(localStorage.getItem('speedPrice'))
// idleMultiPrice = parseInt(localStorage.getItem('idleMultiPrice'))
// click = parseInt(localStorage.getItem('click'));
// clickerprice = parseInt(localStorage.getItem('clickerprice'));
// clickMulti = parseInt(localStorage.getItem('clickMulti'))
// clickMultiPrice = parseInt(localStorage.getItem('clickMultiPrice'))

// idlePriceText = document.getElementById("b3").innerHTML = `upgrade idle ${Math.round(idleprice)}$`;
// clickPriceText = document.getElementById("b2").innerHTML = `upgrade clicker ${Math.round(clickerprice)}$`;
// idleMultiPriceText = document.getElementById("b6").innerHTML = `idle multiplier ${Math.round(idleMultiPrice)}$`
// clickMultiPriceText = document.getElementById("b5").innerHTML = `click multiplier ${Math.round(clickMultiPrice)}$`

// intSpeedPrice()


// function intSpeedPrice() {
//   if (!isNaN(speedPrice)) {
//     x = intSpeed === 50 ? "MAXED!" : Math.round(speedPrice) + "$";
//     document.getElementById("b4").innerHTML = `upgrade speed by 0.05s: ${x}`
//     return speedPrice
//   } else {
//     speedPrice = 100
//     document.getElementById("b4").innerHTML = `upgrade speed by 0.05s ${Math.round(speedPrice)}$`
//     localStorage.setItem('speedPrice', 100)
//     return speedPrice
//   }
// }

// function check(y ,id ,value){
//   if(!isNaN(y)){
//     console.log(y)
//   }else{
//     y = value
//     localStorage.setItem(id, value)
//     console.log("created item " + id)
//   }
// }
// check(click,"click",1);check(intSpeed,"intSpeed",1000);check(clickMulti,"clickMulti",1);

// function checkText(y , id , value , text){
//   if (!isNaN(y)){
//     text
//   }else{
//     y = value
//     text
//     localStorage.setItem(id, value)
//   }
// }
// checkText(clickerprice,"clickerprice",10,clickPriceText)
// checkText(idleprice ,"idleprice" ,15 ,idlePriceText)
// checkText(idleMultiPrice,"idleMultiPrice",1000 ,idleMultiPriceText)
// checkText(clickMultiPrice,"clickMultiPrice",1000,clickMultiPriceText)
// function element(el){
//   return document.querySelector(el)
// }
// let p1 = element("#p1").innerHTML = `money/click ${(click)} X${clickMulti}`
// let p2 = element("#p2").innerHTML = `idle money/sec ${Math.round((1000 / intSpeed) * idler)} X${idleMulti}`






// export {intSpeed}
