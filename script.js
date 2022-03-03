let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
]

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
  }
  randomQuote()

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  const mainTitle = document.getElementById('main-title')
  mainTitle.innerText = "Dom's Page"
  // Part 2
  document.body.style = 'background-color:#00a2ff'
  // Part 3
  const favoriteThings = document.querySelector('#favorite-things')
  favoriteThings.children[5].remove() //This was the hardest question.  I dont know if this is how you wanted it done, but I scoured the internet and learned that node lists are not arrays and need to be manipulated differently.  If i had any hair left on my head, this question would have made me rip it all out.
  // Part 4
  const specialTitle = document.querySelectorAll('.special-title')
  for (i = 0; i < specialTitle.length; i++) {
    specialTitle[i].style = 'font-size: 2rem'
  }
  // Part 5
  const pastRaces = document.querySelector('#past-races')
  pastRaces.children[3].remove()

  // Part 6
  const newRace = document.createElement('LI')
  newRace.innerText = 'River City'
  pastRaces.appendChild(newRace)

  // Part 7
  const main = document.querySelector('.main')
  const newBlogDiv = document.createElement('DIV')
  newBlogDiv.classList.add('blog-post')
  newBlogDiv.classList.add('purple')
  const newHead = document.createElement('h1')
  const newP = document.createElement('p')
  const headText = document.createTextNode('River City')
  const pText = document.createTextNode('I drove real fast!')
  newHead.appendChild(headText)
  newP.appendChild(pText)
  newBlogDiv.appendChild(newHead)
  newBlogDiv.appendChild(newP)
  main.appendChild(newBlogDiv)
}
