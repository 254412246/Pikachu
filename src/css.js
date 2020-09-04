const  string=`body{
    background: #FFE600;
    min-height: 50vh;
  position: relative;
}
 .skin{
    position: relative;
}
 .nose{
    position:relative;
    left: 50%;
    top: 175px;
    width: 0;
    height: 0;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-top: 20px solid black;
    border-radius: 50%;
    margin-left: -18px;
}
@keyframes wave {
    0%{

    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
 .nose:hover{
    transform-origin: 50% 100%;
    animation: wave 300ms infinite linear;
}
.eys{
    border: 2px solid black;
    height: 64px;
    width: 64px;
    position: absolute;
    margin-left: -32px;
    left: 50%;
    top: 140px;
    background: #2e2e2e;
    border-radius: 50%;
}
.eys::before{
    content: '';
    display: block;
    border: 2px solid #000000;
    width: 32px;
    height: 32px;
    background: #FFFFFF;
    border-radius: 50%;
    margin-left: 8px;
}
.eys.left{
transform: translateX(-130px);
}
.eys.right{
    transform: translateX(130px);
}
.mouth{
    width: 220px;
    height: 180px;
    position: absolute;
    left: 50%;
    top: 220px;
    margin-left: -110px;
}
.mouth .up .lip{
    position: absolute;
    border: 3px solid black;
    width: 114px;
    height: 24px;
    background: #FFE600;
    border-top: none;
    z-index: 9;
}
.mouth .up .lip.right{
    margin-left: -110px;
    left: 48%;
    border-radius: 0 0 0 50px;
    border-right: none;
    transform: rotate(-15deg);
}
.mouth .up .lip.left{
     margin-left: 62px;
     border-radius: 0 0 50px 0;
     border-left: none;
     transform: rotate(15deg);
     left:47px;
 }

.down{
    position: absolute;
    height: 190px;
    width: 90%;
    margin-left: 10px;
    top: 8px;
    overflow: hidden;
}
.down .yuan{
    position: absolute;
    left: 50%;
    border: 3px solid black;
    height: 800px;
    width: 180px;
    bottom: 0;
    margin-left: -90px;
    background: #9B000A;
    border-radius: 90px/350px;
    z-index: 2;
    overflow: hidden;
}
.down .yuan .yuan1 {
    display: block;
    position: absolute;
    width: 200px;
    height: 300px;
    left: 50%;
    bottom: -155px;
    background: #FF485F;
    border-radius: 50%;
    margin-left: -100px;
}
.face{
    position: absolute;
    left: 50%;
    border: 3px solid black;
    background: #FF0000;
    border-radius: 50%;
    margin-left: -44px;
    width: 88px;
    height: 88px;
    top: 270px;
}
.face.left{
    transform: translateX(200px);
    background: #ff0000;
  border-radius: 50%;
}
.face.right{
    transform: translateX(-200px);
    background: #ff0000;
  border-radius: 50%;
}
`;
export  default  string