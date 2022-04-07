import React, {useState, useEffect} from 'react';

const initialImg = ['starWarsBanner1.jpeg', 'starWarsBanner2.jpg', 'starWarsBanner3.jpg']

const Carrousel = () => {

    const [selectIndex, setSelectIndex] = useState(0);
    const [selectImg, setSelectImg] = useState(initialImg[0]);
    const [loading, setLoading] = useState(false);

    /* useEffect(()=>{

        const interval = setInterval(() => {
            setLoading(false)
            const nextIndex = selectIndex > 0 ? selectIndex - 1 : initialImg.length - 1;
            setSelectImg(initialImg[nextIndex])
            setSelectIndex(nextIndex)
        }, 4000);
        return (() => {clearInterval(interval)
        setLoading(true)})
        
        
    },[selectIndex]) */

    const prev = () => {
        setLoading(false)
        setTimeout(()=> {

            const nextIndex = selectIndex > 0 ? selectIndex - 1 : initialImg.length - 1;
            setSelectImg(initialImg[nextIndex])
            setSelectIndex(nextIndex)

        }, 500)
    }

    const next = () => {
        setLoading(false)
        setTimeout(() => {
            
            const nextIndex = selectIndex < initialImg.length - 1 ? selectIndex + 1 : 0;
            setSelectImg(initialImg[nextIndex])
            setSelectIndex(nextIndex)

        }, 500);
    }

    return (
        <div className='carrousel'>
            <button onClick={prev}>{'<'}</button>
                <img className='banner' src={require(`../Images/${selectImg}`)} alt='banner' onLoad={()=> setLoading(true)} style={loading ? {opacity:'1'}: {opacity:'0'}} />          
            <button onClick={next}>{'>'}</button>      
        </div>
    );
}

export default Carrousel;
