import React from 'react'
import { GatsbyImage, GatsbyImageProps } from 'gatsby-plugin-image'
// import { useAuthState } from 'react-firebase-hooks/auth'
//@ts-ignore
import useAuthState from './useAuthState.js'
import firebase from 'gatsby-plugin-firebase'
import TextareaAutosize from 'react-textarea-autosize'
import { navigate } from 'gatsby-link'

type pageprope = {
  description: string
  image: GatsbyImageProps | undefined
  name: string
  roles: [string]
}
type pageContextprops = {
  pageContext: pageprope
}

const Blog_Template = ({
  pageContext: { description, image, name, roles },
}: pageContextprops) => {
  const [user, loading, error] = useAuthState(firebase)
  if (loading)
    return (
      <div className='mt-56 flex justify-center items-center'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-900'></div>
      </div>
    )

  return (
    <>
      {!user ? (
        navigate(`/login`)
      ) : (
        <div>
          <div className=' bg-white flex  '>
            <div className='hidden lg:block relative   flex-1'>
              <GatsbyImage
                className='h-screen w-full object-cover'
                //@ts-ignore
                image={image}
                alt='A dinosaur'
                placeholder='blurred'
                loading='lazy'
              />
            </div>
            <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-gray-200'>
              <div className='mx-auto w-full max-w-sm lg:w-96'>
                <div className='mt-8'>
                  <div className='mt-6'>
                    <form action='#' method='POST' className='space-y-6'>
                      <div>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Name
                        </label>
                        <div className='mt-1'>
                          <input
                            type='text'
                            disabled
                            defaultValue={name}
                            required
                            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                          />
                        </div>
                      </div>

                      <div className='space-y-1'>
                        <label
                          htmlFor='Description'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Description
                        </label>
                        <div className='mt-1'>
                          <TextareaAutosize
                            id='rocket'
                            name='rocket'
                            disabled
                            defaultValue={description}
                            required
                            className=' resize-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                          />
                        </div>
                      </div>

                      <div className='flex items-center '>
                        <div className='flex items-center'>
                          <label
                            htmlFor='remember-me'
                            className='ml-2 block text-md font-bold text-gray-700'
                          >
                            Roles:
                          </label>
                        </div>

                        <div className='flex justify-evenly w-full pl-1'>
                          {roles.map((role) => {
                            return (
                              <div
                                key={role}
                                className={`
                      bg-gray-300 text-gray-500 
                      px-2  text-md leading-5 font-semibold rounded-full `}
                              >
                                {role}
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      <div></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Blog_Template
