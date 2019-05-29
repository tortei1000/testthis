import React from 'react'
import { Link } from 'react-router-dom'

const Topics = ({match}) => {
  console.log(match)
  return (
    <>
      <h2>My Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/Topic1`}>Topic 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/Topic2`}>Topic 2</Link>
        </li>
      </ul>
    </>
  )
}

export default Topics