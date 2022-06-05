import React from 'react'

export default function Student(props) {
    let allStudent = props.student.map(e =>{
        return e })
  return (
    <div>
        <h2>{allStudent[props.number].name}</h2>
        <p>{allStudent[props.number].bio}</p>
    </div>
  )
}
