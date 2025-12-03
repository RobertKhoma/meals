import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button() {
    const navigate = useNavigate()


  return (
    <button className="btn btn-go" onClick={() => navigate(-1)}>Go back</button>
  )
}

export default Button