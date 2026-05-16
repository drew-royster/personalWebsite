import clsx from 'clsx'

export function Prose({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'prose prose-invert prose-headings:text-cream prose-p:text-cream/95 prose-a:text-rust prose-strong:text-cream prose-ul:my-5 prose-ul:text-cream/95 prose-ol:my-5 prose-ol:text-cream/95 prose-li:my-1.5 prose-li:text-cream/95 prose-li:marker:text-cream/80 prose-code:rounded prose-code:border prose-code:border-cream/18 prose-code:bg-cream/12 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-cream prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:border-cream/14 prose-pre:bg-black/55 prose-pre:text-cream prose-blockquote:border-rust/45 prose-blockquote:text-cream/90',
      )}
      {...props}
    />
  )
}
