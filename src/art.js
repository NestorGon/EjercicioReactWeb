import './art.css';
function Art(props) {
    return (
        <div className="row">
            <div className="card col-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                </div>
            </div>
            <div className="card col-10 ">
                <div className="card-body">
                    <h5 className="card-title">Description</h5>
                    <p className="card-text">{props.data.description}</p>
                </div>
            </div>
        </div>
    );
}
export default Art;