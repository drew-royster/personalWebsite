import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'border border-cream bg-cream font-semibold text-ink hover:bg-transparent hover:text-cream active:bg-cream/80',
  secondary:
    'border border-cream/20 bg-black/20 font-medium text-cream/72 hover:border-cream/45 hover:text-cream active:bg-cream/10',
}

export function Button({ variant = 'primary', className, ...props }) {
  className = clsx(
    'inline-flex items-center justify-center gap-2 px-3 py-2 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
