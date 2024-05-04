import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../axios/AxiosInterceptor'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { toast } from 'react-toastify'

function UserReading() {
    const [books, setBooks] = useState()

    useEffect(()=>{
        axiosInstance.get('bookmanagment/getreadlist')
        .then(response=>{
            setBooks(response.data.books)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    const handleRemove =(id)=>{
        axiosInstance.get(`bookmanagment/deletebook/${id}`)
        .then(response=>{
            toast.success(`${response.data.message}`, {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                });
                setBooks(prev=>prev.filter(book=>book.id != id))
        })
        .catch(error=>{
            console.log(error)
        })
    }

  return (
    <div>
        <div className='mt-2 ml-3 text-4xl font-semibold'>Read List</div>
        {books?.length ?
        <div className=" mt-8 ml-4 gap-4 grid grid-cols-2 sm:grid-cols-4">
          {books?.map((book, index) => (
            <Card shadow="sm" key={index}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={""}
                  className="w-full object-cover h-[140px]"
                  src={"https://i.pinimg.com/736x/97/13/59/9713599a41e4cacedcfa209da6b6e79e.jpg"}
                />
              </CardBody>
              <CardFooter className="text-md justify-between">
                <b>{book.title}</b>
                <p onClick={()=>handleRemove(book.id)} className='text-red-500 hover:cursor-pointer'>remove</p>
              </CardFooter>
            </Card>
          ))}
        </div> 
        :
        <div className='mt-4 ml-12'>
            No Books in Read list !
        </div>
        }
      
    </div>
  )
}

export default UserReading
