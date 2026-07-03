import Image from 'next/image'

export function useMDXComponents(components) {
  return {
    ...components,
    Image: ({ alt = '', className = '', ...props }) => (
      <Image
        alt={alt}
        placeholder={typeof props.src === 'object' ? 'blur' : undefined}
        className={`mx-auto h-auto max-h-[32rem] w-auto max-w-full ${className}`}
        {...props}
      />
    ),
  }
}
