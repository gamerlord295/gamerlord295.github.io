// import { intSpeed } from "./data.js";

let money ,clickerprice ,click ,idleprice ,idler ,speedPrice ,clickMulti ,clickMultiPrice ,idleMulti ,idleMultiPrice, intSpeed
idler = parseInt(localStorage.getItem('idler'));
idleMulti = parseInt(localStorage.getItem('idleMulti'))
money = parseInt(localStorage.getItem('currency'));
intSpeed = parseInt(localStorage.getItem('intSpeed'))
function storage(item){
  return parseInt(localStorage.getItem(item));
  
}

idleprice = parseInt(localStorage.getItem('idleprice'));
speedPrice = parseInt(localStorage.getItem('speedPrice'))
idleMultiPrice = parseInt(localStorage.getItem('idleMultiPrice'))
click = parseInt(localStorage.getItem('click'));
clickerprice = parseInt(localStorage.getItem('clickerprice'));
clickMulti = parseInt(localStorage.getItem('clickMulti'))
clickMultiPrice = parseInt(localStorage.getItem('clickMultiPrice'))

idlePriceText = document.getElementById("b3").innerHTML = `upgrade idle ${Math.round(idleprice)}$`;
clickPriceText = document.getElementById("b2").innerHTML = `upgrade clicker ${Math.round(clickerprice)}$`;
idleMultiPriceText = document.getElementById("b6").innerHTML = `idle multiplier ${Math.round(idleMultiPrice)}$`
clickMultiPriceText = document.getElementById("b5").innerHTML = `click multiplier ${Math.round(clickMultiPrice)}$`

intSpeedPrice()


function intSpeedPrice() {
  if (!isNaN(speedPrice)) {
    x = intSpeed === 50 ? "MAXED!" : Math.round(speedPrice) + "$";
    document.getElementById("b4").innerHTML = `upgrade speed by 0.05s: ${x}`
    return speedPrice
  } else {
    speedPrice = 100
    document.getElementById("b4").innerHTML = `upgrade speed by 0.05s ${Math.round(speedPrice)}$`
    localStorage.setItem('speedPrice', 100)
    return speedPrice
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

function checkText(y , id , value , text){
  if (!isNaN(y)){
    text
  }else{
    y = value
    text
    localStorage.setItem(id, value)
  }
}
checkText(clickerprice,"clickerprice",10,clickPriceText)
checkText(idleprice ,"idleprice" ,15 ,idlePriceText)
checkText(idleMultiPrice,"idleMultiPrice",1000 ,idleMultiPriceText)
checkText(clickMultiPrice,"clickMultiPrice",1000,clickMultiPriceText)
function element(el){
  return document.querySelector(el)
}
let p1 = element("#p1").innerHTML = `money/click ${(click)} X${clickMulti}`
let p2 = element("#p2").innerHTML = `idle money/sec ${Math.round((1000 / intSpeed) * idler)} X${idleMulti}`


function offline_earnings(){
  let offline = Math.floor((Date.now()-parseInt(localStorage.getItem("date")))/1000)
  let earned = offline*Math.round(idler*1000/intSpeed)*idleMulti
  if(!isNaN(earned)){
    console.log(earned)
    money = parseInt(localStorage.getItem("currency")) + earned
    console.log(money)
    value()
  }
}

function currency() {
  if (!isNaN(money)) {
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
offline_earnings()
currency()

function idleValue(){
  if (!isNaN(idler)){
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
  if(!isNaN(idleMulti)){
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
function click1(){
  money = money + (click * clickMulti) ;
}

function upg(){
  if(money >= clickerprice){
    money = money - Math.round(clickerprice)
    click = click + 1
    clickerprice = clickerprice * 1.4
    document.getElementById("b2").innerHTML = `upgrade clicker ${Math.round(clickerprice)}$`;
    localStorage.setItem('clickerprice' , Math.round(clickerprice));
    localStorage.setItem('click' , click);
    document.getElementById("p1").innerHTML = `money/click ${(click)} X${clickMulti}`
    value()
  }
}

function upgIdle(){
  if(money >= idleprice){
    money = money - Math.round(idleprice)
    idler= idler + 1
    idleprice = idleprice *1.4
    document.getElementById("b3").innerHTML =`upgrade idle ${Math.round(idleprice)}$`;
    localStorage.setItem('idleprice' , Math.round(idleprice));
    localStorage.setItem('idler' , idler);
    console.log(idler);
    document.getElementById("p2").innerHTML = `idle money/sec ${Math.round(idler*1000/intSpeed)} X${idleMulti}`
    value()
  }
}

function upgSpeed(){
  if(money >= speedPrice && intSpeed > 50){
    money = money - Math.round(speedPrice)
    intSpeed = intSpeed - 50
    speedPrice = speedPrice * 1.5
    let x = intSpeed === 50 ? "MAXED!": Math.round(speedPrice) + "$";
    document.getElementById("b4").innerHTML = `upgrade speed by 0.05s: ${x}`
    localStorage.setItem('speedPrice', Math.round(speedPrice))
    localStorage.setItem('intSpeed',intSpeed)
    console.log(intSpeed)
    clearInterval(speedInterval)
    speedInterval = setInterval(() => idle(), intSpeed);
    document.getElementById("p2").innerHTML = `idle money/sec ${Math.round(idler*1000/intSpeed)} X${idleMulti}`
    value()
  }
}

function upgClickMulti(){
  if (money >= clickMultiPrice) {
    money = money - Math.round(clickMultiPrice)
    clickMulti ++
    clickMultiPrice = clickMultiPrice * 2
    document.getElementById("b5").innerHTML = `click multiplier ${Math.round(clickMultiPrice)}$`
    localStorage.setItem('clickMulti', clickMulti)
    localStorage.setItem('clickMultiPrice', clickMultiPrice)
    document.getElementById("p1").innerHTML = `money/click ${(click)} X${clickMulti}`
    value()
  }
}

function upgIdleMulti(){
  if (money >= idleMultiPrice) {
    money = money - Math.round(idleMultiPrice)
    idleMulti ++
    idleMultiPrice = idleMultiPrice * 2
    document.getElementById("b6").innerHTML = `idle multiplier ${Math.round(idleMultiPrice)}$`
    localStorage.setItem('idleMulti', idleMulti)
    localStorage.setItem('idleMultiPrice', idleMultiPrice)
    document.getElementById("p2").innerHTML = `idle money/sec ${Math.round(idler*(1000/intSpeed))} X${idleMulti}`
    value()
  }
}

  function value(){
    document.getElementById("l1").innerHTML = money;
    localStorage.setItem('currency' , money);
    localStorage.setItem('date', Date.now())
  }

function idle(){
  money = money + (idler * idleMulti)
}
let speedInterval = setInterval(() => idle(), intSpeed);
setInterval(() => value(), 100);
// setTimeout(() => , 50);