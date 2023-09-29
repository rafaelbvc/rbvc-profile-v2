import { UseIsVisibleContext } from "../../context/IsVisibleContext"
import { handleVisibility } from "../../../utils/handleVisible"
import ArrowLeft from "../../svg/ArrowRight"
import ArrowRight from "../../svg/ArrowLeft"
import { useState } from "react"
import { RxDotFilled } from 'react-icons/rx';


// const photoPath = [
//   {
//     url: '/src/components/modals/photos/profile1.jpg'
//   },
//   {
//     url: '/src/components/modals/photos/profile2.jpg'
//   },
//   {
//     url: '/src/components/modals/photos/profile1.jpg'
//   }, {
//     url: '/src/components/modals/photos/profile2.jpg'
//   }, {
//     url: '/src/components/modals/photos/profile1.jpg'
//   }, {
//     url: '/src/components/modals/photos/profile2.jpg'
//   }
// ]


const PhotosModal = () => {

  const { isVisiblePhotosModal, setPhotosModalVisibilityState } = UseIsVisibleContext()

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const photoPath = [
    {
      url: 'bg-[url(/src/components/modals/photos/profile1.jpg)]'
    },
    {
      url: 'bg-[url(/src/components/modals/photos/profile2.jpg)]'
    },
    {
      url: 'bg-[url(/src/components/modals/photos/profile1.jpg)]'
    }, {
      url: 'bg-[url(/src/components/modals/photos/profile2.jpg)]'
    }, {
      url: 'bg-[url(/src/components/modals/photos/profile1.jpg)]'
    }, {
      url: 'bg-[url(/src/components/modals/photos/profile2.jpg)]'
    }
  ]

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photoPath.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === photoPath.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (photoPath: any) => {
    setCurrentIndex(photoPath);
  };
  console.log(photoPath[currentIndex].url)
  // <section className={`flex items-center justify-between flex-col mt-[4rem] w-[21rem] h-[36rem] bg-[url(${photoPath[currentIndex].url})] rounded-lg shadow-md p-4`}>
  return (
    <article className={`${isVisiblePhotosModal}  absolute flex justify-center z-40 w-screen h-screen bg-blackAlpha animate-pingIMG`}>
      <section className={`flex items-center justify-between flex-col mt-[4rem] w-[21rem] h-[36rem]  ${photoPath[currentIndex].url} rounded-lg shadow-md p-4`}>
        <header className="flex justify-end w-[21rem] px-4">
          <button onClick={() => setPhotosModalVisibilityState(handleVisibility(isVisiblePhotosModal))} className="text-3xl text-golden text-bold ">X</button>
        </header>
        <menu className="flex justify-between w-[21rem] mt-1  px-6">
          <button onClick={prevSlide}>
            <ArrowLeft width="16" className="cursor-pointer" /></button>
          <menu className='flex justify-center py-2 top-4'>
            {photoPath.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </menu>
          <button onClick={nextSlide}><ArrowRight width="16" className="cursor-pointer" /></button>

        </menu>
      </section>
    </article>
  )

}

export default PhotosModal