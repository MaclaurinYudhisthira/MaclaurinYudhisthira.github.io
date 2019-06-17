let up=0,pos=0;
const gif=document.getElementById('gift');
if(innerWidth<=480)
{
    gif.addEventListener('click',myMove1)
    gif.style.color="red";
}
else
{
    gif.addEventListener('click',myMove);
    gif.style.color="yellow";
}

function myMove() {
    var elem = document.querySelector('.container'); 
    if(up==0)
    {
        var id = setInterval(frame, 5);
        up=1;
    }
    else
    {
        var id = setInterval(dframe, 5);
        up=0;
    }
    function frame() {
        if (pos == -46) {
            clearInterval(id);
        } else {
            pos--; 
            elem.style.marginTop = `${pos}px`; 
        }
    }
    function dframe() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.marginTop = `${pos}px`; 
        }
    }
}

function myMove1()
{
    console.log('df');
}