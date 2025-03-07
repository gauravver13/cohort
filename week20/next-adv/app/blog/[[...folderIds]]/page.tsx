import axios from 'axios'
import React from 'react'

 
export function getServerSide(){

}

// export function (){

// }

export default async function ({params}: any) {
    const response = await axios.get("api.100xdevs.com/user") 
  return (
    <div>
        {JSON.stringify(params.folderIds)}
    </div>
  )
}
