import { useState } from 'react'
import './App.css'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Cards'
import { PlusIcon } from '../icons/PlusIcon'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { SideBar } from '../components/ui/Sidebar'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);   

  return (
    <div>
        <div>
            <SideBar></SideBar>
        </div>
        <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
            <CreateContentModal open={modalOpen} onClose={() => {
                setModalOpen(false);
            }}></CreateContentModal>
            <div className="flex justify-end gap-4">
                <Button onClick={() => {setModalOpen(true)}} variant='primary' text="Share" size='sm' startIcon={<PlusIcon size='sm'></PlusIcon>}></Button>
                <Button variant='primary' text="Add Content" size='sm' startIcon={<PlusIcon size='sm'></PlusIcon>} onClick={() => {}}></Button>
            </div>
            <div className='flex gap-4'>
                <Card type="youtube" link="https://www.youtube.com/watch?v=HlCjrf7hJHk" title="First Video"></Card>
                <Card type="youtube" link="https://www.youtube.com/watch?v=HlCjrf7hJHk" title="First Video"></Card>
            </div>
        </div>
    </div>
  )
}
