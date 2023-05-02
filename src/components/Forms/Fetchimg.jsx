import { useEffect, useState } from "react";

export default function Fetchimg() {
    const [datas, updateDatas] = useState([]);
    useEffect(() => {
        let page = 1;
        fetch(`https://jsonplaceholder.typicode.com/photos?page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                // data.forEach(element => {

                //    console.log(data);
                //    console.log(`${element.id} ${element.title}`);
                // });
                updateDatas(data);
                // datas.splice(0, 10);
                // showMore();
            })
    }, [])
    function showMore()
    { 
        // datas.splice(1, 4);
        updateDatas(datas);
        console.log(datas);
    }
    return (
        <>
            <ul className="fetch">
                {
                    datas.map((dataFetch) => {
                        return (
                            <div key={dataFetch.id} class="image">
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
            <button id="showmore" onClick={showMore}>Show more...</button>
        </>
    )
}