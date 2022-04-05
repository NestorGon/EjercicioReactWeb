import Art from "./art";
import './museums.css';
function MuseumDetail(props) {
    return (
        <div className="container">
            <p>Home &gt; Museos</p>
            <div id="title">
                <strong>MUSEO {props.data.name}: Obras principales</strong>
            </div>
            <div className="container" id="museum-row">
                {props.data.artworks.map((item) => (
                    <div key={item.id}>
                        <Art data={item}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default MuseumDetail;