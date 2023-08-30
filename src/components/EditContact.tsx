import React, { useState } from 'react'
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../store/reducers/contactSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../store/reducers';

const EditContact = () => {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>()

    const contact = useSelector((state: RootState) => state.contacts.contacts.find((contact) => contact.id === id))

    const [credentials, setCredentials] = useState({
        first: contact?.first,
        last: contact?.last,
        email: contact?.email,
        phone: contact?.phone,
        status: contact?.status,
    })

    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const updatedContact = {
            ...credentials,
            id
        }
        // @ts-ignore
        dispatch(editContact(updatedContact))

        navigate("/contacts")
    };

    const onChangeHandler = (e: any) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-10 h-[100%] flex flex-col gap-10 w-full p-10 lg:p-0'>
                <h1 className="text-5xl font-bold mb-4 text-center">Edit Contact</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={credentials.first}
                        onChange={onChangeHandler}
                        name="first"
                        className="border border-gray-300 p-2 mb-2 w-full rounded"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={credentials.last}
                        onChange={onChangeHandler}
                        name="last"
                        className="border border-gray-300 p-2 mb-2 w-full rounded"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={onChangeHandler}
                        name="email"
                        className="border border-gray-300 p-2 mb-2 w-full rounded"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Phone Number"
                        value={credentials.phone}
                        onChange={onChangeHandler}
                        name="phone"
                        className="border border-gray-300 p-2 mb-2 w-full rounded"
                        required
                    />
                    <select name="status" className='mt-2' onChange={onChangeHandler}>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>

                    <br />

                    <button className="bg-green-500 mt-10 w-full  hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">
                        Edit
                    </button>
                </form>
            </div>
        </>
    );
};

export default EditContact