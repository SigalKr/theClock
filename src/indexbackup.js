import main from './sass/main.scss';
import $ from 'jquery';
import {TweenLite} from "gsap";

//Changing Colors
let bgrightoverlay = $(".right-img-1-overlay"); 
let bgrightoverlay2 = $(".right-img-2-overlay"); 
let bgleftoverlay = $(".left-img-1-overlay");

//Changing Images
let bgright = $(".right-img-1"); 
let bgleft = $(".left-img-1");


//ColorsArray
let colorsArray = ['#044638','#1b233f','#8c133c','#a8d3ae','#ee788e','#1d1d1b','#eb655e','#e1c7a3','#30529b',' #c9a228',' #c9a228','#0b4242','#bd9559'];

//ImagesArray
let imagesArray = [
'/static/images/bg1.jpg',
'/static/images/bg2.jpg',
'/static/images/bg3.jpg',
'/static/images/bg4.jpg',
,'/static/images/bg5.jpg'
,'/static/images/bg6.jpg'
,'/static/images/bg7.jpg'
,'/static/images/bg8.jpg'
,'/static/images/bg9.jpg'
,'/static/images/bg10.jpg'
,'/static/images/bg11.jpg'
,'/static/images/bg12.jpg'
]
let rotateSides = (rightVisual,leftVisual,rightOverlay2)=>{

//first position: pre-set color right ->img
TweenLite.to(rightVisual,3,{rotation:180,transformOrigin:"left 50%",delay:1});

//Starting the function: pre set img->pre set color
TweenLite.to(leftVisual,3,{rotation:180,transformOrigin:"left 50%",delay:2,onComplete:()=>
{
        console.log("completed left side");
                //to color
                TweenLite.to(leftVisual,3,{rotation:360,transformOrigin:"left 50%",delay:2});

                TweenLite.to(rightOverlay2,3,{rotation:180,transformOrigin:"right 50%",delay:0,
                onComplete:()=>{
                //to image    
                 bgright.css('background-image',"url("+imagesArray[10]+")");
                 console.log("url("+imagesArray[10]+")");

                 TweenLite.to(leftVisual,3,{rotation:540,transformOrigin:"left 50%",delay:2});
                 TweenLite.to(rightOverlay2,3,{rotation:360,transformOrigin:"right 50%",delay:0,onComplete:()=>{
                //to color
                bgrightoverlay2.css('background-color',colorsArray[0]);
                console.log("changed colors with array");
                TweenLite.to(leftVisual,3,{rotation:720,transformOrigin:"left 50%",delay:2});
                TweenLite.to(rightOverlay2,3,{rotation:540,transformOrigin:"right 50%",delay:1,onComplete:()=>{
                        bgright.css('background-image',"url('/static/images/bg5.jpg')");
                        TweenLite.to(leftVisual,3,{rotation:900,transformOrigin:"left 50%",delay:2});
                        TweenLite.to(rightOverlay2,3,{rotation:720,transformOrigin:"right 50%",delay:0,onComplete:()=>{
                bgrightoverlay2.css('background-color','#c9a228');
                TweenLite.to(leftVisual,3,{rotation:1080,transformOrigin:"left 50%",delay:2});
                TweenLite.to(rightOverlay2,3,{rotation:900,transformOrigin:"right 50%",delay:0});
                        }
                });

                }});  
                 }});

                        }
                        });
        }
        });
}

rotateSides(bgrightoverlay,bgleftoverlay,bgrightoverlay2);

let displayNewImg = ()=>{
        //bread img
        bgleft2.css('background-image',"url('/static/images/bg3.jpg')");
        //blud color
        bgleftoverlay.css('background-color','#0b4242');
        //aqua img
        bgright.css('background-image',"url('/static/images/bg4.jpg')");
        //dark red
        bgrightoverlay.css('background-color','#8c133c');      
}

let displayNewColor = () =>{
        bgrightoverlay.css('background-color','#8c133c');
        }

let rightDegrees = 180;

// let rotateRight = (rightDegrees) => {
//         TweenLite.to(rightOverlay2,3,{rotation:rightDegrees+180,transformOrigin:"right 50%",delay:0,onComplete:()=>{
// }