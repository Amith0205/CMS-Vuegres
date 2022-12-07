import "./product.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";


const Product = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        },

        {
            src: "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png"
        },
        {
            src: "https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1200&format=pjpg&exif=1&iptc=1"
        }, {
            src: "http://img1a.flixcart.com/fk-sp-static/21072015/blue-24744-yepme-8-400x400-imadqtjww8cwpthg.jpeg"
        }, {
            src: "https://media.istockphoto.com/id/1198863709/photo/skin-and-hair-care-beauty-product-mock-up-lotion-bottle-oil-cream-isolated-on-white-3d-render.jpg?s=612x612&w=0&k=20&c=_0-9dLUohaQrThH0669Ygx3Ar17rX0cRkXy0cEexfQw="
        },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber)
    };

    return (
        <div>

            <div className="prodContainer">
                {
                open && (
                    <div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark}
                            className="close"
                            onClick={
                                () => setOpen(false)
                            }/>
                        <FontAwesomeIcon icon={faCircleArrowLeft}
                            className="arrow"
                            onClick={
                                () => handleMove("l")
                            }/>
                        <div className="sliderWrapper">
                            <img src={
                                    photos[slideNumber].src
                                }
                                alt=""
                                className="sliderImg"/>
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight}
                            className="arrow"
                            onClick={
                                () => handleMove("r")
                            }/>
                    </div>
                )
            }
                <div className="prodWrapper">
                    <button className="bookNow">Accept</button>
                    <h1 className="prodTitle">Product</h1>

                    <span className="prodPriceHighlight">
                        Write your product details here
                    </span>
                    <div className="prodImages">
                        {
                        photos.map((photo, i) => (
                            <div className="prodImgWrapper"
                                key={i}>
                                <img onClick={
                                        () => handleOpen(i)
                                    }
                                    src={
                                        photo.src
                                    }
                                    alt=""
                                    className="prodImg"/>
                            </div>
                        ))
                    } </div>
                    <div className="prodDetails">
                        <div className="prodDetailsTexts">
                            <h1 className="prodTitle">Product Description</h1>
                            <p className="prodDesc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="prodDetailsPrice">
                            <h1>Perfect for your business!</h1>
                            <span>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            </span>
                            <h2>
                                <b>$100</b>
                            </h2>
                            <button>Accept or Decline</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;
