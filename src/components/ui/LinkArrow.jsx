import { ArrowIcon } from './icons'

export default function LinkArrow({ href, children, band = false, className = '' }) {
  const classNames = ['link-arrow']
  if (band) classNames.push('link-arrow--band')
  if (className) classNames.push(className)

  return (
    <a href={href} className={classNames.join(' ')}>
      {children}
      <ArrowIcon />
    </a>
  )
}