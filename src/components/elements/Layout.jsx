import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    
    <LayoutBox>
      <Header />
      <Footer />
      <Content>{children}</Content>
    </LayoutBox>
    
  )
}


export default Layout;

const LayoutBox = styled.div`
width: 100vw;
height: 100vh;
margin: 0;
padding: 0;
gap: 0;
background-color: white;
  
`
const Content = styled.div`
  width: 75%;
  display: block;
  padding: 80px 40px 100px 250px;

  @media screen and (max-width: 900px) {
    padding: 80px 10px 140px 10px;
    
  }
`
