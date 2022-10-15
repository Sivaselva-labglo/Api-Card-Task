import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import './card.css'
import pin from './icons/pin.svg'


export default function GetDatas() {
  const [gatherData, setGatherData] = useState({});
  const [pageCount, setPageCount] = useState(true);

  function getApiData() {
    axios('https://reqres.in/api/unknown?page=1')
      .then((success) => setGatherData(success.data))
      .catch((failed) => console.log('Failed to get Datas ', failed))
  }

  function nxtPage() {
    axios('https://reqres.in/api/unknown?page=2')
      .then((success) => setGatherData(success.data))
      .catch((failed) => console.log('Failed to get Datas ', failed))

    setPageCount(false)
  }

  function previousPage() {
    axios('https://reqres.in/api/unknown?page=1')
      .then((success) => setGatherData(success.data))
      .catch((failed) => console.log('Failed to get Datas ', failed))

    setPageCount(true)
  }

  const navigatesTo = useNavigate()

  function navigateNxt(id) {
    navigatesTo(`/showdata/${id}`)
  }

  useEffect(() => { getApiData() }, [])

  return (
    <div>
      <center>
        <div>
          {
            (pageCount)
              ? <button onClick={nxtPage}>Next Page</button>
              : <button onClick={previousPage}>Previous Page</button>
          }

          {
            (gatherData.data)?.map((el) => {
              return (
                <div id='card'>

                  <div>
                    <p id="contents">Id : {el.id}</p>
                    <p id="contents">Name : {el.name}</p>
                    <p id="contents">Year : {el.year}</p>
                    <p id="contents">Color : {el.color}</p>
                    <p id="contents">Pantone_Value : {el.pantone_value}</p>
                    <img src={pin} id='img' onClick={() => navigateNxt(el.id)} />
                  </div>
                </div>
              )
            })
          }

        </div>
      </center>
    </div>
  )
}