import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

export default function ImageSlider({ url, limit = 5, page = 1 }) {
    
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(true); // Set loading to true initially

    async function fetchImages(getUrl) {
        try {
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
            }
        } catch (e) {
            setErrorMsg(e.message);
        } finally {
            setLoading(false); // Set loading to false after data is received or error occurred
        }
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    useEffect(() => {
        if (url !== '') fetchImages(url);
    }, [url]);

    console.log(images);

    if (loading) {
        return <div className="">Loading data please wait</div>;
    }

    if (errorMsg !== null) {
        return <div className="">Error occurred ! {errorMsg} </div>;
    }
    
    return (
        <div className="container relative flex justify-center items-center w-[600px] h-[450px]">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="left-[1rem] absolute w-[2rem] h-[2rem] text-white" />
            {images && images.length > 0 && images.map((imagesItem, index) => (
                <img
                    key={imagesItem.id}
                    src={imagesItem.download_url}
                    alt={imagesItem.download_url}
                    className={
                        currentSlide === index 
                        ? "rounded-[0.5rem] shadow-[0px_0px_0px_7px_#666] w-full h-full"
                        : "hidden rounded-[0.5rem] shadow-[0px_0px_0px_7px_#666] w-full h-full"
                    }
                />
            ))}
            <BsArrowRightCircleFill onClick={handleNext} className="right-[1rem] absolute w-[2rem] h-[2rem] text-white" />
            <span className="flex absolute bottom-[1rem]">
                {images && images.length > 0 && images.map((_, index) => (
                    <button
                        key={index}
                        className={
                            currentSlide === index
                            ? "bg-white h-[15px] w-[15px] rounded-[50%] outline-none border-none m-[0_0.2rem] cursor-pointer"
                            : "bg-white/30 h-[15px] w-[15px] rounded-[50%] outline-none border-none m-[0_0.2rem] cursor-pointer"
                        }
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </span>
        </div>
    );
}
