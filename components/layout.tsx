import React from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
// No longer importing specific pages here; they are passed as `children`

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="A personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
        {/* Poppins font link - consider putting in _document.js for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <main className="main-content"> {/* Uses a global class */}
        <Sidebar />

        <div className="relative">
          {children} {/* This is where the actual page component will be rendered */}
        </div>
      </main>

      <Navbar />
    </>
  );
};

export default Layout;