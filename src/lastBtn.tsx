import { Button } from '@mantine/core'
import React from 'react'

 interface props{
    handle:()=>void
    text:string
    col:string
 }
const LastBtn :React.FC <props> = ( {handle,text,col}) => {

  return (
    <div className=' shadow-2xl pb-1  shadow-main'>
        <Button  fz={30} tt={'uppercase'} style={{background:col }} w={150}  onClick={handle} > {text} </Button>
    </div>
  )
}

export default LastBtn