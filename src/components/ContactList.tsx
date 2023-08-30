import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import ContactCard from "./ContactCard"
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";

const Contact = () => {

  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <>
      <Navbar />

      <div className="w-full h-[100%] bg-pink-200 flex flex-col gap-10">

        <h1 className="text-center mt-10 text-5xl font-semibold uppercase">Contacts List</h1>

        <div className="w-full text-white flex items-center justify-end p-5 text-xl gap-10">
          <Link to={"/add-contact"} className="bg-black text-white px-4 py-2 hover:text-black hover:bg-white transition-colors duration-300 ease-out rounded-full">Add New</Link>
        </div>
        
        {/* If there are contacts then show contacts else show message. */}
        {contacts.length === 0 ? (
          <div className="text-center text-xl"> No Contacts Available. Add New to see Contacts.</div>
        ) : (
          <div className="w-full p-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        )}

      </div>
    </>
  )
}

export default Contact