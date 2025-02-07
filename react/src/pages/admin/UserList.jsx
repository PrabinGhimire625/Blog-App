import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const UserList = () => {
    const id=useParams()
    const{users,setUser,flag,setFlag}=useContext(AuthContext)

    const handleDeleteUser=async(id)=>{
        try{
            await axios .delete(`http://localhost:3000/user/${id}`)
            setFlag(flag+1)
            alert("Successfully delete the user from admin!")
        }catch(err){
            console.log("Error on delete the user")
        }
    }

  return (
   <>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    UserName
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           { users.map((user)=>(
            <tr key={user._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> {user.username}</th>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4"><Link to={`/editUser/${user._id}`}><button className="font-medium text-red-600 dark:text-blue-500 hover:underline"> Edit </button></Link></td>
                    <td className="px-6 py-4"><Link><button onClick={()=>handleDeleteUser(user._id)} className="font-medium text-red-600 dark:text-blue-500 hover:underline"> Delete </button></Link></td>
           </tr>
            ))
            }
        </tbody>
    </table>
</div>
   </>
  )
}
export default UserList
