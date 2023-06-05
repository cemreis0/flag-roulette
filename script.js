const flag = document.querySelector(".flag")
const generateFlag = document.querySelector(".generateFlag")
const downloadFlag = document.querySelector(".downloadFlag")

generateFlag.addEventListener("click", () => {
  generateFlagFunc(flag)
})

downloadFlag.addEventListener("click", () => {
  downloadFlagFunc(flag)
})

const generateFlagFunc = (flag) => {
  const ctx= flag.getContext("2d")
  const width = flag.width
  const height = flag.height
  const properties = randomizeFlagPropertiesFunc()
  const star = new Image()
  star.src = "./svg/star.svg"
  const starLight = new Image()
  starLight.src = "./svg/star-light.svg"
  const starDavid = new Image()
  starDavid.src = "./svg/star-david.svg"
  const crescent = new Image()
  crescent.src = "./svg/crescent.svg"
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
  if (properties.star) {
    ctx.drawImage(star, width/2.25, height/2.25, width/8, height/8)
  } else if (properties.starLight) {
    ctx.drawImage(starLight, width/2.25, height/2.25, width/8, height/8)
  } else if (properties.starDavid) {
    ctx.drawImage(starDavid, width/2.25, height/2.25, width/8, height/8)
  } else if (properties.crescent) {
    ctx.drawImage(crescent, width/2.25, height/2.25, width/8, height/8)
  }
}

const downloadFlagFunc = (flag) => {
  const canvas = document.createElement('canvas')
  const width = 1000;
  const height = 600;
  canvas.width = width;
  canvas.height = height;
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
  const color = [
    "#FF0000", 
    "#FFA500", 
    "#008000", 
    "#0000FF", 
    "#FFFF00", 
    "#FF00FF", 
    "#000000", 
    "#FFFFFF", 
    "#FFD700", 
    "#800080", 
    "#FF4500", 
    "#00FF00", 
    "#000080", 
    "#008080", 
    "#C0C0C0", 
    "#FFC0CB", 
    "#008000", 
    "#FF69B4", 
    "#DC143C", 
    "#00FF7F", 
    "#800000", 
    "#00FFFF", 
    "#8B0000", 
    "#FFFF00", 
    "#0000FF", 
    "#FFD700", 
    "#FFA500", 
    "#FF0000", 
    "#000000", 
    "#FFFFFF", 
    "#008000", 
    "#FFD700", 
    "#C0C0C0", 
    "#FF8C00", 
    "#008000", 
    "#FF0000", 
    "#FFD700", 
    "#0000FF", 
    "#008000", 
    "#FF0000", 
    "#FF8C00", 
    "#FF4500", 
    "#0000FF", 
    "#008000", 
    "#FFD700", 
    "#C0C0C0", 
    "#FFFF00", 
    "#FF0000", 
    "#FFA500", 
    "#008000", 
    "#0000FF", 
    "#FFFF00", 
    "#FF00FF", 
    "#000000", 
    "#FFFFFF" 
  ];
  const randomColorIndex = Math.floor(Math.random() * color.length)
  const randomColor = color[randomColorIndex]
  return randomColor
}

const randomizeFlagPropertiesFunc = () => {
  let hasColumn = (Math.random() > 0.5 ? false : true)
  let hasRow = (Math.random() > 0.5 || hasColumn === true ? false : true)
  let hasStar = (Math.random() > 0.5 ? false : true)
  let hasStarDavid = (Math.random() > 0.5 ? false : true)
  let hasStarLight = (Math.random() > 0.5 ? false : true)
  let hasCrux = (Math.random() > 0.5 ? false : true)
  let hasCrescent = (Math.random() > 0.5 ? false : true)
  let column = 0
  let row = 0
  let star = 0
  let starDavid = 0
  let starLight = 0
  let crux = 0
  let crescent = 0
  if (hasColumn) {
    column = Math.floor(Math.random() * 6)
  }
  if (hasRow) {
    row = Math.floor(Math.random() * 6)
  }
  if (hasStar) {
    star = Math.floor(Math.random() * 6)
  }
  if (hasStarDavid) {
    starDavid = Math.floor(Math.random() * 6)
  }
  if (hasStarLight) {
    starLight = Math.floor(Math.random() * 6)
  }
  if (hasCrux) {
    crux = Math.floor(Math.random() * 6)
  }
  if (hasCrescent) {
    crescent = Math.floor(Math.random() * 6)
  }
  let properties = {
    "column": column,
    "row": row,
    "star": star,
    "starDavid": starDavid,
    "starLight": starLight,
    "crux": crux,
    "crescent": crescent
  }
  return properties
}