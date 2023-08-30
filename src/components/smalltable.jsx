import './smalltable.scss';
import injuryphoto from '../images/injury.png'
import { useEffect, useState } from 'react';

const Smalltable =({league})=> {
    const fetchapi=()=>{
        const randy= Math.floor(Math.random()* 1000 +1)
        const url = `https://api-football-v1.p.rapidapi.com/v3/injuries?league=${league}&season=2022`
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9cb9b72ffdmsh672191178f9bacfp19548djsn33b7d9e09267',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(data =>{
                console.log(data)
                setdataname(data.response[randy].player.name)
                setdatareason(data.response[randy].player.reason)
                setdatateam(data.response[randy].team.logo)
                setdataimg(data.response[randy].player.photo)
                setdatateamname(data.response[randy].team.name)
            })
            .catch(err =>{ 
                console.log("somthing went wrongg")    
            });
    }
    useEffect(()=>{
      fetchapi()
    },[])
    const [dataimg,setdataimg]=useState([])
    const [dataname,setdataname]=useState([])
    const [datareason,setdatareason]=useState([])
    const [datateam,setdatateam]=useState([])
    const [datateamname,setdatateamname]=useState([])

    return (
        <div className='smalltableframe'>
            <div className='imgdiv'>
                <img src={dataimg} className='img' />
                <img src={injuryphoto} className='smallicon' />
            </div>            
            <div className='info'>
                <div className='player'>
                    <p className='name'>Name : {dataname}</p>
                </div>
                <div className='player'>
                    <p className='reason'>Injury : {datareason}</p>
                </div>
                <div className='team'>
                    <p className='teamname'>Team : </p>
                    <img src={datateam} className='teamlogo'/>
                </div>
            </div>
            <p className='infotext'>{dataname} will miss the next game for {datateamname} due to {datareason}.</p>
        </div>
    )
}

export default Smalltable