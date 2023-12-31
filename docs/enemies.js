class Enemies {   
    constructor(gameScreen, directionX, directionY, width, height, grow) {
        this.gameScreen = gameScreen;
        this.element = document.createElement("img");
        this.element.src = "./images/275592.gif";
        this.left = Math.random() * (this.gameScreen.offsetWidth - 60);
        this.top = 50;
        this.width = width;
        this.height = height;
        this.grow = grow;
        this.element.style.position = "absolute";
        this.element.style.left = `${this.left}px`;
        this.element.style.marginTop = "-200px";
        this.gameScreen.appendChild(this.element);
        this.directionX = directionX;
        this.directionY = directionY;
        this.boundaryX = this.gameScreen.offsetWidth - this.width;
        this.boundaryY = this.gameScreen.offsetHeight + 200 - this.height;
        this.move();

    }
        
    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    move() {
        if (this.left <= 0) {
            this.directionX = Math.abs(this.directionX);
        } else if (this.left + this.width>= this.boundaryX) {
            this.directionX = -Math.abs(this.directionX)
        }

        if (this.top <= 200) {
            this.directionY = Math.abs(this.directionY);
        } else if (this.top + this.height >= this.boundaryY) {
            this.directionY = -Math.abs(this.directionY);
        }
        this.width *= this.grow;
        this.height *= this.grow;
        this.left += this.directionX;
        this.top += this.directionY;
        this.updatePosition();
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        requestAnimationFrame(() => this.move());
    }
}

