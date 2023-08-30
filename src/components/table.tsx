import './table.scss';

const Table =({rows}:{rows:any})=> {
    
    return (
        <div className='tableframe'>
            <div className='tableheader'>
                <div className='columns'>
                    <div className='numbers'>Place</div>
                    <div className='teams'>Team</div>
                    <div className='played'>Played</div>
                    <div className='won'>Won</div>
                    <div className='draw'>Draw</div>
                    <div className='loss'>Loss</div>
                    <div className='gd'>GD</div>
                    <div className='points'>Points</div>
                </div>
            </div>
            {rows}
        </div>
  )
}

export default Table
