function getRandomColor() {
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`
}

window.onload = function () {
  const itemElements = document.querySelectorAll('.item')
  for (const item of itemElements) {
    item.style.backgroundColor = getRandomColor()
  }
}
