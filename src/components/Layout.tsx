/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import Navbar from './Navbar'
// import { useStaticQuery, graphql } from "gatsby"

const Layout: React.FC = ({ children }) => {
  return (
    <div className='h-screen'>
      <Navbar />

      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
