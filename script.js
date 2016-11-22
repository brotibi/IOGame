// Movement

function move(event){
var k = event.keyCode,
    chrId = document.getElementById('test'),
    chr = {
      updown: function (){
        var y = parseInt(getComputedStyle(chrId).top);
        if (k == 38) {
          y--;
        } else if (k == 40) {
          y++;
        }
        return y;
      },
       leftright: function() {
         var x = parseInt(getComputedStyle(chrId).left);
         if (k == 37) {
           x--;
         } else if (k == 39) {
           x++;
         }
         return x;
       }
    };
 chrId.style.top = (chr.updown()) + "px";
 chrId.style.left = (chr.left()leftright) + "px";
}
document.addEventListener('keydown',move);

var c = document.getElementsById('Canvas');
var ctx = c.getContext('2d');
ctx.lineWidth="6";
ctx.strokeStyle="red";
ctx.rect(20,20,150,100);
ctx.stroke();
