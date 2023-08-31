import Table from '../components/table';
import Smalltable from '../components/smalltable';
import Smalltable2 from '../components/smalltable2';
import Row from '../components/row';
import Bottom from '../components/bottom';
import bgimg from '../video/bkvid.mp4'

const Third=()=>{
  const rows3:any= <>
                  <Row classname="row" num="1" tea="Psg" pla='38' wo='27' dra='4' los='7' g='49' pon='85'/>   
                  <Row classname="secondrow" num="2" tea="Lens" pla='38' wo='25' dra='9' los='4' g='39' pon='84'/> 
                  <Row classname="row" num="3" tea="Marseille" pla='38' wo='22' dra='7' los='9' g='27' pon='73'/> 
                  <Row classname="secondrow"num="4" tea="Rennes" pla='38' wo='21' dra='5' los='12' g='30' pon='68'/>
                  <Row classname="row" num="5" tea="Losc" pla='38' wo='19' dra='10' los='9' g='21' pon='67'/>
                  <Row classname="secondrow"num="6" tea="Monaco" pla='38' wo='19' dra='8' los='11' g='12' pon='65'/>   
                  <Row classname="row" num="7" tea="Lyon" pla='38' wo='18' dra='8' los='12' g='18' pon='62'/> 
                  <Row classname="secondrow" num="8" tea="Clermont foot" pla='38' wo='17' dra='8' los='13' g='-4' pon='59'/> 
                  <Row classname="row" num="9" tea="Nice" pla='38' wo='15' dra='13' los='10' g='11' pon='58'/>
                  <Row classname="secondrow" num="10" tea="Lorient" pla='38' wo='15' dra='10' los='13' g='-1' pon='55'/>
                  <Row classname="row" num="11" tea="Reims" pla='38' wo='12' dra='15' los='11' g='0' pon='51'/>   
                  <Row classname="secondrow"num="12" tea="Montpellier" pla='38' wo='15' dra='5' los='18' g='3' pon='50'/> 
                  <Row classname="row" num="13" tea="Toulouse" pla='38' wo='13' dra='9' los='16' g='-6' pon='48'/> 
                  <Row classname="secondrow"num="14" tea="Brest" pla='38' wo='11' dra='11' los='16' g='-10' pon='44'/>
                  <Row classname="row" num="15" tea="Strasbourg" pla='38' wo='9' dra='13' los='16' g='-8' pon='40'/>
                  <Row classname="secondrow" num="16" tea="Nantes" pla='38' wo='7' dra='15' los='16' g='18' pon='36'/>   
                  <Row classname="row" num="17" tea="Auxerre" pla='38' wo='8' dra='11' los='19' g='-28' pon='35'/> 
                  <Row classname="secondrow" num="18" tea="Ajaccio" pla='38' wo='7' dra='5' los='26' g='-51' pon='26'/> 
                  <Row classname="row" num="19" tea="Troyes" pla='38' wo='4' dra='12' los='22' g='-36' pon='24'/>
                  <Row classname="secondrow" num="20" tea="Angers" pla='38' wo='4' dra='6' los='28' g='-48' pon='18'/>   
                </>
    return(
      <div className='bk'>
      <div className='home'>
        <video autoPlay loop muted>
          <source src={bgimg} type="video/mp4"/>
        </video>
        <div className='firsthalf'>
          <Table rows={rows3}/>
        </div>
        <div className='secondhalf'>
          <Smalltable league={61} />
          <Smalltable2 league={61}/>
          <Smalltable league={61} />
        </div>
      </div>  
      <div className='thirdhalf'>
        <Bottom league={61}/>
      </div>
      </div>
    )
}
export default Third;