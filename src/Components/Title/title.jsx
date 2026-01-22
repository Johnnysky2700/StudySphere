import React from 'react'
import './title.css'

// Passing 'subTitle' and 'title' as props to the component
const Title = ({ subTitle, title }) => {
  return (
    <div className="title">
        <p>{subTitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Title