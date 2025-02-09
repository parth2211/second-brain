import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {

  return (
    <Button variant='primary' text="Share" size='sm' startIcon={<PlusIcon size='sm'></PlusIcon>} onClick={() => {}}></Button>
  )
}

export default App
