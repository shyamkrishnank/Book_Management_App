import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../../axios/AxiosInterceptor'
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import {Tooltip} from "@nextui-org/tooltip";
import { toast } from 'react-toastify';


function UserBookView() {
    const {genre} = useParams()
    const [books, setBooks] = useState()

    useEffect(()=>{
        axiosInstance.get(`bookmanagment/getbooks/${genre}`)
        .then(response=>{
            console.log(response.data)
            setBooks(response.data.books)
        })
        .catch(error=>{
            console.log(error)
        })

    },[])

    const handleAddRead = (id) =>{
        axiosInstance.get(`bookmanagment/addtoread/${id}`)
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

        })
        .catch(error=>{
            console.log(error)
        })
    }

  return (
    <div className='mt-8 mx-5'>
        <div className='my-4'><h1 className='text-4xl font-semibold'>{genre}</h1></div>
   {books?.length ?
    <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
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
            <p onClick={()=>handleAddRead(book.id)} className=' text-green-700 hover:cursor-pointer'>Add to readlist</p>
          </CardFooter>
        </Card>
      ))}
    </div> 
    :
    <div>No Book Available </div>
     } 
  </div>
  )
}

export default UserBookView
