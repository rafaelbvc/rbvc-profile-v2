import { UseIsVisibleContext } from "../../context/IsVisibleContext"
import { handleVisibility } from "../../../utils/handleVisible"
import ArrowLeft from "../../svg/ArrowRight"
import ArrowRight from "../../svg/ArrowLeft"



const PhotosModal = () => {

  const { isVisiblePhotosModal, setPhotosModalVisibilityState } = UseIsVisibleContext()

  return (
    <article className={`${isVisiblePhotosModal}  absolute flex justify-center z-40 w-screen h-screen bg-blackAlpha animate-pingIMG`}>
      <section className="flex items-center flex-col mt-[4rem] w-[21rem] h-[36rem] bg-lightGray rounded-lg shadow-md p-4">
        <header className="flex justify-end w-[21rem] px-4">
          <button onClick={() => setPhotosModalVisibilityState(handleVisibility(isVisiblePhotosModal))} className="text-xl text-golden text-bold">X</button>
        </header>
        <p className="text-sm">PHOTOS</p>
        <div className="my-2 w-[19rem] h-[28rem] bg-black rounded-md"></div>
        <menu className="flex justify-between w-[21rem] mt-1  px-6">
          <ArrowLeft width="14" />
          <ArrowRight width="14" />
        </menu>
      </section>
    </article>
  )

}

export default PhotosModal