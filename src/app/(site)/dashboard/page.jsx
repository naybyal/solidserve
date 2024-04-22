'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const dashboard = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: session} = useSession();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Session: {session?.user?.email}</p>
            <button onClick={() =>{
                signOut().then(() => {
                    window.location.href = '/login'
                })}
            }>Log out.</button>
        </div>
    )
}

export default dashboard;