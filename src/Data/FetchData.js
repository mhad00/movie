import React from 'react'
import { useEffect } from 'react'

const FetchData = () => {
    useEffect(()=>{
        const dataFetched = async ()=>{
            const response = await fetch('')
        }
    })

  return (
    <div>FetchData</div>
  )
}

export default FetchData