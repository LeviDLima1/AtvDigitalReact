import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react'
export default function Slider() {
    const [slidesPerView, setSlidesPerView] = useState(2)

    const data = [
        {
            id: '1', image: 'https://i.pinimg.com/736x/55/b9/b0/55b9b01ea653984c0c89e4ad431f2519.jpg'
        },
        {
            id: '2', image: 'https://i.pinimg.com/736x/cb/4b/12/cb4b1262a8f1621628d0c229d672ba56.jpg'
        },
        {
            id: '3', image: 'https://flaviocopes.com/images/vite-react-app/Untitled%203.png'
        },
        {
            id: '4', image: 'https://flaviocopes.com/images/vite-react-app/Untitled%205.png'
        },
    ]

    useEffect(() => {

        function handleResize(){
            if(window.innerWidth < 720){
                setSlidesPerView(1);
            }
            else{
                setSlidesPerView(2);
            }
        }
        
        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])



    return (
        <>
            <div className='mb-10'>
                <Swiper
                slidesPerView={slidesPerView}
                pagination={{ clickable: true }}
                navigation
                className=''
                >



                    {data.map((item) => (

                        <SwiperSlide className='flex items-center justify-center p-2' key={item.id}>
                            <img src={item.image}
                            alt="Slider" 
                            className='w-full h-[25vh] sm:h-[45vh] bg-cover m-auto rounded-2xl'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    )
}