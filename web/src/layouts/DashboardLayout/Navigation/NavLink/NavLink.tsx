import { Link, useLocation } from '@redwoodjs/router'

interface NavLinkProps {
  to: string
  basePath?: string
  className?: string
  nonActiveClassName?: string
  activeClassName?: string
  children: React.ReactNode
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => {
    const {
      to,
      basePath,
      nonActiveClassName,
      activeClassName,
      className,
      children,
      ...rest
    } = props
    const { pathname } = useLocation()

    const isActive = () => {
      // Home page
      if (to === '/') {
        if (pathname === '/') return true
        return false
      }

      if (pathname === to) return true

      if (pathname.startsWith(to) && to !== basePath) return true

      return false
    }

    const nonActiveClass = nonActiveClassName || ''
    const activeClass = activeClassName || ''

    return (
      <Link
        to={to}
        ref={ref}
        className={`${isActive() ? activeClass : nonActiveClass} ${className}`}
        {...rest}
      >
        {children}
      </Link>
    )
  }
)

export default NavLink
