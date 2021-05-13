// Some random colors

const effectBalls = {
  colors: ['#FFFFFF', '#F9FAFB', '#F3F4F6', '#E5E7EB', '#D1D5DB'],
  numBalls: 50,
  balls: [],
  init () {
    for (let i = 0; i < this.numBalls; i++) {
      const ball = document.createElement('div')
      ball.classList.add('ball')
      ball.style.background = this.colors[Math.floor(Math.random() * this.colors.length)]
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`
      ball.style.transform = `scale(${Math.random()})`
      ball.style.width = `${Math.random()}em`
      ball.style.height = ball.style.width
      this.balls.push(ball)
      document.body.append(ball)
    }
    this.balls.forEach((el, i, ra) => {
      const to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
      }

      el.animate(
        [
          { transform: 'translate(0, 0)' },
          { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
          duration: (Math.random() + 1) * 10000, // random duration
          direction: 'alternate',
          fill: 'both',
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      )
    })
  }
}

export default effectBalls
