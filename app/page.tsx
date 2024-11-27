import Bento from '@/components/Bento'
import { ThemeToggler } from '@/components/ThemeToggler'

const page = () => {
    return (
        <main className='bg-background container mx-auto px-10 md:px-20 lg:px-52 xl:px-64'>
            <div className='flex justify-between items-center gap-5'>
                <h1 className="text-7xl font-bold py-8">La Conga</h1>
                <ThemeToggler />
            </div>
            <Bento />
        </main>
    )
}

export default page