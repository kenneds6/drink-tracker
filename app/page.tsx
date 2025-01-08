import SodaCalendar from '../components/SodaCalendar'
// or keep using @/ if you prefer:
// import SodaCalendar from '@/components/SodaCalendar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SodaCalendar />
    </main>
  )
}