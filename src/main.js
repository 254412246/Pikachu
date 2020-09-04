import  string from  './css'
let  html=document.querySelector('#demo');
let  style=document.querySelector('#style');
// let  btnPause=document.querySelector('#btnPause')
let  n = -1;
let  string2 = '';
let  time=50;
//parcel src/index.html
const  player={
    init:()=>{
        html.innerHTML = string2;//打印出新字符串
        style.innerHTML = string.substring(0, n);//从0到n打印出来
        player.bindEvents()
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const  value = player.events[key]; // pause / play / slow
                document.querySelector(key).onclick = player[value]
                
            }
        }
    },
    
     run : () => {
        n += 1;
         if (n+1 > string.length) {
            window.clearInterval(id);
             return
        }
        if (string[n] === "\n") {
            string2 += "<br>"//当有回车时变成<br>加进去，一次加了4个字符就不会出现 < 这个了
        } else if (string[n] === " ") {
            string2 += "&nbsp"
        } else {
            string2 += string[n]//其他的直接放进去
        }
    html.innerHTML = string2;//打印出新字符串
        style.innerHTML = string.substring(0, n);//从0到n打印出来
        window.scrollTo(0, 9999);
},
    play:()=>{
    return  setInterval(player.run, time);
}
};
const  fasesss=()=>{
     window.clearInterval(id);
    time=50;
     id = player.play()
};
let  id = player.play();
btnPause.onclick=()=>{
    window.clearInterval(id)
};
btnPlay.onclick=()=>{
     window.clearInterval(id);
     id = player.play()
};
btnFast.onclick=()=>{
    window.clearInterval(id);
    time=0;
    id = player.play()
};
btnSlow.onclick=()=>{
    window.clearInterval(id);
    time=200;
     id = player.play()
};
btnNormal.onclick= fasesss;
