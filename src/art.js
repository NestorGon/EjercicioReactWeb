function Art(props) {
    return (
        <div className="row">
            <div className="card col-2">
                <img src='../public/monalisa.jpg' className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                </div>
            </div>
            <div className="card col-10">
                <div className="card-body">
                    <h5 className="card-title">Description</h5>
                    <p className="card-text">{props.data.description}</p>
                </div>
            </div>
        </div>
    );
}
export default Art;