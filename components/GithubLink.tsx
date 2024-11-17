import GitHubIcon from '@/assets/icons/GithubIcon'
import Link from 'next/link'

const GithubLink = () => {
  return (
    <Link href="https://github.com/AgustinGomezDev" target='_blank' className='absolute gap-2 -right-[3.6rem] top-10 border rounded-l-xl p-2 box-content flex items-center justify-center group hover:right-0 hover:bg-muted transition-all'>
        <GitHubIcon className='size-8 group-hover:scale-110 transition-transform' />
        <span>Github</span>
    </Link>
  )
}

export default GithubLink