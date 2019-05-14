const request = ({endpoint, body, method='POST', headers='application/json'}) => {
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
    .then(res => res.json())
  )
}

export default request