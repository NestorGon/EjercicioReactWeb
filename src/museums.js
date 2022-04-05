import { useEffect, useState } from "react";
import Museum from "./museum";
import MuseumDetail from "./museumDetail";
import './museums.css';

function Museums() {
    let [museums,setMuseums] = useState([]);
    let [clicked,setClicked] = useState(false);
    let [clickedItem,setClickedItem] = useState({});
    useEffect(()=>{
        fetch('https://back-museums-uniandes.herokuapp.com/api/museums')
        .then(resp=>resp.json())
        .then(museums=>{
            setMuseums(museums);
        });
    });
    let handleClick = (item) => {
        console.log('clicked',item);
        setClickedItem(item);
        setClicked(true);
    };
    if (!clicked) {
        return (
            <div className="container">
                <p>Home &gt; Museos</p>
                <div id="title">
                    <strong>MUSEOS</strong>
                </div>
                <div className="row" id="museum-row">
                    {museums.map((item) => (
                        <div className="col-3" key={item.id} onClick={()=>handleClick(item)}>
                            <Museum data={item}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <MuseumDetail data={clickedItem}/>
        );
    }
    
}

export default Museums;