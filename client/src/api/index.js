const request = (
  {endpoint, body, method='POST', headers='application/json'},
  handleErrors=defaultHandleErrrors) => {
  const newHeaders = new Headers()

  if (headers) {
    newHeaders.append('Content-Type', headers)
  }

  return (
    fetch(endpoint, {
      method: method,
      headers: newHeaders,
      body: body
    })
    .then(res => handleErrors(res))
    .then(res => res.json())
  )
}

const defaultHandleErrrors = res => {
  return res.status === 200 ? res : new Error(res)
}

export default request
