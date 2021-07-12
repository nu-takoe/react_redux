import React from "react"
import Loader from "./Loader.js"
import { useDispatch, useSelector } from "react-redux"
import { fetchPic } from '../redux/actions.js'

export default function FetchImage() {
    const dispatch = useDispatch()
    let url = useSelector(state => state.img.imgObj.url)
    let loader = useSelector(state => state.img.loader)

    function changePic() {
        dispatch(fetchPic())
    }

    return (
        <>
            <h2>Нужно нажать кнопочку и будет картиночка</h2>
            <div className='img-btn'>
                {
                    loader ? <Loader /> : url === 'none' ? <p>Кнопочка ещё не нажата, нет картиночки</p> : <img alt="картиночка" src={url} />
                }
                <button onClick={changePic}>Вот и кнопочка</button>
            </div>
        </>
    )
}