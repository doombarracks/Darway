<!-- 
var whichlink=0 
var whichimage=0 
var pixeldelay=(ie55)? document.images.slide.filters[0].duration*1000 : 0 
function slideit(){ 
if (!document.images) return 
if (ie55) document.images.slide.filters[0].apply() 
document.images.slide.src=imageholder[whichimage].src 
if (ie55) document.images.slide.filters[0].play() 
whichlink=whichimage 
whichimage=(whichimage<slideimages.length-1)? whichimage+1 : 0 
setTimeout("slideit()",slidespeed+pixeldelay) 
} 
slideit() 
--> 