import React from 'react'
import AddBook from '../../contents/Home/MyBooks/AddBook'
import UserBooks from '../../contents/Home/MyBooks/UserBooks'

function MyBooks() {
  return (
    <div>
        <div className='mr-12 mt-2'><AddBook /></div>
        <div>
            <UserBooks />
        </div>
       
    </div>
  )
}

export default MyBooks
