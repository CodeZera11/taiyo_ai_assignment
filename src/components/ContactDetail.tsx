import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import { RootState } from '../store/reducers'

const ContactDetail = () => {

    const { id } = useParams<{ id: string }>()

    const contact = useSelector((state: RootState) => state.contacts.contacts.find(contact => contact.id === id))

    return (
        <div className='w-full h-[100%]'>
            <Navbar />
            {!contact ? (
                <div className='text-center text-4xl mt-4'>No Contact Found!</div>
            ) : (
                <div className='max-w-7xl mx-auto  mt-10 flex flex-col items-center justify-center p-4 border-4 border-black py-10'>
                    <img src='/user.png' alt='contact' className='w-[200px] h-[200px] rounded-full' />

                    <div className='flex justify-between items-center w-[50%] mt-10'>
                        <h1 className='text-4xl font-semibold'>First Name:</h1>
                        <h1 className='text-2xl uppercase'>{contact.first}</h1>
                    </div>
                    <div className='bg-black h-[2px] w-[50%] mt-5 ' />
                    <div className='flex justify-between w-[50%] mt-5 items-center'>
                        <h1 className='text-4xl font-semibold'>Last Name:</h1>
                        <h1 className='text-2xl uppercase'>{contact.last}</h1>
                    </div>
                    <div className='bg-black h-[2px] w-[50%] mt-5' />
                    <div className='flex justify-between w-[50%] mt-5 items-center'>
                        <h1 className='text-4xl font-semibold'>Email:</h1>
                        <h1 className='text-2xl uppercase'>{contact.email}</h1>
                    </div>
                    <div className='bg-black h-[2px] w-[50%] mt-5' />
                    <div className='flex justify-between w-[50%] mt-5 items-center'>
                        <h1 className='text-4xl font-semibold'>Phone:</h1>
                        <h1 className='text-2xl uppercase'>+91 {contact.phone}</h1>
                    </div>
                </div>
            )}

        </div>
    )
}

export default ContactDetail