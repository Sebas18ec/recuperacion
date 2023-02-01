function Card({title, description, measurements_sourcename,measurements_value,measurements_unit}){
    return(
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Fuente:{measurements_sourcename}</li>
            <li class="list-group-item">Valor:{measurements_value}</li>
            <li class="list-group-item">Unidad:{measurements_unit}</li>
          </ul>
        </div>
    );

}

export default Card;
