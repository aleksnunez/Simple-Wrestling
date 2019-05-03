const safeMap = (data, func) => {
  if (Array.isArray(data)) {
    return data.map(func)
  }
  return [].map(func)
}

export default safeMap
