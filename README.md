# README.MD

This pong game was a project for the week 6. We used basic javascript create this game but the the help of webpack we were able to partial our javascript files to make our code more module.
Webpacks also compiles everything into one js file. 
In each partial we have to create a SVG of the game pieces to then make them function.

**SVG**
SVG stands for Scalable Vector Graphics. SVG's are XML code which creates reference points to form the shape. We can create SVG's in html. In our Pong project we imbedded the SVG code into our javascript files with each game piece being an individual partial. SVG are vector based meaning they can be resized without any of the picture resolution lost.

**Board Partial**
With the board partials we broke things down by creating the game board itself. This contained two SVGs; the rectangle and the dotted lines as a divider. This game partials doesn't really do a whole lot but a surface for our other game pieces to function on.
<img width="1680" alt="screen shot 2017-02-13 at 10 22 50 pm" src="https://cloud.githubusercontent.com/assets/24995518/22922635/73c8dbaa-f253-11e6-97cb-87d3fdd70842.png">
--

**Paddles**
Because we used classes in our Javascript we’re able to create multiple objects with same properties but different values. We can render two paddles with the same properties but they have different values. Such as our two paddles. one is located on the left and the other is on the right.
<img width="1680" alt="screen shot 2017-02-13 at 10 24 06 pm" src="https://cloud.githubusercontent.com/assets/24995518/22922578/3c12d742-f253-11e6-8f03-a3e8fab535be.png">
--

**Ball**
The ball partial is a lot more complex. With in the ball partial we had to set the boundaries of where the ball can move and go. To do this we added a wall collision function. The ball also has to detect the paddle collision. So an If statement is passed though being if the ball hits paddle 1 versus else the ball hits paddle 2, the ball will bounce back according to the side of the radius that has made contact. The ball also has to register a goal function. When the ball passes either side of the board width, this will trigger a point for the player and the ball resets and starts in the centre of the board.
<img width="1680" alt="screen shot 2017-02-13 at 10 24 19 pm" src="https://cloud.githubusercontent.com/assets/24995518/22922667/9245e7a8-f253-11e6-8d0d-532159f6718d.png">
--

**Score**
The score class is quite simple. Like with all the other classes we still use SVG incase of scaling to keep consistent resolution. Later we can implement a score increment system where the number gets 1 added to it each time a player scores a point. This will happen in the Game.js
<img width="1680" alt="screen shot 2017-02-12 at 12 34 15 pm" src="https://cloud.githubusercontent.com/assets/24995518/22922726/c1e4cd8a-f253-11e6-98a4-3c986d7b926a.png">
--

And to put this all together we use the Game class which contains all the codes to make this game function.

**Game**
The Game.js holds all the code to make the classes we created function. to call the other Classes we must Export from the individual classes and import them into here. This is similar to a central hub where all the pieces meet. Here we can call the class and give them actual meaning. This each piece we add in the game we must render them to show them in the game.

**Challenges**
February 14th, 2017
My first time creating a game and i have to say this was a challenging run. Most of the codes were straight forward to keep up with and the concept behind everything definitely more sense to me now that ive got more knowledge of javascript but ive also ran into some issues learning how to construct most codes and using some of the new syntax as well. as of today i was unable to implement new features to the game but i feel that with more practice ill be able to do so in the future. Ive definitely gained a new level of appreciation for game developers.

** UPDATE February 14th, 2017 1:03 pm
new function added in game allows us to create a new ball using the n key press and to remove ball we use the m key. I did this with an event listener in the game.js  that attaches the keys n and m so when these keys are pressed our new ball is rendered. The key codes were set in settings.js.

SVGs are alot of fun. learning how to build a basic vector shape is much more difficult than ive imagined. Especially coming from a graphics background using adobe illustrator is alot easier but understanding how to manually do this using html code is actually quite interesting. 

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

**New Ball**
* n: new ball
* m: remove ball

