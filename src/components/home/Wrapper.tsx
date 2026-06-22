import { type ReactNode } from 'react'

const Wrapper = ({className, children}: {className:string; children: ReactNode}) => {
  return (
    <div className={` flex items-center py-12 px-6 lg:px-20 ${className}  overflow-hidden`}>
      {children}
    </div>
  )
}

export default Wrapper
