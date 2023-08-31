import './searchpg.scss'
import bgimg from '../video/bkvid.mp4'

const Searchpg=({searchedimg,searchedname,searchedgoals,searchedapp,searcheddri,searchedduel})=>{
    return(
        <>
        <div className='bk'>
            <div className='pgmain'>
                <video autoPlay loop muted>
                    <source src={bgimg} type="video/mp4"/>
                </video>
                    <h1 className='pgheader'>{searchedname}</h1>
                    <img src={searchedimg} className='pgimg'/>#
                    <div className='stats'>
                        <p className='pgname'>Goals : {searchedgoals}</p>
                        <p className='pgname'>Apperances : {searchedapp}</p>
                        <p className='pgname'>Dribbles completed : {searcheddri}</p>
                        <p className='pgname'>Duels won : {searchedduel}</p>
                    </div>
            </div>  
        </div>
        </>
    )
}
export default Searchpg;