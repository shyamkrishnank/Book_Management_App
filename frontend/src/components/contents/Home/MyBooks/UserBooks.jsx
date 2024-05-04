import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../axios/AxiosInterceptor'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { toast } from 'react-toastify';


function UserBooks() {
    const[books, setBooks] = useState([])

    useEffect(()=>{
        axiosInstance.get('bookmanagment/mybooks/')
        .then(response=>{
            console.log(response.data)
            setBooks(response.data.books)

        })
        .catch(error=>{
            console.log(error)
        })

    },[])

    const handleDelete = (id)=>{
        alert("do you want to delete the book")
        axiosInstance.get(`bookmanagment/delete/${id}`)
        .then(response=>{
            toast.success('Book Delete Successfully!', {
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
    <div>
      <div  class="flex flex-wrap w-full gap-5 mx-6">
        {books?.length?
        books.map((book,i)=>{
            return(
                <div>
                    <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <div className='flex justify-end text-red-500 text-sm'>
                            <div onClick={()=>handleDelete(book.id)} className='flex hover:cursor-pointer'>Delete</div>
                            </div>
                        <small className="text-default-500">{book.author}</small>
                        <h4 className="font-bold text-large">{book.title}</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://i.pinimg.com/originals/3d/9b/dc/3d9bdc9871d2ff16668ad61b9c14d108.jpg"
                        width={270}
                        />
                    </CardBody>
                    </Card>
                </div>
        )
        })  
        :
        null
        }
        </div>
    </div>
  )
}

export default UserBooks
