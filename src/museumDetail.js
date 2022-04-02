import Art from "./art";
function MuseumDetail(props) {
    return (
        <div className="container">
            <strong>Museo {props.data.name}: Obras principales</strong>
            <div className="container">
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