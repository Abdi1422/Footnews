import './smalltable.scss';
import bootphoto from '../images/boot.png'
import { useEffect, useState } from 'react';

const Smalltable2=({league}:{league:number})=> {
    const fetchapi=()=>{
        const url2:string = `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=${league}&season=2022`;
        const options:object = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9cb9b72ffdmsh672191178f9bacfp19548djsn33b7d9e09267',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };
        fetch(url2, options)
            .then(response => response.json())
            .then(data =>{
                console.log(data)
                setdataname2(data.response[0].player.name)
                setdatagoals(data.response[0].statistics[0].goals.total)
                setdatateam2(data.response[0].statistics[0].team.logo)
                setdataimg2(data.response[0].player.photo)
                setdatateamname2(data.response[0].statistics[0].team.name)
                setdataleague2(data.response[0].statistics[0].league.name)
                setdatadribbles(data.response[0].statistics[0].dribbles.success)
                setdataduels(data.response[0].statistics[0].duels.won)
            })
            .catch(err =>{ 
                console.log("somthing went wrongg")    
            });
    }
    useEffect(()=>{
      fetchapi()
    },[])
    const [dataimg2,setdataimg2]=useState<string[]>([])
    const [dataname2,setdataname2]=useState<string[]>([])
    const [datagoals,setdatagoals]=useState<number[]>([])
    const [datateam2,setdatateam2]=useState<string[]>([])
    const [dataleague2,setdataleague2]=useState<number[]>([])  
    const [datateamname2,setdatateamname2]=useState<string[]>([])
    const [datadribbles,setdatadribbles]=useState<number[]>([])
    const [dataduels,setdataduels]=useState<number[]>([])
    return (
        <div className='smalltableframe'>
            <div className='imgdiv'>
                <img src={dataimg2} className='img' />
                <img src={bootphoto} className='smallicon' />
            </div>
            <div className='info'>
                <div className='player'>
                    <p className='name'>Name : {dataname2}</p>
                </div>
                <div className='player'>
                    <p className='reason'>Goals : {datagoals}</p>
                </div>
                <div className='team'>
                    <p className='teamname'>Team : </p>
                    <img src={datateam2} className='teamlogo'/>
                </div>
            </div>
            <p className='infotext'>{dataname2} is the top scorcer in the {dataleague2} for {datateamname2} with {datagoals} goals , {datadribbles} dribbles and {dataduels} duels won.</p>
        </div>
    )
}

export default Smalltable2