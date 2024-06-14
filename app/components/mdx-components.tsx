import * as runtime from 'react/jsx-runtime'
import Image from 'next/image'

import { Card } from './card'

const sharedComponents = {
  h1: (props: any) => <h1 className="text-4xl font-bold text-slate-100" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold text-zinc-100" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold text-zinc-100" {...props} />,
  strong: (props: any) => <strong className="font-bold text-zinc-100" {...props} />,
  p: (props: any) => <p className="text-lg text-slate-100" {...props} />,
  a: (props: any) => <a className="text-primary" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-4" {...props} />,
  li: (props: any) => <li className="text-slate-100" {...props} />,
    Card,
   Image


}

const useMDXComponent = (code: string) => {



  const fn = new Function(code)
  return fn({
   
   
     ...runtime }).default
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
  [key: string]: any
}

export const MDXContent = ({ code, components, ...props }: MDXProps) => {

  const Component = useMDXComponent(code)

  console.log(Component, components, sharedComponents)
  
  return <Component components={{ ...sharedComponents, ...components }} {...props} />
}
