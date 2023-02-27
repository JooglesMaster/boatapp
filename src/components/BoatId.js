import React from 'react'
import rawData from "../mock-data.json"
import { useParams } from 'react-router-dom'


export default function BoatId (){

    let {id} = useParams()

    let newNum = Number(id)
    let data = rawData.find(item => item.id === newNum);


    return (
    <div>
        <h1>{data.name}</h1>
        <h1>{data.description}</h1>
        <p>{data.facts}</p>
    </div>
    )
}
