function storage(item){
  parseInt(localStorage.getItem(item));
}

idleprice = parseInt(localStorage.getItem('idleprice'));

speedPrice = parseInt(localStorage.getItem('speedPrice'))
idleMultiPrice = parseInt(localStorage.getItem('idleMultiPrice'))
click = parseInt(localStorage.getItem('click'));
clickerprice = parseInt(localStorage.getItem('clickerprice'));
clickMulti = parseInt(localStorage.getItem('clickMulti'))
clickMultiPrice = parseInt(localStorage.getItem('clickMultiPrice'))





function idlerPrice() {
  if (!isNaN(idleprice)) {
    document.getElementById("b3").innerHTML = `upgrade idle ${Math.round(idleprice)}$`;
    console.log(`Not NaN ${idleprice}`)
    return idleprice
  } else {
    idleprice = 15
    document.getElementById("b3").innerHTML = `upgrade idle ${Math.round(idleprice)}$`;
    localStorage.setItem('idleprice', 15);
    console.log(`NaN ${idleprice}`)
    return idleprice
  }
}

function clickPrice() {
  if (!isNaN(clickerprice)) {
    document.getElementById("b2").innerHTML = `upgrade clicker ${Math.round(clickerprice)}$`;
    console.log(`Not NaN ${clickerprice}`)
    return clickerprice
  } else {
    clickerprice = 10
    document.getElementById("b2").innerHTML = `upgrade clicker ${Math.round(clickerprice)}$`;
    localStorage.setItem('clickerprice', 10);
    console.log(`NaN ${clickerprice}`)
    return clickerprice
  }
}

function intSpeedPrice() {
  if (!isNaN(speedPrice)) {
    let x = intSpeed === 50 ? "MAXED!" : Math.round(speedPrice) + "$";
    document.getElementById("b4").innerHTML = `upgrade speed by 0.05s: ${x}`
    console.log(`Not NaN ${speedPrice}`)
    return speedPrice
  } else {
    speedPrice = 100
    document.getElementById("b4").innerHTML = `upgrade speed by 0.05s ${Math.round(speedPrice)}$`
    localStorage.setItem('speedPrice', 100)
    console.log(`NaN ${speedPrice}`)
    return speedPrice
  }
}

function clickMultPrice() {
  if (!isNaN(clickMultiPrice)) {
    document.getElementById("b5").innerHTML = `click multiplier ${Math.round(clickMultiPrice)}$`
    console.log(`Not NaN ${clickMultiPrice}`)
    return clickMultiPrice
  } else {
    clickMultiPrice = 1000
    document.getElementById("b5").innerHTML = `click multiplier ${Math.round(clickMultiPrice)}$`
    localStorage.setItem('clickMultiPrice', 1000)
    console.log(`NaN ${clickMultiPrice}`)
    return clickMultiPrice
  }
}

function idleMultPrice() {
  if (!isNaN(idleMultiPrice)) {
    document.getElementById("b6").innerHTML = `idle multiplier ${Math.round(idleMultiPrice)}$`
    console.log(`Not NaN ${idleMultiPrice}`)
    return idleMultiPrice
  } else {
    idleMultiPrice = 1000
    document.getElementById("b6").innerHTML = `idle multiplier ${Math.round(idleMultiPrice)}$`
    localStorage.setItem('idleMultiPrice', 1000)
    console.log(`NaN ${idleMultiPrice}`)
    return idleMultiPrice
  }
}

function check(y ,id ,value){
  if(!isNaN(y)){
    console.log(y)
  }else{
    y = value
    localStorage.setItem(id, value)
    console.log("created item " + id)
  }
}
check(click,"click",1);check(intSpeed,"intSpeed",1000);check(clickMulti,"clickMulti",1);

function element(el){
  return document.querySelector(el)
}
let p1 = element("#p1").innerHTML = `money/click ${(click)} X${clickMulti}`
let p2 = element("#p2").innerHTML = `idle money/sec ${Math.round((1000 / intSpeed) * idler)} X${idleMulti}`


clickPrice()
clickMultPrice()
idlerPrice()
intSpeedPrice()
idleMultPrice()




// export {intSpeed}
