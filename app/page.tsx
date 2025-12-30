import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Tabs from '@/components/Tabs'

export default function Home() {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <Sidebar />
        <Tabs />
      </main>
    </div>
  )
}
