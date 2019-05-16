import React, { useState, useEffect } from 'react'

import Button from 'components/button'
import { Wrapper, SideBar, Table } from '../'

const Roster = props => {
  const { name, roster, teams } = props

  const [form, setForm] = useState({})
  useEffect(() => {
    setForm({...form, ...roster})
  }, [roster])

  const onChange = (e) => {
    const { row, col } = e.target.dataset
    const { value } = e.target

    setForm({
      ...form,
      [row]: {
        ...form[row],
        [col.toLowerCase()]: value
      }
    })
  }

  const displayForm = (e) => {
    e.preventDefault()
    console.log(form)
  }

  const removeRow = row => {
    delete form[row]
    setForm({...Object.values(form)})
  }

  return (
    <Wrapper>
      <SideBar links={teams} location={'coach'} />
      <Table title={name ? `${name} Roster` : '...'}
        data={form} {...{onChange, removeRow}} />
      <Button onClick={displayForm}>Save Roster</Button>
    </Wrapper>
  )
}

export default Roster
