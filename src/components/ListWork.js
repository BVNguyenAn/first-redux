import React from 'react'

const ListWork = ({ children }) => {
  return (
        <li>
            <span onClick={() => console.log('clicked')} className='singleTodo'>
            { children }
        </span>
</li>
  )
}

export default ListWork