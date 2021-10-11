const input = document.getElementById('favChap')
const addButton = document.querySelector('button')
const list = document.querySelector('ul')

let favoriteChapters = []

addButton.addEventListener('click', (e) => {
  if (input.value.trim()) {
    addToList(input.value)
    input.value = ''
    input.focus()
  }
})

const addToList = (chapter) => {
  if (!favoriteChapters.includes(chapter)) {
    favoriteChapters.push(chapter)
    updateList()
  }
}

const removeFromList = (chapter) => {
  console.log(chapter)
  favoriteChapters = favoriteChapters.filter((curr) => curr != chapter)
  updateList()
}

const updateList = () => {
  list.innerHTML = favoriteChapters
    .map(
      (chapter) => `<li>
        <p>${chapter}</p>
        <button type="button" onclick="removeFromList('${chapter}')">
          ❌
        </button>
      </li>`
    )
    .join('')
}
