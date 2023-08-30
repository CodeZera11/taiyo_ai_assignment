import { Link } from 'react-router-dom'
import { Contact, deleteContact } from '../store/reducers/contactSlice'
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'

interface ContactCardProps {
    contact: Contact
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id))
    }


    return (
        <div className="group ">
            <div className="shadow-2xl flex flex-col group items-center justify-center p-3 bg-white rounded-xl w-full group-hover:cursor-pointer group-hover:scale-110 transition-transform ease-out duration-500">
                <Link to={`/contacts/${contact.id}`}>
                    <img src="/user.png" alt="contact" className="rounded-full w-[80px] h-[80px]" />
                    <p className={`${contact.status === "active" ? "bg-green-500" : "bg-red-500"} w-[70px] text-center rounded-full text-sm mt-3 ml-1`}>{contact.status}</p>
                    <h2 className="mt-2 -ml-4">First Name: {contact.first}</h2>
                    <h2 className="mt-1 -ml-4">Last Name: {contact.last}</h2>
                </Link>
                <div className='w-full flex justify-between items-center mt-5 px-5'>
                    <Link to={`/contacts/${contact.id}`} className=" text-black group-hover:underline group-hover:text-blue-800">View More</Link>

                    <div className='flex items-center justify-center gap-4'>
                        <TrashIcon className='h-5 w-5 text-red-500' onClick={handleDelete} />
                        <Link to={`/edit-contact/${contact.id}`}>
                            <PencilSquareIcon className='h-5 w-5' />
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactCard