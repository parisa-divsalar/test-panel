
import {Dashboard} from './dashboard'
import {Metadata} from 'next'

export const metadata: Metadata = {title: 'home'}



export default async function HomePage() {

  return (
    <Dashboard/>
  )
}
