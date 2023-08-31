import './navbar.scss'
import {Link} from "react-router-dom"
import {Box} from "@mui/material"
import logo from '../images/logo.png'
import search from '../images/search.png'
import { useState } from 'react';


const Navbar=({set,set2,set3,set4,set5,set6})=>{
    const fetchapi=()=>{
        const url:string = `https://api-football-v1.p.rapidapi.com/v3/players?league=39&season=2022&search=${playersearch}`
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
                console.log(playersearch)
                setplayersearch(data.response[0].player.name)
                set(data.response[0].player.photo)
                set2(data.response[0].player.name)
                set3(data.response[0].statistics[0].goals.total)
                set4(data.response[0].statistics[0].games.appearences)
                set5(data.response[0].statistics[0].dribbles.success)
                set6(data.response[0].statistics[0].duels.won)
            })
            .catch(err =>{ 
                console.log("somthing went wrongg")    
            });
    }
    const [playersearch,setplayersearch]=useState("")
    
    return(
        <>
        <div className="App">
            <header className='header'>
                <Box height="50px" color="white" display="flex" width="80%" margin="0px auto" justifyContent="space-between" alignItems="center">
                <p>+44 7700 900703</p>
                <p>FootNews@gmail.com</p>
                </Box>
            </header>
            <div>
                <Box height="100px" width="80%" margin="0px auto" display="flex">
                <div className='logodiv'>
                    {/* @ts-ignore */}
                    <img src={logo} className='logoimg'/>
                    <h1 className='navtitle'>Footnews</h1>
                </div>
                </Box>
            </div>
        </div>
        <nav className='nav'>
            <div className='leagbtn'>
                <Link to="/" className='link'><button className='btn'>Epl</button></Link>
                <Link to="2" className='link'><button className='btn'>La liga</button></Link>
                <Link to="3" className='link'><button className='btn'>Ligue 1</button></Link>
                <Link to="4" className='link'><button className='btn'>Bundesliga</button></Link>
                <Link to="5" className='link'><button className='btn'>Serie a</button></Link>
            </div>
            <div className='searchdiv'>
                <input type="text" placeholder="Enter premier league player" className="search" onChange={(e)=> setplayersearch(e.target.value)} />
                <Link to="6" className='searchlink'><button className='searchbtn' onClick={fetchapi} ><img src={search} className='searchimg'/></button></Link>
            </div>
        </nav>
        </>
    )
}
export default Navbar;