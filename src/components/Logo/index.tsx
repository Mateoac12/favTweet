import { Link } from 'wouter'
import LogoIcon from '../LogoIcon'

const Logo = () => {
  return (
    <Link href="/">
      <a className="inline-flex items-center gap-2">
        <LogoIcon />
        <h1 className="text-3xl font-medium text-rose-500">tweet</h1>
      </a>
    </Link>
  )
}

export default Logo
