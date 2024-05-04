import React, { useEffect, useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,Input, Button, useDisclosure, DatePicker, Textarea, Select, SelectItem} from "@nextui-org/react";
import { axiosInstance } from '../../axios/AxiosInterceptor';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function AddBook() {
    const {isOpen,onClose, onOpen, onOpenChange} = useDisclosure();
    const genre = ['Fiction','Non-fiction', 'Mystery','Romance','Science Fiction']

    useEffect(()=>{

    },[])

    const [title, setTitle] = useState()
    const [auther, setAuther] = useState()
    const[Genre, setGenre] = useState()
    const[date, setDate] = useState(null)
    const[discription, setDiscription] = useState()

    const handleSubmit = () =>{
        console.log(date)
        const data = {
            'title' : title,
            'author':auther,
            'genre' : Genre,
            'date' : date,
            'discription' :discription
        }
        axiosInstance.post('/bookmanagment/create/',data)
        .then(response=>{
          toast.success('Book Created Successfully!', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
            });
            onClose()
        })
        .catch(error=>{
            console.log(error)
        })

    }




  return (
    <>
    <div className='flex w-full justify-end '>
      <Button onPress={onOpen} color="success">
        Add Book
      </Button>  

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add Book</ModalHeader>
              <ModalBody>
            <div >
              <Input type="text" value={title} onChange={e=>setTitle(e.target.value)} label="Title" placeholder="Enter the title" />

        </div>
        <div >
           <Input type="text" label="Auther" value={auther} onChange={e=>setAuther(e.target.value)} placeholder="Enter the Auther" />
        </div>
        <div >
            <Select 
            label="Select Genre" 
            className="max-w-xs" 
          >
            {genre.map((gen) => (
              <SelectItem key={gen} value={Genre}>
                {gen}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div >
           <label for="publicationDate" class="block text-sm font-medium text-gray-700">Publication Date</label>
            <input value={date} onChange={e=>setDate(e.target.value)} type="date" id="publicationDate" name="publicationDate" class="input-field"/>
        </div>
        <div >
            <Textarea
            value={discription}
            onChange={e=>setDiscription(e.target.value)}
            label="Description (Optional)"
            placeholder="Enter your description"
            className="max-w-xs"
            />
        </div>

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleSubmit}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

    </div>
    </>
  )
}

export default AddBook
