import { SVG_NS, KEYS } from '../settings';

import Board from './Board';

import Paddle from './Paddle';

import Ball from './Ball';

import Score from './Score';

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(this.element)
		this.boardGap = 10;
		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.radius = 100;
		this.pause = false;

		this.board = new Board(this.width, this.height);

		this.paddle1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			((this.height - this.paddleHeight) / 2),
			KEYS.a,
			KEYS.z
		);

		this.paddle2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			(this.width - this.boardGap - this.paddleWidth),
			((this.height - this.paddleHeight) / 2),
			KEYS.up,
			KEYS.down
		);

		this.score1 = new Score(this.width / 2 - 50, 30, 30);
		this.score2 = new Score(this.width / 2 + 45, 30, 30);

		this.ball = new Ball(this.radius, this.width, this.height);
		this.ball2 = new Ball(this.radius, this.width, this.height);

		document.addEventListener('keydown', event => {
			switch (event.keyCode) {
				case KEYS.n:
					this.ball2 = new Ball(8, this.width, this.height);
					break;
				case KEYS.m:
					this.ball2 = new Ball();
					break;
			}
		});

		 document.addEventListener('keydown', event => {
			switch (event.keyCode) {
				case KEYS.spaceBar:
					this.pause = !this.pause;
					break;
      		}
    	});
	}

	render() {

		if(this.pause){
			return;
		}

		this.gameElement.innerHTML = '';

		let svg = document.createElementNS( SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height',this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);

		this.board.render(svg);
		this.ball.render(svg, this.paddle1, this.paddle2);
		this.ball2.render(svg, this.paddle1, this.paddle2);
		
		this.paddle1.render(svg);
		this.paddle2.render(svg);

		this.score1.render(svg, this.paddle1.score);
		this.score2.render(svg, this.paddle2.score);

	}

}