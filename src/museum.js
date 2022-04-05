import './museums.css';

function Museum(props) {
    return(
        <div key={props.data.id} className="card">
            <img src={props.data.image} className="card-img-top d-flex justify-content-center pt-3 px-4" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.city}</p>
            </div>
        </div>
    );   
}

export default Museum;