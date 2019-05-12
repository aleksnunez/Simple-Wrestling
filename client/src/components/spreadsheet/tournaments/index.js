import React, { useState, useEffect } from 'react'

import { Wrapper, SideBar, Table } from '../'

const Tournaments = props => {
  const { name, tournaments } = props

  const [form, setForm] = useState({})
  useEffect(() => {
    setForm({...form, ...tournaments})
  }, [tournaments])

  const onChange = (e) => {
    const { name, stat } = JSON.parse(e.target.name)
    const { value } = e.target
    setForm({
      ...form,
      [name]: {
        ...form[name],
        [stat.toLowerCase()]: value
      }
    })
  }

  return (
    <Wrapper>
      <SideBar
        links={["Northern California", "Southern California"]}
        location={'admin'} />
      <Table title={name ? `${name}` : '...'}
        data={form} {...{onChange}} />
    </Wrapper>
  )
}

export default Tournaments
