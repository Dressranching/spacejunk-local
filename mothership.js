class Mothership {
  static WIDTH = 50;
  static HEIGHT = 20;
  static PICKUP_DIAMETER = Mothership.WIDTH * 1.2;
  static CORNER_RADIUS = 8;
  static NUM_PORTHOLES = 4;
  static PORTHOLE_DIAMETER = 6;

  physics;

  constructor() {
    this.physics = new Physics();
  }

  draw() {
    push();
    drawEverywhere({
      offset: this.physics,
      drawFn: () => {
        Mothership.drawMothership({ rotation: this.physics.rotation });
        if (game.debug) {
          this.physics.draw();
          noFill();
          stroke("#fff");
          circle(0, 0, Mothership.PICKUP_DIAMETER);
        }
      },
    });
    pop();
  }

  /**
   * Draws the Mothership's shape around (0, 0). Assumes the caller has
   * already moved the transform to wherever the Mothership should appear.
   **/
  static drawMothership({ rotation }) {
    // TODO (Phase 1): Replace the placeholder with the Mothership: a rounded
    // rectangle, Mothership.WIDTH by Mothership.HEIGHT, with a row of
    // Mothership.NUM_PORTHOLES evenly spaced circular windows along the
    // middle. Draw it around (0, 0), rotated by `rotation`.
    push();
    rotate(rotation);
    let w = Mothership.WIDTH;
    let h = Mothership.HEIGHT;

    noStroke();
    fill('#6a1b5d');
    let r = Mothership.CORNER_RADIUS;
    rect(-w/2, -h/2, w, h, r, r, r, r);
    let x = -w/2 + 2*Mothership.PORTHOLE_DIAMETER;
    for (let i = 0; i < Mothership.NUM_PORTHOLES; i++) {
      fill('#92ebf3')
      circle(x, 0, 6);
      x += Mothership.PORTHOLE_DIAMETER + Mothership.PORTHOLE_DIAMETER/2;
    }
    
    pop();
  }

  move(delta) {
    this.physics.move(delta, { constrain: true });
  }
}
