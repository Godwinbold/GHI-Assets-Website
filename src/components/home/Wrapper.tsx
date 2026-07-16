import { type ReactNode } from 'react'

const Wrapper = ({className, children, id}: {className:string; children: ReactNode; id?: string}) => {
  return (
    <div id={id} className={` flex items-center py-12 px-6 lg:px-20 ${className}  overflow-hidden`}>
      {children}
    </div>
  )
}

export default Wrapper
