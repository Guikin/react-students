import React from 'react'

export default function Scores(props) {
    let scores = props.student.map(e =>{
         return e.scores[props.number]
    })
  return (
    <div>
        <h4>Results:</h4>
        <table>
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Score</td>
                </tr>
            </thead>
            <tbody>
                {scores.map((values,index)=>{
                    return <tr key={index}>
                        <td >{values.date}</td>
                        <td >{values.score}</td>
                        </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
