import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const fetchProfile = () => {
    axios
      .get("http://localhost:3000/profile")
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.data);
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log("Error:", err);
        navigate("/login");
      });
  };

  useEffect(() => {
    fetchProfile(); // Initial fetch when component mounts
  }, []);

  console.log(user)

//   // to delete the user
//   const handleDeleteUser = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/auth/deleteUser/${id}`);
//       alert("Successfully deleted the user!");
//       navigate("/login");
//       setFlag(flag + 1);
//     } catch (err) {
//       console.log("Error on deleting the user:", err);
//     }
//   };

  return (
    <>
      <div className="profileDiv">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="longHair.png"
              alt="User avatar"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {user.username}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {user.email}
            </span>
            <div className="flex mt-4 md:mt-6">
              <Link to={`/editUser/${user.id}`}>
                <button
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Edit
                </button>
              </Link>
              <button
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
