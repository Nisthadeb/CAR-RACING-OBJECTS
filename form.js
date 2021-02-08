class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("CAR RaCiNg GAME");
        title.position(130,0);
        var input = createInput("PLAYER NAME");
        var button = createButton("pLaY");
        input.position(130,160);
        button.position(160,190);
        button.mousePressed(function(){
            input.hide();
            button.hide();
               var name = input.value();
               playerCount += 1;
               player.update(name)
               player.updateCount(playerCount);
               var greeting = createElement('h3');
               greeting.html('BEST OF LUCK '+name);
               greeting.position(130,160);

        })
            
    }


}
