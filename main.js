import { idleprice , speedPrice , idleMultiPrice , click , clickerprice , clickMulti , clickMultiPrice , intSpeed , idler , money , idleMulti } from "./data.js";

function offline_earnings(){
  let offline = Math.floor((Date.now()-parseInt(localStorage.getItem("date")))/1000)
  let earned = offline*Math.round(idler*1000/intSpeed)*idleMulti
  if(!isNaN(earned)){
    console.log(earned)
    money = money + earned
    console.log(money)
    value()
  }
}
offline_earnings()

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

export {value}