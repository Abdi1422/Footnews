
import Table from '../components/table';
import Row from '../components/row';
import Smalltable from '../components/smalltable';
import Smalltable2 from '../components/smalltable2';
import Bottom from '../components/bottom';
import bgimg from '../video/bkvid.mp4'

const Second =()=>{
  const rows2:any= <>
                  <Row classname="row" num="1" tea="Barcelona" pla='38' wo='28' dra='4' los='6' g='50' pon='88'/>   
                  <Row classname="secondrow" num="2" tea="Real madrid" pla='38' wo='24' dra='6' los='8' g='39' pon='78'/> 
                  <Row classname="row"num="3" tea="Atletico madrid" pla='38' wo='23' dra='8' los='7' g='37' pon='77'/> 
                  <Row classname="secondrow" num="4" tea="Real sociedad" pla='38' wo='21' dra='8' los='9' g='16' pon='71'/>
                  <Row classname="row" num="5" tea="Villarreal" pla='38' wo='19' dra='7' los='12' g='19' pon='64'/>
                  <Row classname="secondrow" num="6" tea="Real betis" pla='38' wo='17' dra='9' los='12' g='5' pon='60'/>   
                  <Row classname="row" num="7" tea="Osasuna" pla='38' wo='15' dra='8' los='15' g='-5' pon='53'/> 
                  <Row classname="secondrow" num="8" tea="Athletic club" pla='38' wo='14' dra='9' los='15' g='4' pon='51'/> 
                  <Row classname="row"num="9" tea="Mallorca" pla='38' wo='14' dra='8' los='16' g='-6' pon='50'/>
                  <Row classname="secondrow" num="10" tea="Girona" pla='38' wo='15' dra='7' los='16' g='3' pon='49'/>
                  <Row classname="row" num="11" tea="Rayo vallecano" pla='38' wo='13' dra='10' los='15' g='-8' pon='49'/>   
                  <Row classname="secondrow" num="12" tea="Sevilla" pla='38' wo='13' dra='10' los='15' g='-7' pon='49'/> 
                  <Row classname="row" num="13" tea="Celta vigo" pla='38' wo='11' dra='10' los='17' g='-10' pon='43'/> 
                  <Row classname="secondrow" num="14" tea="Cadiz" pla='38' wo='10' dra='12' los='16' g='-23' pon='42'/>
                  <Row classname="row" num="15" tea="Getafe" pla='38' wo='10' dra='12' los='16' g='-11' pon='42'/>
                  <Row classname="secondrow" num="16" tea="Valencia" pla='38' wo='11' dra='9' los='18' g='-3' pon='42'/>   
                  <Row classname="row" num="17" tea="Almeria" pla='38' wo='11' dra='9' los='19' g='-16' pon='41'/> 
                  <Row classname="secondrow" num="18" tea="Valladolid" pla='38' wo='11' dra='7' los='20' g='-30' pon='40'/> 
                  <Row classname="row" num="19" tea="Espanyol" pla='38' wo='8' dra='13' los='17' g='-17' pon='37'/>
                  <Row classname="secondrow" num="20" tea="Elche" pla='38' wo='5' dra='10' los='23' g='-37' pon='25'/>   
                </>
    
  return(
    <div className='bk'>
    <div className='home'>
        <video autoPlay loop muted>
          <source src={bgimg} type="video/mp4"/>
        </video>
      <div className='firsthalf'>
        <Table rows={rows2}/>
      </div>
      <div className='secondhalf'>
        <Smalltable league={140} />
        <Smalltable2 league={140}/>
        <Smalltable league={140} />
      </div>
    </div>  
    <div className='thirdhalf'>
      <Bottom league={140} />
    </div>
    </div>
        
  )
}
export default Second;