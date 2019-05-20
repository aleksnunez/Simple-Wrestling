import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import lastOf from 'util/lastOf'
import Button from 'components/button'
import SideBar from './sideBar'
import Table from './table'

const Form = styled.form`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin: 1em 5vw;
`

const Spreadsheet = props => {
  const { name, data, links, location } = props

  const [form, setForm] = useState({})
  useEffect(() => {
    setForm({...form, ...data})
  }, [data])

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
    // form is converted to an array before spreading to reindex
    setForm({...Object.values(form)})
  }

  const addRow = () => {
    const defaultRow = () => ({name: '', age: '', weight: ''})
    const copyRow = oldForm => {
      const clearValues = (acc, curr) => ({...acc, [curr]: ''})
      return Object.keys(lastOf(oldForm)).reduce(clearValues, {})
    }

    const oldForm = Object.values(form)
    const newRow = oldForm.length === 0 ? defaultRow() : copyRow(oldForm)
    // form is converted to an array before spreading to reindex
    setForm({...[...oldForm, newRow]})
  }

  return (
    <Form>
      <SideBar {...{location, links}} />
      <Table title={name ? `${name} Dashboard` : '...'}
        data={form} {...{onChange, removeRow, addRow}} />
      <Button onClick={displayForm}>Save</Button>
    </Form>
  )
}

export default Spreadsheet
