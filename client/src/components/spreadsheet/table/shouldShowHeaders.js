const headerReducer = (acc, row) => {
  const id = JSON.stringify(Object.keys(row))
  return {
    previous: id,
    results: [...acc.results, (id !== acc.previous)]
  }
}

const shouldShowHeaders = data => Object.values(data)
  .reduce(headerReducer, {previous: {}, results: []}).results

export default shouldShowHeaders
