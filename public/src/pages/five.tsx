
import Table from '../components/table';
import Smalltable from '../components/smalltable';
import Smalltable2 from '../components/smalltable2';
import Row from '../components/row';
import Bottom from '../components/bottom';
import bgimg from '../video/bkvid.mp4'

const Five =()=>{
  const rows5:any= <>
                  <Row classname="row"num="1" tea="Napoli" pla='38' wo='28' dra='6	' los='4' g='49' pon='90'/>   
                  <Row classname="secondrow"num="2" tea="Lazio" pla='38' wo='22' dra='8' los='8' g='30' pon='74'/> 
                  <Row classname="row"num="3" tea="Inter Milan" pla='38' wo='23' dra='3' los='12' g='29' pon='72'/> 
                  <Row classname="secondrow"num="4" tea="AC Milan" pla='38' wo='20' dra='10' los='8' g='21' pon='70'/>
                  <Row classname="row"num="5" tea="Atalanta" pla='38' wo='19' dra='7' los='12' g='18' pon='64'/>
                  <Row classname="secondrow"num="6" tea="AS Roma" pla='38' wo='18' dra='9' los='11' g='12' pon='63'/>   
                  <Row classname="row"num="7" tea="Juventus" pla='38' wo='22' dra='6' los='10' g='23' pon='62'/> 
                  <Row classname="secondrow"num="8" tea="Fiorentina" pla='38' wo='15' dra='11' los='12' g='10' pon='56'/> 
                  <Row classname="row"num="9" tea="Bologna" pla='38' wo='14' dra='12' los='12' g='4' pon='54'/>
                  <Row classname="secondrow"num="10" tea="Torino" pla='38' wo='14' dra='11' los='13' g='1' pon='53'/>
                  <Row classname="row"num="11" tea="Monza" pla='38' wo='14' dra='10' los='14' g='-4' pon='52'/>   
                  <Row classname="secondrow"num="12" tea="Udinese" pla='38' wo='11' dra='13' los='14' g='-1' pon='46'/> 
                  <Row classname="row"num="13" tea="Sassuolo" pla='38' wo='12' dra='9' los='17' g='-14' pon='45'/> 
                  <Row classname="secondrow"num="14" tea="Empoli" pla='38' wo='10' dra='13' los='15' g='-12' pon='43'/>
                  <Row classname="row"num="15" tea="Salernitana" pla='38' wo='9' dra='15' los='14' g='-14' pon='42'/>
                  <Row classname="secondrow"num="16" tea="Lecce" pla='38' wo='8' dra='12' los='18' g='-13' pon='36'/>   
                  <Row classname="row"num="17" tea="Verona" pla='38' wo='7' dra='10' los='21' g='-28' pon='31'/> 
                  <Row classname="secondrow"num="18" tea="Spezia" pla='38' wo='6' dra='13' los='19' g='-31' pon='31'/> 
                  <Row classname="row"num="19" tea="Cremonese" pla='38' wo='5' dra='12' los='21' g='-33' pon='27'/>
                  <Row classname="secondrow"num="20" tea="Sampdoria" pla='38' wo='3' dra='10' los='25' g='-47' pon='19'/>   
                </>
    return(
      <div className='bk'>
      <div className='home'>
        <video autoPlay loop muted>
          <source src={bgimg} type="video/mp4"/>
        </video>
        <div className='firsthalf'>
          <Table rows={rows5}/>
        </div>
        <div className='secondhalf'>
          <Smalltable league={135} />
          <Smalltable2 league={135}/>
          <Smalltable league={135} />
        </div>
      </div>  
      <div className='thirdhalf'>
        <Bottom league={135}/>
      </div>
      </div>
    )
}
export default Five;