import React, { useState } from 'react'
import Navbar from './Navbar';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/reducers/contactSlice';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch();

    // Initial state of form credentials
    const [credentials, setCredentials] = useState({
        first: "",
        last: "",
        email: "",
        phone: "",
        status: "active",
    })

    // Handle form submit and redirection
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newContact = {
            ...credentials,
            id: uuid().slice(0, 8)
        }
        dispatch(addContact(newContact))
        setCredentials({
            first: "",
            last: "",
            email: "",
            phone: "",
            status: "",
        })
        navigate("/contacts")
    };

    // Handle changed value of input
    const onChangeHandler = (e: any) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='w-full h-[100%] bg-pink-200'>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-10 h-[100%] flex flex-col gap-10 w-full p-10 lg:p-0'>
                <h1 className="text-5xl font-bold mb-4 text-center">Add Contact</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={credentials.first}
                        onChange={onChangeHandler}
                        name="first"
                        className="border rounded-xl border-gray-300 p-2 mb-2 w-full "
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={credentials.last}
                        onChange={onChangeHandler}
                        name="last"
                        className="border rounded-xl border-gray-300 p-2 mb-2 w-full "
                        required
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={onChangeHandler}
                        name="email"
                        className="border rounded-xl border-gray-300 p-2 mb-2 w-full"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Phone Number"
                        value={credentials.phone}
                        onChange={onChangeHandler}
                        name="phone"
                        className="border rounded-xl border-gray-300 p-2 mb-2 w-full"
                        required
                    />
                    <select name="status" className='mt-2 p-2 rounded-xl' onChange={onChangeHandler}>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>

                    <br />

                    <button className="bg-green-500 mt-10 w-full  hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddContact