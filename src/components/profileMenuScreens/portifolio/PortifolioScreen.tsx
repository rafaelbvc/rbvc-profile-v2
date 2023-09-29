import { twMerge } from "tailwind-merge"
import MenuHeader from "../../MenuHeader"
import { TScreensPropsTypes } from "../../../types/screensPropsType"
import FindYourMealScreen from "./FindYourMeal/FindYourMealScreen"
import { useState } from "react"
import ArrowLeft from "../../svg/ArrowLeft"
import { RxDotFilled } from "react-icons/rx"
import ArrowRight from "../../svg/ArrowRight"
import TransPayScreen from "./TransPay/TransPayScreen"
import RBVCProfileScreen from "./RBVCProfile/RBVCProfileScreen"


const projectComponent = [
    {
        component: <FindYourMealScreen />
    },
    {
        component: <TransPayScreen />
    },
    {
        component: <RBVCProfileScreen />
    }
]


const PortifolioScreen = ({ className }: TScreensPropsTypes) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? projectComponent.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === projectComponent.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (photoPath: number) => {
        setCurrentIndex(photoPath);
    };


    return (

        <article id="PortifolioScreen" className={twMerge(" ", className)}>
            <MenuHeader
                titleHeader="PORTIFOLIO"
                buttonText="TO TOP"
                hrefUp="#AboutMe"
                hrefDown="#ContactScreen"
            />
            <menu className="flex justify-center mx-auto paddingTScreens max-w-[80rem] ">
                <button onClick={prevSlide}>
                    <ArrowRight width="18" className="cursor-pointer" />
                </button>
                <menu className='flex justify-center py-2 mx-10 top-4'>
                    {projectComponent.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className="text-2xl cursor-pointer text-mediumGray"
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </menu>
                <button onClick={nextSlide}>
                    <ArrowLeft width="18" className="cursor-pointer" />
                </button>
            </menu>
            <section className="flex justify-center mx-auto paddingYScreens max-w-[80rem] flex-wrap lg:flex-nowrap">
                {projectComponent[currentIndex].component}
            </section >
        </article>
    )
}

export default PortifolioScreen