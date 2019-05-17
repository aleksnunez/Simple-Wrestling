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

  const addRow = () => {
    const generateRow = () => ({name: '', age: '', weight: ''})
    const copyRow = oldForm => {
      const clearValues = (acc, curr) => ({...acc, [curr]: ''})
      return Object.keys(oldForm[oldForm.length - 1]).reduce(clearValues, {})
    }

    const oldForm = Object.values(form)
    const newRow = oldForm.length === 0 ? generateRow() : copyRow(oldForm)

    setForm({...[...Object.values(form), newRow]})
  }

  return (
    <Wrapper>
      <SideBar links={teams} location={'coach'} />
      <Table title={name ? `${name} Roster` : '...'}
        data={form} {...{onChange, removeRow, addRow}} />
      <Button onClick={displayForm}>Save Roster</Button>
    </Wrapper>
  )
}

export default Roster
