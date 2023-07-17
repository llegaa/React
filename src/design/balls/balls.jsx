import balls from "./balls.module.css"

let Balls = (props)=>{
    return(
            <div className={balls.ball}>
                <div className={balls.ball1}></div>
                <div className={balls.ball2}></div>
                <div className={balls.ball3}></div>
                <div className={balls.ball4}></div>
            </div>
    );
}

export default Balls