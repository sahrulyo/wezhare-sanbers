import Link from "next/link"
import { useState } from 'react';
import Model from "../model";

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
        <>
    
    <div>Header</div>
    <ul>
    <li >
    <Link href="/">Home |</Link>
      <Link href="/profile">Profile | </Link>
      <Link href="/users">Users |</Link>
      <Link href="/users/details">User detail |</Link>
      <Link href="/login">Login |</Link>


  
        <div>
  {/* <div className="flex items-center justify-center min-h-screen bg-gray-100"> */}
      <button
        className="block px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={openModal}
      >
        Login
      </button>
      <Model isOpen={isModalOpen} onClose={closeModal} />
    </div>
  
    </li>
    </ul>
  </>
    )
    }