# Pong Game

A basic pong game using SVGs.

## Setup

**Install:**

`> npm i`

**Run:**

`> npm start`

## Keys

**Player 1:**
* a: up
* z: down

**Player 2:**
* ▲ : up
* ▼: down


#README.MD

This pong game was a project for the week 6. We used basic javascript create this game but the the help of webpack we were able to partial our javascript files to make our code more module.
Webpacks also compiles everything into one js file. 
In each partial we have to create a SVG of the game pieces to then make them function.

*SVG*
SVG stands for Scalable Vector Graphics. SVG's are XML code which creates reference points to form the shape. We can create SVG's in html. In our Pong project we imbedded the SVG code into our javascript files with each game piece being an individual partial. SVG are vector based meaning they can be resized without any of the picture resolution lost.

*Board Partial*
With the board partials we broke things down by creating the game board itself. This contained two SVGs; the rectangle and the dotted lines as a divider. This game partials doesn't really do a whole lot but a surface for our other game pieces to function on.

*Ball*
The ball partial is a lot more complex. With in the ball partial we had to set the boundaries of where the ball can move and go. To do this we added a wall collision function. The ball also has to detect the paddle collision. So an If statement is passed though being if the ball hits paddle 1 versus else the ball hits paddle 2, the ball will bounce back according to the side of the radius that has made contact. The ball also has to register a goal function. When the ball passes either side of the board width, this will trigger a point for the player and the ball resets and starts in the centre of the board.

*Paddles*
Because we used classes in our Javascript we’re able to create multiple objects with same properties but different values. We can render two paddles with the same properties but they have different values. Such as our two paddles. one is located on the left and the other is on the right.

*Score*
The score class is quite simple. Like with all the other classes we still use SVG incase of scaling to keep consistent resolution. Later we can implement a score increment system where the number gets 1 added to it each time a player scores a point. This will happen in the Game.js

And to put this all together we use the Game class which contains all the codes to make this game function.

*Game*
The Game.js holds all the code to make the classes we created function. to call the other Classes we must Export from the individual classes and import them into here. This is similar to a central hub where all the pieces meet. Here we can call the class and give them actual meaning. This each piece we add in the game we must render them to show them in the game.