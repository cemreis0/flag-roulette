const flag = document.querySelector(".flag")
const generateFlag = document.querySelector(".generateFlag")
const downloadFlag = document.querySelector(".downloadFlag")

generateFlag.addEventListener("click", () => {
  generateFlagFunc(flag)
})

downloadFlag.addEventListener("click", () => {
  downloadFlagFunc(flag)
})

const generateRandomColorFunc = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  const randomColor = `rgb(${red}, ${green}, ${blue})`
  return randomColor
}

const generateFlagFunc = (flag) => {
  const canvasContext= flag.getContext("2d")
  canvasContext.fillStyle = generateRandomColorFunc()
  canvasContext.fillRect(0, 0, flag.width/3, flag.height)
  canvasContext.fillStyle = generateRandomColorFunc()
  canvasContext.fillRect(flag.width/3, 0, flag.width/3, flag.height)
  canvasContext.fillStyle = generateRandomColorFunc()
  canvasContext.fillRect(flag.width/3*2, 0, flag.width/3, flag.height)
}

const downloadFlagFunc = (flag) => {
  const canvas = document.createElement('canvas')
  const width = 1000;
  const height = 600;
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d')
  context.drawImage(flag, 0, 0, width, height)
  const dataURL = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream')
  const anchor = document.createElement('a')
  const filename = 'flag.jpeg'
  anchor.setAttribute('href', dataURL)
  anchor.setAttribute('download', filename)
  anchor.click()
}