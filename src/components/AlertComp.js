import { Alert } from 'react-bootstrap'
import React from 'react'



export default function AlertComp() {
  return (
    <Alert style={{ marginTop: "10px" }} variant="danger">
    Name or phone not be blank!
  </Alert>
  )
}
