import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

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
  const { name, data, links, location, defaultRow } = props

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

  const save = (e) => {
    e.preventDefault()
    // console.log('saving')
    // console.log('body', Object.values(form))
    request({
      endpoint: '/api/coachTeamRegisteration/updateTeamroster',
      body: Object.values(form)
    })
      .then(res => console.log(res))
      .catch(err => new Error(err))
  }

  const removeRow = row => {
    delete form[row]
    setForm({...Object.values(form)})
  }

  const addRow = (e) => {
    e.preventDefault()
    setForm({...[...Object.values(form), defaultRow]})
  }

  return (
    <Form>
      <SideBar {...{location, links}} />
      <Table title={name ? `${name} Dashboard` : '...'}
        data={form} {...{onChange, removeRow, addRow, save}} />
    </Form>
  )
}

export default Spreadsheet
