import React, { FC, ReactNode } from "react"

interface Props{
    children: ReactNode | ReactNode[]
}

const MyButton:FC<Props> = ({children}) => {
  return (
    <button style={{
        padding: '1em'
    }} >{children}</button>
  )
}

export default MyButton