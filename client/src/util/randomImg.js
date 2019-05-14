const randomImg = (max = 200, min = 150) => {
  const seed = Math.round(Math.random() * (max - min) + min)
  return `https://picsum.photos/${seed}`
}

export default randomImg
