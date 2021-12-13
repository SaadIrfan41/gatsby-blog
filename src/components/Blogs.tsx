import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
// import { useAuthState } from 'react-firebase-hooks/auth'
//@ts-ignore
import useAuthState from './useAuthState.js'
import firebase from 'gatsby-plugin-firebase'
import React from 'react'
import { navigate } from 'gatsby'

const Blogs = ({ data }: any) => {
  const [user, loading, error] = useAuthState(firebase)
  return (
    <div>
      <div className='relative bg-gray-50  pb-20 px-4 sm:px-6  lg:pb-28 lg:px-8'>
        <div className='relative max-w-7xl mx-auto'>
          <div className='text-center'>
            <h2 className='text-3xl tracking-tight font-extrabold text-red-500 sm:text-4xl'>
              My Favorite Dota 2 Hero's
            </h2>
            <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
              Dota 2 is a multiplayer online battle arena video game developed
              and published by Valve. The game is a sequel to Defense of the
              Ancients, which was a community-created mod for Blizzard
              Entertainment's Warcraft III: Reign of Chaos.
            </p>
          </div>
          <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
            {data.edges.map((edge: any) => (
              <div
                key={edge.node.heroShortName}
                className='flex flex-col rounded-lg shadow-lg overflow-hidden'
              >
                <div className='flex-shrink-0'>
                  <GatsbyImage
                    className='h-48 w-full object-cover'
                    image={edge.node.heroCoverImage.gatsbyImageData}
                    alt=''
                  />
                </div>
                <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                  <div className='flex-1'>
                    {/* <p className='text-sm font-medium text-indigo-600'>
                      <a href={post.category.href} className='hover:underline'>
                        {post.category.name}
                      </a>
                    </p> */}
                    <Link
                      to={`/hero/${edge.node.heroShortName}`}
                      className='block mt-2'
                    >
                      <p className='text-xl font-semibold text-gray-900'>
                        {edge.node.heroFullName}
                      </p>
                      <p className='mt-3 text-base text-gray-500 truncate'>
                        {edge.node.heroDescription.heroDescription}
                      </p>
                    </Link>
                  </div>
                  <div className='mt-6 flex items-center justify-between'>
                    <div className='flex-shrink-0 flex items-center'>
                      <Link to={`/hero/${edge.node.heroShortName}`}>
                        <span className='sr-only'>
                          {edge.node.heroShortName}
                        </span>
                        <GatsbyImage
                          className='h-10 w-10 rounded-full'
                          image={edge.node.heroImage.gatsbyImageData}
                          alt=''
                        />
                      </Link>
                      <p className='text-sm font-medium text-gray-900 ml-3 mr-3'>
                        <a href={'#'} className='hover:underline'>
                          {edge.node.heroShortName}
                        </a>
                      </p>
                    </div>

                    <div>
                      <button
                        type='button'
                        onClick={() =>
                          !user
                            ? navigate(`/login`)
                            : navigate(`/hero/${edge.node.heroShortName}`)
                        }
                        className='inline-flex border-2 border-yellow-500 border-opacity-100  px-6 lg:py-3 py-1  shadow-sm text-base font-medium rounded-md text-yellow-500 hover:text-white transition duration-500 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 items-start'
                      >
                        {loading
                          ? 'Loading...'
                          : !user
                          ? 'Login to view Details'
                          : 'Hero Details'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
