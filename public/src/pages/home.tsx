import './home.scss';
import Table from '../components/table';
import Row from '../components/row';
import Smalltable from '../components/smalltable';
import Smalltable2 from '../components/smalltable2';
import Bottom from '../components/bottom';
import bgimg from '../video/bkvid.mp4'

const Home=()=> {
    const rows1:any= <>
                  <Row classname="row" num="1" tea="Man city" pla='38' wo='28' dra='5' los='5' g='61' pon='89'/>   
                  <Row classname="secondrow" num="2" tea="Arsenal" pla='38' wo='26' dra='6' los='6' g='45' pon='84'/> 
                  <Row classname="row" num="3" tea="Man utd" pla='38' wo='23' dra='6' los='9' g='15' pon='75'/> 
                  <Row classname="secondrow"  num="4" tea="Newcastle" pla='38' wo='19' dra='14' los='5' g='35' pon='71'/>
                  <Row classname="row"num="5" tea="Liverpool" pla='38' wo='19' dra='10' los='9' g='28' pon='67'/>
                  <Row classname="secondrow" num="6" tea="Brighton" pla='38' wo='18' dra='8' los='12' g='19' pon='62'/>   
                  <Row classname="row" num="7" tea="Aston villa" pla='38' wo='18' dra='7' los='13' g='5' pon='61'/> 
                  <Row classname="secondrow" num="8" tea="Tottenham" pla='38' wo='18' dra='6' los='14' g='7' pon='60'/> 
                  <Row classname="row" num="9" tea="Brentford" pla='38' wo='15' dra='14' los='9' g='12' pon='59'/>
                  <Row classname="secondrow" num="10" tea="Fulham" pla='38' wo='15' dra='7' los='16' g='2' pon='52'/>
                  <Row classname="row" num="11" tea="Crystal palace" pla='38' wo='11' dra='12' los='15' g='-9' pon='45'/>   
                  <Row classname="secondrow" num="12" tea="Chelsea" pla='38' wo='11' dra='11' los='16' g='-9' pon='44'/> 
                  <Row classname="row" num="13" tea="Wolves" pla='38' wo='11' dra='8' los='19' g='-27' pon='41'/> 
                  <Row classname="secondrow" num="14" tea="West ham" pla='38' wo='11' dra='7' los='20' g='-13' pon='40'/>
                  <Row classname="row" num="15" tea="Bournemouth" pla='38' wo='11' dra='6' los='21' g='-34' pon='39'/>
                  <Row classname="secondrow" num="16" tea="Nottm forest" pla='38' wo='9' dra='11' los='18' g='-30' pon='38'/>   
                  <Row classname="row" num="17" tea="Everton" pla='38' wo='8' dra='12' los='18' g='-23' pon='36'/> 
                  <Row classname="secondrow" num="18" tea="Leicester city" pla='38' wo='9' dra='7' los='22' g='-17' pon='34'/> 
                  <Row classname="row" num="19" tea="Leeds utd" pla='38' wo='7' dra='10' los='21' g='-30' pon='31'/>
                  <Row classname="secondrow" num="20" tea="Southhamptom" pla='38' wo='6' dra='7' los='25' g='-37' pon='25'/>   
                </>
  return (
    <div className='bk'>
      <div className='home'>
        <video autoPlay loop muted>
          <source src={bgimg} type="video/mp4"/>
        </video>
        <div className='firsthalf'>
          <Table rows={rows1}/>
        </div>
        <div className='secondhalf'>
          <Smalltable league={39} />
          <Smalltable2 league={39}/>
          <Smalltable league={39} />
        </div>
      </div>  
      <div className='thirdhalf'>
        <Bottom league={39}/>
      </div> 
    </div>
  );
}

export default Home;