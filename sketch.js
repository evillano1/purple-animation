
// let ball1 ={x: 200, y:500, size: 40, vx: 9, vy:9, color:[119, 3, 252]}
// let ball2 ={x: 300, y:400, size: 40, vx: 9, vy:9, color:[119, 3, 252]}
// let ball3 ={x: 400, y:300, size: 40, vx: 9, vy:9, color:[119, 3, 252]}
// let ball4 ={x: 500, y:200, size: 40, vx: 9, vy:9, color:[119, 3, 252]}

let ball1

let bouncing_balls = []


function setup() {

    // create a canvas that fills the browser window and attach it to your HTML
    createCanvas(windowWidth, windowHeight).parent('p5')
    // the p5 variables "width" and "height" hold the dimensions of the canvas

ball1 ={x: 400, y:600, size: 60, vx: 9, vy:9, color:[250, 250, 175]}

// ball2 ={x: 400, y:100, size: 30, vx: 3, vy: 4, color:[219, 219, 96]}


for (let i=0; i<60; i++) {

  let random_ball = {x:random(0, width),
                      y:random(0, height),
                      size:random(1, 15),
                      vx:random(1, 10),
                      vy:random(1, 10),
                      color:[random(125, 255), random(0, 255), 252, random(50, 255)],
                      angle: random(0, 360)}

    bouncing_balls.push(random_ball)
    }

}

function draw() {

    // background(255, 255, 200)

    let ball = ball1

    noStroke()
    fill(ball.color)
    circle(ball.x, ball.y, ball.size)

    ball.x = ball.x + ball.vx

    if (ball.x >= width){
      ball.vx = -ball.vx
    }

    if (ball.x <= 0){
      ball.vx = -ball.vx
    }


    ball.vy = ball.vy + .2 //gravity

    ball.y = ball.y + ball.vy

    if (ball.y >= height){
      ball.vy = -ball.vy * 1 //bounce
    }

    if (ball.y <= 0){
      ball.vy = -ball.vy
    }



    //
    // noStroke()
    // fill(ball2.color)
    // circle(ball2.x, ball2.y, ball2.size)
    //
    // ball2.x = ball2.x + ball2.vx
    //
    // if (ball2.x >= width){
    //   ball2.vx = -ball2.vx
    // }
    //
    // if (ball2.x <= 0){
    //   ball2.vx = -ball2.vx
    // }
    //
    //
    // ball2.vy = ball2.vy + 1 //gravity
    //
    // ball2.y = ball2.y + ball2.vy
    //
    // if (ball2.y >= height){
    //   ball2.vy = -ball2.vy * .5 //bounce
    // }
    //
    // if (ball2.y <= 0){
    //   ball2.vy = -ball2.vy
    // }



for (let ball of bouncing_balls) {

  // increase in size
  // if (ball.size<200) {
  //     ball.size = ball.size + 1}


  //drunk walk
  ball.x = ball.x + random(-4, 4)
  ball.y = ball.y + random(-4, 4)


  //draw
  angleMode(DEGREES)
  ball.x += ball.vx * cos(ball.angle)
  ball.y += ball.vy * sin(ball.angle)
  ball.angle += 1



    noStroke()
    fill(ball.color)
    circle(ball.x, ball.y, ball.size)


    ball.x = ball.x + ball.vx

    if (ball.x >= width){
      ball.vx = -ball.vx
    }

    if (ball.x <= 0){
      ball.vx = -ball.vx
    }


    ball.vy = ball.vy + .2 //gravity

    ball.y = ball.y + ball.vy

    if (ball.y >= height){
      ball.vy = -ball.vy * 1
    }

    if (ball.y <= 0){
      ball.vy = -ball.vy
    }


    for (let other_ball of bouncing_balls) {
            if (other_ball != ball) {   // don't compare with itself!

                // how close do they have to be to touch?
                let touching = abs(ball.size/2 + other_ball.size/2)

                // how far apart are they now?
                let distance = dist(ball.x, ball.y, other_ball.x, other_ball.y)

                // if theyre touching, bounce them
                // (not real physics, but close enough for now)
                if (distance <= touching) {
                    ball.vx *= -1
                    ball.vy *= -1
                    ball.x += ball.vx
                    ball.y += ball.vy
                }
                }
              }

}
}
// //BALL3
//     circle(ball3.x, ball3.y, ball3.size)
//     ball3.x = ball3.x + ball3.vx
//
//     if (ball3.x >= width){
//       ball3.vx = -ball3.vx
//     }
//
//     if (ball3.x <= 0){
//       ball3.vx = -ball3.vx
//     }
//
//
//     ball3.y = ball3.y + ball3.vy
//
//     if (ball3.y >= height){
//       ball3.vy = -ball3.vy
//     }
//
//     if (ball3.y <= 0){
//       ball3.vy = -ball3.vy
//     }



// if the window is resized, resize the canvas to match
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
