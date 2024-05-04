import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';


function UserHome() {
   const navigate = useNavigate()

    const list = [
        {
          title: "Fiction",
          img: "https://i.pinimg.com/564x/aa/36/76/aa36763b11782f44ac990be57977e540.jpg",
        },
        {
          title: "Non-fiction",
          img: "https://i.pinimg.com/564x/85/2a/5f/852a5f3cd0d06c89ece28258f989eb10.jpg",
        },
        {
          title: "Mystery",
          img: "https://i.pinimg.com/564x/d5/c1/33/d5c1330203cf9f705bd9136a4d82b40f.jpg",
        },
        {
          title: "Romance",
          img: "https://i.pinimg.com/564x/4d/d0/05/4dd005cc75fba791d8bdf0a0e9cbae2d.jpg",
        },
        {
          title: "Science Fiction",
          img: "https://i.pinimg.com/564x/af/32/98/af3298af5e276619aa9b0d3ecd309a87.jpg",
        },
      ]

      const handlClick = (genre) =>{
        navigate(`/user/view/${genre}`)
      }



  return (
    <div className='mt-4 mx-5'>
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => handlClick(item.title)}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>  
  </div>
  )
}

export default UserHome
