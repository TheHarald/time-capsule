import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage(props) {
  return (
    <div >
      <h1>Not Found Page</h1>
      <Link to={'/'}>Главная</Link>
    </div>
  )
}

export default NotFoundPage
