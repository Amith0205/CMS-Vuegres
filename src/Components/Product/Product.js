import "./Product.css";
import {data} from "../../data";
import {ReactComponent as Prev} from "../../img/icon-prev.svg";
import {ReactComponent as Next} from "../../img/icon-next.svg";
import {useState} from "react";
import Chat from "../ChatBox/Chat";


function Product() {
    const [currIdx, setCurrIdx] = useState(0);
    const clickPrev = () => {
        if (currIdx !== 0) {
            setCurrIdx(currIdx - 1);
        }
    };

    const clickNext = () => {
        if (currIdx !== data.length - 1) {
            setCurrIdx(currIdx + 1);
        }
    };
    return (
        <div className="App">
            <div className="container">
            
                <div className="picture">
                <div className="author">
                            <p className="content--author">
                                {
                                data[currIdx].company
                            }
                                                      
                            </p>
                            
                        </div>
                        <p className="version"> Version {data[currIdx].version} </p>
                    {
                    data[currIdx].Approved ? <p className="status">Approved</p> : <p className="status">Declined</p>
                    }
                    <img src={
                            (`${
                                data[currIdx].AdImage
                            }`)
                        }
                        alt="graphics"
                        className="img"/>
                    <div style={
                        {
                            display: "flex",
                            justifyContent: "space-between"
                        }
                    }>
                        <i className="content--text">
                            {
                            data[currIdx].tagline
                        }</i>
                        
                    </div>

                </div>

                <div className="content">
                    <Chat currIdx={currIdx}/>


                    <div className="button">
                        <button className="left-btn"
                            onClick={clickPrev}
                            aria-label="Prev">
                            <Prev/>
                        </button>
                        <button className="right-btn"
                            onClick={clickNext}
                            aria-label="Next">
                            <Next/>
                        </button>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Product;
