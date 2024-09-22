import '@/styles/index.css'
//import { ClientOnly } from './client'
import MyApp from '@/components/MyApp'

export function generateStaticParams() {
  return [{ slug: [''] }]
}

export default function Page() {
  return <MyApp />
  //return <ClientOnly />
}
