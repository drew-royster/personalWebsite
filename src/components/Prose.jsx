import clsx from 'clsx'

export function Prose({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'prose prose-invert prose-headings:text-amber-50 prose-p:text-amber-100/75 prose-a:text-teal-300 prose-strong:text-amber-50 prose-li:text-amber-100/75 prose-blockquote:border-amber-200/25 prose-blockquote:text-amber-100/70',
      )}
      {...props}
    />
  )
}
