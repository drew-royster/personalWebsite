import clsx from 'clsx'

export function Prose({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'prose prose-invert prose-headings:text-cream prose-p:text-cream/72 prose-a:text-brass prose-strong:text-cream prose-li:text-cream/72 prose-blockquote:border-cream/25 prose-blockquote:text-cream/70',
      )}
      {...props}
    />
  )
}
