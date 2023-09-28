import { UseIsVisibleContext } from "../../context/IsVisibleContext"
import { handleVisibility } from "../../../utils/handleVisible"



const PhotosModal = () => {

  const { isVisiblePhotosModal, setPhotosModalVisibilityState } = UseIsVisibleContext()
  // onClick={() => setPhotosModalVisibilityState(handleVisibility(isVisiblePhotosModal))}

  return (
    <article className={`${isVisiblePhotosModal}  absolute flex justify-center z-40 w-screen h-screen bg-blackAlpha animate-pingIMG`} >
      <section className="flex justify-between items-center flex-col mt-[4rem] w-[21rem] h-[36rem] bg-lightGray rounded-lg shadow-md p-4">
        <header className="flex justify-between w-[21rem] px-2">
          <p className="smallTitles">PHOTOS</p>
          <button onClick={() => setPhotosModalVisibilityState(handleVisibility(isVisiblePhotosModal))} className="smallTitles">CLOSE</button>
        </header>

        <p>description</p>
        <div className="w-[18rem] h-[28rem] bg-black rounded-md"></div>
        <menu>
          <button>left</button>
          <button>right</button>
        </menu>
      </section>
    </article>
  )

}

export default PhotosModal