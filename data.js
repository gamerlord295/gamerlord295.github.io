import { value } from "./main.js";

function storage(item){
  let x = parseInt(localStorage.getItem(item));
  return x
}

let idleprice = storage('idleprice'); 
let speedPrice = storage('speedPrice'); 
let idleMultiPrice = storage('idleMultiPrice'); 
let click = storage('click'); 
let clickerprice = storage('clickerprice'); 
let clickMulti = storage('clickMulti'); 
let clickMultiPrice = storage('clickMultiPrice'); 
let intSpeed = storage('intSpeed'); 
let idler = storage('idler'); 
let money = storage('currency'); 
let idleMulti = storage('idleMulti');

function idlerPrice() {
  if (!isNaN(idleprice) && typeof idleprice !== "undefined") {
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
  if (!isNaN(clickerprice) && clickerprice !== "undefined") {
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
  if (!isNaN(speedPrice) && speedPrice !== "undefined") {
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
  if (!isNaN(clickMultiPrice) && clickMultPrice !== "undefined") {
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
  if (!isNaN(idleMultiPrice) && idleMultPrice !== "undefined") {
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

function currency() {
  if (!isNaN(money) && typeof money !== "undefined") {
    value()
    console.log(`Not NaN ${money}`)
    return money
  } else {
    money = 0
    document.getElementById("l1").innerHTML = money;
    localStorage.setItem('currency', 0);
    console.log(`${money}`)
    return money
  }
}
currency()

function idleValue(){
  if (!isNaN(idler) && typeof idler !== "undefined"){
    console.log(`Not NaN ${idler}`)
    return idler
  }else{
    idler = 0
    localStorage.setItem('idler' , 0);
    console.log(`NaN ${idler}`)
    return idler
  }
}
idleValue()

function idleMult(){
  if(!isNaN(idleMulti) && typeof idleMulti !== "undefined"){
    console.log(`Not NaN ${idleMulti}`)
    return idleMulti
  }else{
    idleMulti = 1
    localStorage.setItem('idleMulti' , 1)
    console.log(`NaN ${idleMulti}`)
    return idleMulti
  }
}
idleMult()

function check(y ,id ,value){
  if(isNaN(y) || y === "undefined"){
    y = value
    localStorage.setItem(id, value)
    console.log("created item " + id)
  }else{
    console.log(y)
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




export {idleprice , speedPrice , idleMultiPrice , click , clickerprice , clickMulti , clickMultiPrice , intSpeed , idler , money , idleMulti }