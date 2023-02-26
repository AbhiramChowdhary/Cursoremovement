document.addEventListener("mousemove",function(mouse)
{
    let screenX=mouse.clientX;
    let screenY=mouse.clientY;
    let img=document.getElementById("img")
    img.style.marginLeft=screenX+"px"
    img.style.marginTop=screenY+"px"
    console.log(mouse);
    
 
})
 