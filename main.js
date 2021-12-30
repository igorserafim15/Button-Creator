const controles = document.getElementById('controles')
const cssTest = document.querySelector('.css')
const btn = document.querySelector('.btn')

controles.addEventListener('change', handleChange)

const handleStyle = {
  element: btn,
  text(value) {
    this.element.innerText = value
  },
  color(value) {
    this.element.style.color = value
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value
  },
  height(value) {
    this.element.style.height = value + 'px'
  },
  width(value) {
    this.element.style.width = value + 'px'
  },
  border(value) {
    this.element.style.border = value
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px'
  },
  fontFamily(value) {
    this.element.style.fontFamily = value
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'px'
  }
}

function handleChange(e) {
  const name = e.target.name
  const value = e.target.value
  handleStyle[name](value)
  saveValues(name, value)
  showCSS()
}

function showCSS() {
  cssTest.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>')
}

function saveValues(name, value) {
  localStorage[name] = value
}

function setValues() {
  const properties = Object.keys(localStorage)
  properties.forEach(propertie => {
    handleStyle[propertie](localStorage[propertie])
    controles.elements[propertie].value = localStorage[propertie]
  })
  showCSS()
}
setValues()