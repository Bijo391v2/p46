
var bg,bgImg
var player,playerImg
var bullet,bulletImg
var enemy1,enemy1Img,enemy2,enemy2Img,enemy3,enemy3Img,enemy4,enemy4Img,enemy5,enemy5Img;
var base1,base2,base3,base4,baseImg;
var baseGroup;
var enemyGroup;

function preload(){
    bgImg=loadImage("Spacebackgroun.jpeg");
    playerImg=loadImage("Player.png")
    enemy1Img=loadImage("enemy1.png")
    enemy2Img=loadImage("enemy2.png")
    enemy3Img=loadImage("enemy3.png")
    enemy4Img=loadImage("enemy4.png")
    enemy5Img=loadImage("enemy5.png")
    baseImg=loadImage("Base.png")
}

function setup(){
    createCanvas(1000,800);
   
    
    player= createSprite(500,740);
    player.addImage(playerImg)
    player.scale=0.15
    
   // enemy1=createSprite()

   base1= createSprite(200,620)
   base1.addImage(baseImg)
   base1.scale=0.7;
   base2= createSprite(400,620)
   base2.addImage(baseImg)
   base2.scale=0.7;
   base3= createSprite(600,620)
   base3.addImage(baseImg)
   base3.scale=0.7;
   base4= createSprite(800,620)
   base4.addImage(baseImg)
   base4.scale=0.7;

   baseGroup=createGroup()
   baseGroup.add(base1)
   baseGroup.add(base2)
   baseGroup.add(base3)
   baseGroup.add(base4)
   bullet=createGroup()

   bulletGroup=createGroup();
   enemyGroup=createGroup();
   
  
   spawnEnemy()

   

}

function draw(){
    
    background("black"); 
    
    
   
    if(keyDown(RIGHT_ARROW)){
        player.x=player.x+7
    }
    if(keyDown(LEFT_ARROW)){
        player.x=player.x-7
    }
    if(keyWentDown("space")){
        shoot()
    }

    for(var j=0;j<baseGroup.length;j++){
        for(var i=0; i<bulletGroup.length;i++){
            if(bulletGroup[i].isTouching(baseGroup[j])){
                bulletGroup[i].destroy()
            }
        }
    }
   

    for(var j=0;j<enemyGroup.length;j++){
        for(var i=0;i<bulletGroup.length;i++){
            if(bulletGroup[i].isTouching(enemyGroup[j])){
                bulletGroup[i].destroy();
                enemyGroup[j].destroy();  
            }
        }
    }
    
    if(frameCount%20==0){
        enemyGroup.setVelocityXEach(1)
    }
    enemyGroup.setVelocityXEach(0)
    
  

    drawSprites();
}   

function shoot(){
  bullet=createSprite(player.x,740,5,13)
  bullet.shapeColor="white"
  bullet.velocityY=-25;
  bulletGroup.add(bullet)

}

function spawnEnemy(){
    for (var i=0; i<1000;i+=80){
        enemy1= createSprite(i,50)
        enemy1.addImage(enemy2Img)
        enemy1.scale=0.13;
        enemy2= createSprite(i+50,150)
        enemy2.addImage(enemy1Img)
        enemy2.scale=0.25;
        enemy3= createSprite(i,250)
        enemy3.addImage(enemy3Img)
        enemy3.scale=0.13;
        enemy4= createSprite(i+50,350)
        enemy4.addImage(enemy4Img)
        enemy4.scale=0.13;
        enemy5= createSprite(i,450)
        enemy5.addImage(enemy5Img)
        enemy5.scale=0.13;
        enemyGroup.add(enemy1);
        enemyGroup.add(enemy2);
        enemyGroup.add(enemy3);
        enemyGroup.add(enemy4);
        enemyGroup.add(enemy5); 
        
       }
}