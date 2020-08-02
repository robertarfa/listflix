import React from 'react'
import { Field, Row, Input, Label, } from './styles.js'
import PropTypes from 'prop-types';

function FormField({ label, name, type, value, onChange }) {

  // const fieldId = `id_${name}`
  const tag = type === 'textarea' ? 'textarea' : 'input'

  return (
    <>
      <Field>
        <Row>
          <Label>
            <Input
              as={tag}
              name={name}
              type={type}
              value={value}
              onChange={onChange}
            />

            <Label.Text >
              {label}:
            </Label.Text>

          </Label>
        </Row>

      </Field>
    </>
  )
}

// function FormFieldTextArea({ rows, label, name, type, value, onChange }) {
//   return (
//     <>
//       <Field>


//         <Row>
//           <label>
//             {label}
//           </label>
//         </Row>

//         <Row>
//           <textarea
//             name={name}
//             type={type}
//             value={value}
//             onChange={onChange}
//             rows={rows}
//           />
//         </Row>

//       </Field>
//     </>
//   )
// }

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
}

FormField.protoTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

// FormFieldTextArea.defaultProps = {
//   type: 'text',
//   value: '',
//   onChange: () => { },
// }

// FormFieldTextArea.protoTypes = {
//   label: PropTypes.string.isRequired,
//   type: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// }

export { FormField }