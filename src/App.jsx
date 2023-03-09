import { displayPartsToString } from 'typescript'


import './App.css'
import Card from './card'
import SummaryCard from './summaryCard'


export default function App() {
  return (
    <main>
      <div style={{ height: '10vh' }}></div>
      <div className='components'>

        <Card />
        <SummaryCard />

      </div>

    </main>
  )
}
