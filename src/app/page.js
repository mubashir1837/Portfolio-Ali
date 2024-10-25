"use client"; // This enables client-side functionality in the component

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Spinner from './components/Spinner';
import AboutMe from './components/AboutMe'

function Page() {
  const [loading, setLoading] = useState(false);

  // Simulate loading state when fetching data or performing actions
  const fetchData = async () => {
    setLoading(true);
    // Simulate a data fetch with a timeout (replace with your actual fetch logic)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  useEffect(() => {
    // Call fetchData when the component mounts or the page changes
    fetchData();
  }, []); // You can add dependencies here based on your specific logic

  return (
    <>
      {loading && <Spinner />}  {/* Show spinner when loading */}
      
      {/* Global components like Navbar */}
      
      
      {/* Render the content of the current page */}
      <main>
        {/* Your page content goes here */}
        <Navbar />  
      
      {/* Hero section */}
      <Hero />
      <AboutMe/>  
      
      </main>
    </>
  );
}

export default Page;
