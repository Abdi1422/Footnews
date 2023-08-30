import './row.scss';

type proptypes ={
    num:string;
    tea:any;
    pla:string;
    wo:string;
    dra:string;
    los:string;
    g:string;
    pon:string;
    classname:string;
}

const Row=(props:proptypes)=> {
    const {num,tea,pla,wo,dra,los,g,pon,classname} = props
    
    return (
            <div className={classname}>
                <div className='columns'>
                    <div className='numbers'>{num}</div>
                    <div className='teams'>{tea}</div>
                    <div className='played'>{pla}</div>
                    <div className='won'>{wo}</div>
                    <div className='draw'>{dra}</div>
                    <div className='loss'>{los}</div>
                    <div className='gd'>{g}</div>
                    <div className='points'>{pon}</div>
                </div>
            </div>
       )
    }

export default Row