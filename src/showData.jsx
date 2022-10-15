import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Showdata() {
  const { id } = useParams()
  const [gatherData, setGatherData] = useState({});

  function getApiData() {
    axios(`https://reqres.in/api/unknown/${id}`)
      .then((success) => setGatherData(success.data))
      .catch((failed) => console.log('Failed to get Datas ', failed))
  }

  useEffect(() => { getApiData() }, [])

  return (
    <div>
      <center>
        <p>Id : {gatherData.data?.id}</p>
        <p>Name : {gatherData.data?.name}</p>
        <p>Year : {gatherData.data?.year}</p>
        <p>Color : {gatherData.data?.color}</p>
        <p>Pantone_Value : {gatherData.data?.pantone_value}</p>
      </center>
    </div>
  )
}