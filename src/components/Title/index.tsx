import { Link } from 'wouter'

const Title = () => {
  return (
    <Link href="/">
      <a>
        <h1 className="text-2xl inline-flex items-center">
          <span className="px-2 py-1 bg-violet-400 text-indigo-50 rounded-lg">
            tweet 💟
          </span>
        </h1>
      </a>
    </Link>
  )
}

export default Title
