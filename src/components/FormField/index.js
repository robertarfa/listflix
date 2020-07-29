import React from 'react'
import { Field, Row } from './styles.js'

function FormField({ label, name, type, value, onChange }) {
  return (
    <>
      <Field>


        <Row>
          <label>
            {label}
          </label>
        </Row>

        <Row>
          <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
          />
        </Row>

      </Field>
    </>
  )
}

function FormFieldTextArea({ rows, label, name, type, value, onChange }) {
  return (
    <>
      <Field>


        <Row>
          <label>
            {label}
          </label>
        </Row>

        <Row>
          <textarea
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            rows={rows}
          />
        </Row>

      </Field>
    </>
  )
}

export { FormField, FormFieldTextArea }