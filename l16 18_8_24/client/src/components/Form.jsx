import React, { cloneElement, useEffect, useState } from 'react'

const Form = ({ children = [], className, onSubmit = () => { } }) => {
  const [form, setForm] = useState({ name: "john" })
  const onChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputs = children.map(element => {
    if (element.type == "input") {
      return cloneElement(element, { onChange, value: form[element.props.name] || "", key: element.props.name })
    }
  }).filter(e => e != undefined)

  const labels = children.filter(element => element.type == "label")
  const button = children.find(element => element.type == "button")

  const handelSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }
  return (
    <form onSubmit={handelSubmit} className={className} >
      {labels.map((label, index) => {
        return (
          <>
            {label}
            {inputs[index]}
          </>
        )
      })}
      {button}
    </form>
  )
}

export default Form