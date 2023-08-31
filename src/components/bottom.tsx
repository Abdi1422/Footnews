import './bottom.scss';
import { useEffect, useState } from 'react';

const Bottom =({league}:{league:number})=> {
    const fetchteams =()=>{
        const rand:number = Math.floor(Math.random()* 100 +1)
        const rand2:number = Math.floor(Math.random()* 100 +1)
        const url:string = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${league}&season=2023`;
        const options:object= {
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
                sethometeam(data.response[rand].teams.home.logo)
                setawayteam(data.response[rand].teams.away.logo)
                sethometeamname(data.response[rand].teams.home.name)
                setawayteamname(data.response[rand].teams.away.name)
                setstadium(data.response[rand].fixture.venue.name)
                setdate(data.response[rand].fixture.date)
                sethometeamname2(data.response[rand2].teams.home.name)
                setawayteamname2(data.response[rand2].teams.away.name)
                sethometeam2(data.response[rand2].teams.home.logo)
                setawayteam2(data.response[rand2].teams.away.logo)
            })
            .catch(err =>{ 
                console.log("somthing went wrongg")    
            });
    }
    useEffect(()=>{
        fetchteams()
    },[])
    const [hometeam,sethometeam]=useState<string>()
    const [awayteam,setawayteam]=useState<string>()
    const [hometeamname,sethometeamname]=useState<string[]>([])
    const [awayteamname,setawayteamname]=useState<string[]>([])
    const [date,setdate]=useState<string[]>([])
    const [stadium,setstadium]=useState<string[]>([])
    const [hometeamname2,sethometeamname2]=useState<string[]>([])
    const [awayteamname2,setawayteamname2]=useState<string[]>([])
    const [hometeam2,sethometeam2]=useState<string>()
    const [awayteam2,setawayteam2]=useState<string>()

    return ( 
        <div className='bottomframe'>
            <div className='bottomwrap'>
                <div className='bottomimg'>
                    <div className='botwrapper'>
                        <h1 className='btmname'>{hometeamname}</h1>
                        <img className='teamimg1' src={hometeam}/>
                    </div>
                    <div className='botwrapper'>
                        <h1 className='vsh1'>VS</h1>
                        <h1 className='vs'>VS</h1>
                    </div>
                    <div className='botwrapper'>
                        <h1 className='btmname'>{awayteamname}</h1>
                        <img className='teamimg2' src={awayteam}/>
                    </div>
                    </div>
                    <div className='datediv'>
                        <p>Date : {date}</p>
                        <p>Stadium : {stadium}</p>
                        <p>Other fixture : </p>
                        <div className='fixdiv'>
                        <div className='botwrapper'>
                            <h1>{hometeamname2}</h1>
                            <img className='otherteamimg' src={hometeam2}/>
                        </div>
                        <div className='botwrapper'>
                            <h1 className='vstop'>VS</h1>
                            <h1 className=''>VS</h1>
                        </div>
                        <div className='botwrapper'>
                            <h1>{awayteamname2}</h1>
                            <img className='otherteamimg' src={awayteam2}/>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
       )
    }

export default Bottom