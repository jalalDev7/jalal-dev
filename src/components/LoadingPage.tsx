import { Loader2 } from 'lucide-react'


const LoadingPage = () => {

  return (
    <div className='flex flex-col lg:flex-row min-w-screen min-h-screen items-center justify-center bg-zinc-100 '>
        <Loader2 className="w-44 h-44 animate-spin" />
    </div>
  )
}

export default LoadingPage