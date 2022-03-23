interface Props {
  src: string
  alt: string
  size?: 'w-4' | 'w-8' | 'w-12' | 'w-16' | 'w-24' | 'w-auto'
}

const Avatar = ({ src, alt, size = 'w-auto' }: Props) => {
  return <img className={`rounded-full ${size}`} src={src} alt={alt} />
}

export default Avatar
