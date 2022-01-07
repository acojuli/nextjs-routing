import { useRouter } from 'next/router'

export default function About () {
    const router = useRouter();

    return (
        <div>
            <button onClick={ () => router.push('/')}>Go home</button>
        </div>
        
    )
}