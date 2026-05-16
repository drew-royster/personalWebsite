import Image from 'next/image'

export function useMDXComponents(components) {
  return {
    ...components,
    Image: ({ alt = '', ...props }) => <Image alt={alt} {...props} />,
  }
}
