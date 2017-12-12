import main from './sass/main.scss';
import $ from 'jquery';
import {TweenLite} from "gsap";

//Description text
let desctext = $(".desc-text")
let desctexttitle = $(".desc-text__title")
let desctextsubtitle = $(".desc-text__subtitle")

//Changing Colors
let bgrightoverlay = $(".right-img-1-overlay"); 
let bgleftoverlay = $(".left-img-1-overlay");

//Changing Images
let bgright = $(".right-img-1"); 
let bgleft = $(".left-img-1");

//ColorsArray
let colorsArray = [
'#a8d3ae',
'#ee788e',
'#8c133c',
'#0b4242',
'#1d1d1b',
'#eb655e',
'#044638',
'#bd9559',
'#c9a228',
'#e1c7a3',
'#30529b',
'#21263a',
'#a8d3ae'];


//ImagesArray
let imagesArray = [
'/static/images/bg1.jpg',
'/static/images/bg2.jpg',
'/static/images/bg3.jpg',
'/static/images/bg4.jpg',
'/static/images/bg5.jpg',
'/static/images/bg6.jpg',
'/static/images/bg7.jpg',
'/static/images/bg8.jpg',
'/static/images/bg9.jpg',
'/static/images/bg10.jpg',
'/static/images/bg11.jpg',
'/static/images/bg12.jpg',
'/static/images/bg1.jpg']

let titlesArray =[
'Welcome',
'Sebastian Mendez',
'Brenda Owens',
'Robyn Fields',
'Amy Wallace',
'Colin Burns',
'Ramon Solis',
'Brianna Quinn',
'Xavier Hogan',
'Aimee Hines',
'Cristina Lyons',
'Bruce Marsh',
'Giselle Rojas'
]


let subtitlesArray =[
    '',
    ' project 1',
    ' project 2',
    ' project 3',
    ' project 4',
    ' project 5',
    ' project 6',
    ' project 7',
    ' project 8',
    ' project 9',
    ' project 10',
    ' project 11',
    ' project 12',
]

//counter and rotation angle
let rdegrees = 180;
let counter = 0;

let rotateSides = (counter,rdegrees)=>{
    // TweenLite.fromTo(desctext,1,{opacity:1},{opacity:0,delay:1});
    TweenLite.to(bgleftoverlay,1,{rotation:rdegrees,transformOrigin:"left 50%",delay:3,onComplete:()=>
        {              
             //switch to next colors & images 
                if (counter%2===0)
                {
                    bgleft.css('background-image',"url("+imagesArray[counter]+")")
                    desctext.css('left','5vw'); 
                    desctext.css('display','block');
                    desctexttitle.text(titlesArray[counter]);
                    desctextsubtitle.text(subtitlesArray[counter]);
                    TweenLite.fromTo(desctext,1,{opacity:0},{opacity:1,delay:0,onComplete:()=>
                    { TweenLite.fromTo(desctext,1,{opacity:1},{opacity:0,delay:1});}});

                }
                else
                    {
                        TweenLite.fromTo(desctext,1,{opacity:1},{opacity:0,delay:1});
                        bgleftoverlay.css('background-color',colorsArray[counter])
                        
                    }
            TweenLite.to(bgrightoverlay,1,{rotation:rdegrees,transformOrigin:"right 50%",delay:2,onComplete:()=>
            {    
                
                if (counter%2===0)
                {
                   bgrightoverlay.css('background-color',colorsArray[counter])
                }             
                else
                {
                    TweenLite.fromTo(desctext,1,{opacity:0},{opacity:1,delay:0,onComplete:()=>
                    { TweenLite.fromTo(desctext,1,{opacity:1},{opacity:0,delay:1});}});
                    desctexttitle.text(titlesArray[counter]);
                    desctextsubtitle.text(subtitlesArray[counter]);
                    desctext.css('left','55vw'); 
                    desctext.css('display','block');
                    bgright.css('background-image',"url("+imagesArray[counter]+")")
                }                
            }});

            if (counter<12)
                    counter++
                else
                    counter=1
            rdegrees+=180;
            rotateSides(counter,rdegrees);
        }
        });
}

//Start
rotateSides(counter,rdegrees);
