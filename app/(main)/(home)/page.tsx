
import {Home} from './home'
import {Metadata} from 'next'

export const metadata: Metadata = {title: 'home'}



export default async function HomePage() {

  return (
    <Home/>
  )
}
