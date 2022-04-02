import React, {useState} from 'react';

const initialImg = ['starWarsBanner1.jpeg', 'starWarsBanner2.jpg', 'starWarsBanner3.jpg']

const Carrousel = () => {

    const [selectIndex, setSelectIndex] = useState(0);
    const [selectImg, setSelectImg] = useState(initialImg[0]);

    const prev = () => {
        const nextIndex = selectIndex > 0 ? selectIndex - 1 : initialImg.length - 1;
        setSelectImg(initialImg[nextIndex])
        setSelectIndex(nextIndex)
    }

    const next = () => {
        const nextIndex = selectIndex < initialImg.length - 1 ? selectIndex + 1 : 0;
        setSelectImg(initialImg[nextIndex])
        setSelectIndex(nextIndex)
    }

    return (
        <>
            <img src={require(`../Images/${selectImg}`)} alt='banner'/>
            <button onClick={prev}>{'<'}</button>
            <button onClick={next}>{'>'}</button>
        </>
    );
}

export default Carrousel;
