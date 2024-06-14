import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ fontSize: '100px',
      color: 'white'

     }}>{children}</h1>,
     h2: ({ children }) => <h2 style={{ fontSize: '50px', color: 'white' }}>{children}</h2>,
      h3: ({ children }) => <h3 style={{ fontSize: '30px', color: 'white' }}>{children}</h3>,
      h4: ({ children }) => <h4 style={{ fontSize: '20px', color: 'white' }}>{children}</h4>,
      

    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}