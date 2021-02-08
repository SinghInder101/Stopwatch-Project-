var hh =0;
var mm=0;
var ss=0;
var flag=1;
var lapcount=1;

function addTime(){
    if(hh!=0 ||  mm!=0 || ss!=0){

    var d= document.createElement("div");
    var lc=document.createElement("li");
    var lt=document.createElement("li");
    lc.innerHTML="Lap"+lapcount;
    lt.innerHTML=document.getElementById("timeDisplay").innerHTML;
    d.setAttribute("class","laptime");
    lc.setAttribute("class","lapc");
    lt.setAttribute("class","lapt");

    d.appendChild(lc);
    d.appendChild(lt);
    document.getElementsByClassName("time")[0].appendChild(d);
    lapcount++
    }
}

var startClock= setInterval(function(){

    if(flag==0){
    if(mm==60){
        hh=hh+1;
        mm=0;
    }
    if(ss==60){
        mm=mm+1;
        ss=0;
    }
    else{
        ss=ss+1;
    } 
    var flagss=0;
    var flagmm=0;
    var flaghh=0
    
    if(ss<10){
        
        ss='0'+ss;
        flagss=1;
    }
    if(mm<10){
        mm='0'+mm;
        flagmm=1;
    }
    if(hh<10){
        hh='0'+hh;
        flagghh=1;
    }
    var t= document.getElementById("timeDisplay");
    

        t.innerHTML=hh+":"+mm+":"+ss;

        if(flagss=1){
            ss=ss-'0'
        }
        if(flagmm=1){
            mm=mm-'0'
        }
        if(flaghh=1){
            hh=hh-'0'
        }
   
    }

},1000)
function Start(){
    var lap=document.getElementById("lap");
    lap.innerHTML="Lap";
    lap.setAttribute("onclick","addTime()")
    flag=0;
   var stop = document.getElementById("stop");
   stop.innerHTML="stop";
   stop.setAttribute("onclick","Stop()");

}
function Stop(){
     flag=1;
     var lap=document.getElementById("lap");
     lap.innerHTML="Reset"
     lap.setAttribute("onclick","Reset()");
     document.getElementById("stop").innerHTML='start';
     document.getElementById("stop").setAttribute("onclick","Start()");
     

}
function Reset(){
    document.getElementsByClassName("time")[0].innerHTML="";
    var stop = document.getElementById("stop");
    stop.innerHTML="start";
    stop.setAttribute("onclick","Start()");
    
    hh=0;
    ss=0;
    mm=0;
    var t= document.getElementById("timeDisplay");
    t.innerHTML='0'+hh+":"+'0'+mm+":"+'0'+ss;
    var lap =document.getElementById('lap');
    lap.innerHTML="lap";
    lap.setAttribute("onclick","addTime()");
    lapcount=1;
    

}