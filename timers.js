class Timer {
    constructor(name) {
        this.name = name;
        this.count = 0;
    }

    start() {
        this.intervalId = setInterval(this.tick.bind(this), 1000);
    }

    tick() {
        this.count++;
        console.log(`${this.name}: ${this.count}`);
        if(this.count === 5) {
            this.stop();
        }
    }

    stop() {
        clearInterval(this.intervalId);
        this.count = 0;
    }
}

let timer = new Timer('My Timer');
timer.start();
console.log(timer);