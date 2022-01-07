import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Redirect({to}) {
  const router = useRouter();

  useEffect(() => {
    router.push('/about')
  }, [to]);

  return null;
}

export default function Home() {
  const router = useRouter();
  const [shouldRedirect, setShouldRedirect ] = useState(false);

  if (shouldRedirect) {
    return <Redirect to='/about'/>
  }

  return (
    <div>
      <h2>NEXT JS</h2>

      <button onClick={ () => router.push('/about')}>Router push</button>

      <Link href="/about">
        <a>NEXT JS link</a>
      </Link>

      <h2>NEXT JS useRouter</h2>
      
      <button onClick={ () => {setShouldRedirect(true)}}>
        Redirect
      </button>
      
      <h2>Native</h2>

      <button onClick={ () => ( window.location.href = "/about")}>JS window.location</button>
      
      <a href="/about">HTML href</a>
    </div>
    
  )
}
