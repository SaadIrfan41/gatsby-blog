import './src/styles/global.css'
import 'firebase/auth'

import React from 'react'
import Layout from './src/components/layout'

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
