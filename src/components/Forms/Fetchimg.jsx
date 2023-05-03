import { useEffect, useState } from "react";

export default function Fetchimg() {
    const [datas, updateDatas] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/`)
            .then((res) => res.json())
            .then((data) => {
            var showmore = document.getElementById('showmore');
            showmore.addEventListener('click', handleClick);
            var currentimg = 3;
            updateDatas(data.slice(0, currentimg));
            function handleClick()
            {
                currentimg +=10;
                updateDatas(data.slice(0, currentimg));
                console.log('Button clicked');
            }
            })
    }, [])
    return (
        <>
            <ul className="fetchimg">
                {
                    datas.map((dataFetch) => {
                        return (
                            <div key={dataFetch.id} className="image">
                                <figure>
                                    <img src={dataFetch.url} alt="Trulli" style={{width:"100%", objectFit:"cover"}}/>
                                        <figcaption>Title: {dataFetch.title}</figcaption>
                                        <figcaption id="url">ThumbnailURL: {dataFetch.thumbnailUrl}</figcaption>
                                </figure>
                                {/* {window.location.reload(false)} */}
                            </div>
                        )
                    })
                }
            </ul>
            <div className="show">
            <button id="showmore">show more...</button>
            </div>
        </>
    )
}