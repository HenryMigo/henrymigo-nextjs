import type { Metadata } from 'next'
import Home from '../home'

export const metadata: Metadata = {
    title: 'Henry Migo',
    description: 'Website for Henry Migo',
}

export default function Page() {
    return <div>
      <h1>Blog</h1>
    </div>
}