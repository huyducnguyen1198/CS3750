import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {UserType} from './components/userType'
//fetch userType from database






export default function Home() {
  return (
    <div>
      <UserType/>
      
    </div>
  )
}
