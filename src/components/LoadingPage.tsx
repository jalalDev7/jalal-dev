import { Loader2 } from 'lucide-react'


const LoadingPage = () => {

  return (
    <div className='flex min-w-screen min-h-screen items-center justify-center bg-zinc-100'>
        
        <Loader2 className='w-32 h-32 animate-spin' />
    </div>
  )
}

export default LoadingPage