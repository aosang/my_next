"use client";
import { useState } from 'react'

const Home = () => {
  const [error, setError] = useState(false);

  const handleGetError = () => {
    setError(true)
  }

  return (
    <>{error ? Error() : <button onClick={handleGetError}>Get Error</button>}</>
  )
}

export default Home