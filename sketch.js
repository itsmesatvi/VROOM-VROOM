var wall1, wall2, wall3, wall4, player, playerimg, bad1, bad2, dot,dot1, dot2, dot3, dot4, dot5, dot6, car1, car1img, car2, car2img, score, gameState

function preload(){
    playerimg=loadImage("player.png")
    car1img=loadImage("car1.png")
    car2img=loadImage("car2.png")
    
}


function setup(){
    score = 0
    createCanvas(400,600)
    wall1 = createSprite(50,300,3,600);
    wall2 = createSprite(350,300,3,600);
    wall3 = createSprite(25,300,50,600);
    wall4 = createSprite(375,300,50,600)
    dot1 = createSprite(200,0,10,20)
    dot2 = createSprite(200,100,10,20)
    dot3 = createSprite(200,200,10,20)
    dot4 = createSprite(200,300,10,20)
    dot5 = createSprite(200,400,10,20)
    dot6 = createSprite(200,500,10,20)
    dot7 = createSprite(200,600,10,20)

    wall1.shapeColor="black"
    wall2.shapeColor="black"
    wall3.shapeColor="green"
    wall4.shapeColor="green"
    dot1.shapeColor="white"
    dot2.shapeColor="white"
    dot3.shapeColor="white"
    dot4.shapeColor="white"
    dot5.shapeColor="white"
    dot6.shapeColor="white"
    dot7.shapeColor="white"
    player = createSprite(200,500)
    player.addImage(playerimg)
    player.scale=.5
    car1 = createSprite(100,10)
    car1.addImage(car1img)
    car1.scale=0.2
    car1.velocityY= 6;
    car2 = createSprite(320,150)
    car2.addImage(car2img)
    car2.scale=0.26
    car2.velocityY= 9;
    player.setCollider("rectangle", 0,0,90,190)
    car2.setCollider("rectangle", 0,0,210,460)
    gameState="play"

}

function draw(){
    background("grey")

    if(gameState=="play"){
        if(frameCount % 20 ==0){
            dot1.y= dot1.y+50;
            dot2.y= dot2.y+50;
            dot3.y= dot3.y+50;
            dot4.y= dot4.y+50;
            dot5.y= dot5.y+50;
            dot6.y= dot6.y+50;
            dot7.y= dot7.y+50;
            
        }
        if(dot1.y>=600){
           dot1.y=0
        }
        if(dot2.y>=600){
            dot2.y=0 
        }
        if(dot3.y>=600){
            dot3.y=0
        }
        if(dot4.y>=600){
            dot4.y=0
        }
        if(dot5.y>=600){
            dot5.y=0 
        }
        if(dot6.y>=600){
            dot6.y=0 
        }
        if(dot7.y>=600){
            dot7.y=0 
        }
        if (keyDown("right") && player.x<340){
            player.x=player.x+5
        }
        if (keyDown("left") && player.x>50){
            player.x=player.x-5
        }
        if(car1.y>680){
            car1.x=random(90,310)
            car1.y=-5
            score=score+1
        }
        if(player.isTouching(car1)){
            gameState = "end"
        }
        if(car2.y>680){
            car2.x=random(90,310)
            car2.y=-5
            score=score+1
        }
        if(player.isTouching(car2)){
            gameState = "end"
        }
    }

    drawSprites()
    if(gameState=="end"){
       car1.velocityY = 0;
       car2.velocityY = 0;
       textSize(33)
       fill("red")
       text("OoPs U cAuSeD a CrAsH",10,300)
    }
    

    if(car1.isTouching(car2)){
        car1.y=680
    }

    
    
    fill("blue")
    textSize(25)
    text("Score = "+score ,130,30)
    

}
