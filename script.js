const flag = document.querySelector(".flag")
const generateFlag = document.querySelector(".generateFlag")

generateFlagFunc(flag)

generateFlag.addEventListener("click", function () {
  generateFlagFunc(flag)
})

function generateFlagFunc(flag) {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  flag.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}