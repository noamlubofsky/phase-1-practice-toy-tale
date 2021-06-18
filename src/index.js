const toyFormContainer = document.querySelector(".container");
const toyCards = document.getElementById("toy-collection")


document.addEventListener('DOMContentLoaded', () => {

  fetch(`http://localhost:3000/toys`)
  .then(res => res.json())
  .then(toys => toys.forEach(renderToyTile))

  const renderToyTile = (toy) => {

    const toyClass = document.createElement('div')
    toyClass.className = 'card'

    const toyName = document.createElement('h2')
    toyName.innerText = toy.name

    const toyImage = document.createElement('img')
    toyImage.src = toy.image
    toyImage.className = "toy-avatar"

    const toyLikes = document.createElement('p')
    toyLikes.innerText = toy.likes

    const toyButton = document.createElement('button')
    toyButton.class = "#like-btn"
    toyButton.id = toy.id
    toyButton.innerText = "Like <3"

    toyCards.append(toyClass)

    toyClass.append(toyName, toyImage, toyLikes, toyButton)
  }

  toyFormContainer.addEventListener("submit", function(e){
    e.preventDefault()
    const toyName = e.target.name.value
    const toyImage = e.target.image.value

    fetch(`http://localhost:3000/toys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: toyName,
        image: toyImage,
        likes: 0
      })
    })
    .then(res => res.json())
    .then(newToy => {
      toyCards.appendChild(renderToyTile(newToy))
    })
    
  })

  toyFormContainer.addEventListener("click", (e) => {
    if (e.target.id === "addlike") {
      console.log(e.target.previousSibling)
    }
  })

})


// const newToyName = document.getElementById("name-input").value
// const newToyURL = document.getElementById("url-input").value

// const newToyImage = 
//   fetch(newToyURL)
//   .then(res => res.json())
//   .then(data => console.log(data))

// const makeNewToy = toyClass.append(newToyName, newToyImage)

// const newToyButton = container.getElementById("submit")

// newToyButton.addEventListener('click', makeNewToy)









let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
