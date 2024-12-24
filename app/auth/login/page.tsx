import { Login } from './login'
import { Metadata } from 'next'

export const metadata: Metadata = { title: 'Register / Login' }

export default function LoginPage() {
    return <Login />
}
