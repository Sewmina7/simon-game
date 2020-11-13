var order = [];
var progress = 0;

//1 = red
//2 = green
//3 = blue
//4 = yellow
$('body').keypress(function(event){
    startShit();
});


$('h1').click(function(){
    startShit();
});

function startShit(){
    if(order.length>0){return;}

    //alert(event.key);

    $('.title').text("Level 1");
    var nextShit = Math.ceil(Math.random() * 4);
    order = [nextShit];
    showShit(nextShit);
}

function showShit(id){
    playSound(id);
    switch(id){
        case 1:
            $('.red').animate({opacity:0}).animate({opacity:1});
            
            break;

        case 2:
            $('.green').animate({opacity:0}).animate({opacity:1});
            break;

        case 3:
            $('.blue').animate({opacity:0}).animate({opacity:1});
            break;

        case 4:
            $('.yellow').animate({opacity:0}).animate({opacity:1});
            break;
    }
}

function playSound(id){
    var audio = new Audio("sounds/"+id+".mp3");
    audio.play();
}

function reset(){
    order= [];
    $('.title').text("GAME OVER!!! Press any key to restart");
    var defCol = $('body').css("background-color");
    $('body').css("background-color","#992020");
    playSound('wrong');

    setTimeout(()=>{$('body').css("background-color",defCol);},1000);

}

function checkShit(id){
    if(order.length>0){
        if(order[progress] == id){
            //correct, next

            playSound(id);
            if(progress+1 < order.length){
                progress++;
            }else{
                var nextShit = Math.ceil(Math.random() * 4);
                order.push(nextShit);
                setTimeout(()=>{showShit(nextShit);},1000);
                $('.title').text("Level "+order.length);
                progress=0;
            }
        }else{
            reset();
        }
    }else{
        reset();
    }
}

$('.red').click(function(){
   // $('.red').animate({opacity:0.5}).animate({opacity:1});
    
    document.getElementsByClassName("red")[0].classList.add("pressed");

    setTimeout(()=>{document.getElementsByClassName("red")[0].classList.remove("pressed");},150);
    checkShit(1);
});

$('.green').click(function(){
    //$('.green').animate({opacity:0.5}).animate({opacity:1});
    document.getElementsByClassName("green")[0].classList.add("pressed");

    setTimeout(()=>{document.getElementsByClassName("green")[0].classList.remove("pressed");},150);
    checkShit(2);
});

$('.yellow').click(function(){
   // $('.yellow').animate({opacity:0.5}).animate({opacity:1});
   document.getElementsByClassName("yellow")[0].classList.add("pressed");

    setTimeout(()=>{document.getElementsByClassName("yellow")[0].classList.remove("pressed");},150); 
   checkShit(4);
});

$('.blue').click(function(){
    //$('.blue').animate({opacity:0.5}).animate({opacity:1});
    document.getElementsByClassName("blue")[0].classList.add("pressed");

    setTimeout(()=>{document.getElementsByClassName("blue")[0].classList.remove("pressed");},150);
    checkShit(3);
});