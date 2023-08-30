import Table from '../components/table';
import Smalltable from '../components/smalltable';
import Smalltable2 from '../components/smalltable2';
import Row from '../components/row';
import Bottom from '../components/bottom';
import bgimg from '../video/bkvid.mp4'

const Four=()=>{
  const rows4= <>
                  <Row classname="row" num="1" tea="Bayern Munich" pla='34' wo='21' dra='8' los='5' g='54' pon='71'/>   
                  <Row classname="secondrow"num="2" tea="Borussia Dortmund" pla='34' wo='22' dra='5' los='7' g='39' pon='71'/> 
                  <Row classname="row" num="3" tea="RB Leipzig" pla='34' wo='20' dra='6' los='8' g='23' pon='66'/> 
                  <Row classname="secondrow"num="4" tea="Union Berlin" pla='34' wo='18' dra='8' los='8' g='13' pon='62'/>
                  <Row classname="row" num="5" tea="Freiburg" pla='34' wo='17' dra='8' los='9' g='7' pon='59'/>
                  <Row classname="secondrow"num="6" tea="Leverkusen" pla='34' wo='14' dra='8' los='12' g='8' pon='50'/>   
                  <Row classname="row" num="7" tea="Frankfurt" pla='34' wo='13' dra='11' los='10' g='6' pon='50'/> 
                  <Row classname="secondrow"num="8" tea="Wolfsburg" pla='34' wo='13' dra='10' los='11' g='9' pon='49'/> 
                  <Row classname="row" num="9" tea="Mainz" pla='34' wo='12' dra='10' los='12' g='-1' pon='46'/>
                  <Row classname="secondrow"num="10" tea="Borussia Monchengladbach" pla='34' wo='11' dra='10' los='13' g='-3' pon='43'/>
                  <Row  classname="row"num="11" tea="FC Koln" pla='34' wo='10' dra='12' los='12' g='-5' pon='42'/>   
                  <Row classname="secondrow"num="12" tea="Hoffenheim" pla='34' wo='10' dra='6' los='18' g='-9' pon='36'/> 
                  <Row classname="row" num="13" tea="Werder Bremen" pla='34' wo='10' dra='6' los='18' g='-13' pon='36'/> 
                  <Row classname="secondrow"num="14" tea="VfL Bochum 1848" pla='34' wo='10' dra='5' los='19' g='-32' pon='35'/>
                  <Row classname="row"num="15" tea="Augsburg" pla='34' wo='9' dra='7' los='18' g='-21' pon='34'/>
                  <Row classname="secondrow"num="16" tea="VFB Stuttgart" pla='34' wo='7' dra='12' los='15' g='-12' pon='33'/>   
                  <Row classname="row"num="17" tea="Schalke" pla='34' wo='7' dra='10' los='17' g='-36' pon='31'/> 
                  <Row classname="secondrow"num="18" tea="	Hertha Berlin" pla='34' wo='7' dra='8' los='19' g='-27' pon='29'/>  
                </>
    return(
      <div className='bk'>
      <div className='home'>
        <video autoPlay loop muted>
          <source src={bgimg} type="video/mp4"/>
        </video>
        <div className='firsthalf'>
          <Table rows={rows4}/>
        </div>
        <div className='secondhalf'>
          <Smalltable league={78} />
          <Smalltable2 league={78}/>
          <Smalltable league={78} />
        </div>
      </div>  
      <div className='thirdhalf'>
        <Bottom league={78}/>
      </div>
      </div>
    )
}
export default Four;