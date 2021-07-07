class Particles {
    constructor(x, y) {
        var options = {
            restitution: 0.7,
            friction: 0,
            //velocity: 1
            //isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(255, 0, 0), random(25, 25, 12), random(46, 139, 87));
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        //noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};