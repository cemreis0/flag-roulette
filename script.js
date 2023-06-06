const flag = document.querySelector('.flag')
const generateFlag = document.querySelector('.generateFlag')
const downloadFlag = document.querySelector('.downloadFlag')

generateFlag.addEventListener('click', () => {
  generateFlagFunc(flag)
})

downloadFlag.addEventListener('click', () => {
  downloadFlagFunc(flag)
})

const generateFlagFunc = (flag) => {
  const ctx= flag.getContext('2d')
  const width = flag.width
  const height = flag.height

  const properties = randomizeFlagPropertiesFunc()
  if (properties.column) {
    for (let c = 0; c <= properties.column; c++) {
      ctx.fillStyle = generateRandomColorFunc()
      ctx.fillRect((width / properties.column) * c, 0, width/properties.column, height)
    }
  } else if (properties.row) {
      for (let r = 0; r <= properties.row; r++) {
        ctx.fillStyle = generateRandomColorFunc()
        ctx.fillRect(0, (height / properties.row) * r, width, height/properties.row)
      }
  } else {
    ctx.fillStyle = generateRandomColorFunc()
    ctx.fillRect(0, 0, width, height) 
  }

  const star = new Image()
  const starLight = new Image()
  const starDavid = new Image()
  const crescent = new Image()
  const crescentLight = new Image()
  star.src = './svg/star.svg'
  starLight.src = './svg/star-light.svg'
  starDavid.src = './svg/star-david.svg'
  crescent.src = './svg/crescent.svg'
  crescentLight.src = './svg/crescent-light.svg'
  star.onload = function () {
    if (properties.star) {
      ctx.drawImage(star, width/2-star.width/3, height/2-star.height/3, star.width/1.5, star.height/1.5)
    } else if (properties.starLight) {
      ctx.drawImage(starLight, width/2-star.width/3, height/2-star.height/3, starLight.width/1.5, starLight.height/1.5)
    } else if (properties.starDavid) {
      ctx.drawImage(starDavid, width/2-star.width/3, height/2-star.height/3, starDavid.width/1.5, starDavid.height/1.5)
    } else if (properties.crescent) {
      ctx.drawImage(crescent, width/2-star.width/3, 0, crescent.width/1.5, crescent.height/1.5)
    } else if (properties.crescentLight) {
      ctx.drawImage(crescent, width/2-star.width/3, 0, crescent.width/1.5, crescent.height/1.5)
    }
  }
}

const downloadFlagFunc = (flag) => {
  const canvas = document.createElement('canvas')
  const width = 1000
  const height = 600
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  ctx.drawImage(flag, 0, 0, width, height)
  const dataURL = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream')
  const anchor = document.createElement('a')
  const filename = 'flag.jpeg'
  anchor.setAttribute('href', dataURL)
  anchor.setAttribute('download', filename)
  anchor.click()
}

const generateRandomColorFunc = () => {
  const red = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const randomColor = `rgb(${red}, ${blue}, ${green})`
  return randomColor
}

const randomizeFlagPropertiesFunc = () => {
  const column = Math.floor(Math.random() * 6)
  const row = Math.floor(Math.random() * 6)
  const star = Math.floor(Math.random() * 2)
  const starDavid = Math.floor(Math.random() * 2)
  const starLight = Math.floor(Math.random() * 2)
  const crescent = Math.floor(Math.random() * 2)
  const crescentLight = Math.floor(Math.random() * 2)
  const properties = {
    column,
    row,
    star,
    starDavid,
    starLight,
    crescent,
    crescentLight
  }
  return properties
}
