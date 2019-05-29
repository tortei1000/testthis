import React from 'react'
import {Link } from 'react-router-dom'

const TopicDetail = ({match}) => {
  console.log(match)
  return (
    <>
    <h2>{match.params.topicId}</h2>
    <ul>
      <li>
        <Link to='/Topics'>Back</Link>
      </li>
    </ul>
    </>
  )
}

export default TopicDetail