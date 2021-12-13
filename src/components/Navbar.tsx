import React from 'react'
import firebase from 'gatsby-plugin-firebase'
import { Link } from 'gatsby'
import { useAuthState } from 'react-firebase-hooks/auth'
import { StaticImage } from 'gatsby-plugin-image'
const Navbar = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const [user, loading, error] = useAuthState(firebase.auth())

  if (error) {
    return <h1>ERRROR</h1>
  }

  return (
    <>
      {loading ? (
        <div className='border-b-2 border-gray-300  p-4  w-full mx-auto max-w-7xl'>
          <div className='animate-pulse flex space-x-4 items-center justify-between'>
            <div className='rounded-full bg-gray-300 h-12 w-12'></div>
            <div className='h-12 bg-gray-300 rounded w-full max-w-xl'></div>
            <div className='h-12 bg-gray-300 rounded w-full max-w-xl'></div>
          </div>
        </div>
      ) : (
        <div className=''>
          <div className='w-full mx-auto px-4 sm:px-6 '>
            <div className='flex justify-between border-b-2  border-gray-200 py-4 items-center max-w-7xl mx-auto p-4 '>
              <div className='flex flex-shrink-0'>
                <Link to='/'>
                  <StaticImage
                    className='h-15 w-15 sm:h-10'
                    src='../images/dota.jpg'
                    alt='A dinosaur'
                    placeholder='blurred'
                    layout='fixed'
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
              {/* <div className='flex items-center'>
                <div>
                  <h3 className='text-sm tracking-wide font-medium text-gray-500 uppercase px-2'>
                    Home
                  </h3>
                </div>
                <div>
                  <h3 className='text-sm tracking-wide font-medium text-gray-500 uppercase px-2'>
                    Profile
                  </h3>
                </div>
                <div>
                  <h3 className='text-sm tracking-wide font-medium text-gray-500 uppercase px-2'>
                    Settings
                  </h3>
                </div>
              </div> */}
              <div className='flex'>
                {!user ? (
                  <>
                    <div className=' px-2'>
                      <Link
                        to='/login'
                        className=' space-x-10 flex items-center justify-center px-4 py-2 rounded-md transition duration-500 border-2 border-indigo-500 border-opacity-100  text-base font-medium text-indigo-600 bg-white hover:bg-indigo-700 hover:text-white shadow-lg'
                      >
                        Sign In
                      </Link>
                    </div>
                    <div>
                      <Link
                        to='/register'
                        className=' space-x-10 flex items-center justify-center px-4 py-2 border-2 border-indigo-500 border-opacity-100 rounded-md transition duration-500 text-base font-medium text-indigo-600 bg-white hover:bg-indigo-700 hover:text-white shadow-lg'
                      >
                        Sign Up
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <button
                        className=' space-x-10 flex items-center justify-center px-4 py-2 border-2 border-indigo-500 border-opacity-100 rounded-md transition duration-500  text-base font-medium text-indigo-600 bg-white hover:bg-indigo-700 hover:text-white shadow-lg'
                        onClick={() => firebase.auth().signOut()}
                      >
                        LogOut
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
