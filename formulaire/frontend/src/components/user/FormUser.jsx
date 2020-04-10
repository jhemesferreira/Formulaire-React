import React from 'react'
import ButtonUser from './ButtonUser'



export default props => {
    return (
        <div className="form">
            <div className="row" >
                {props.label.map((element, index) => (
                    <div key={index} className="col-12 col-md-6 justify-content">
                        <div className="form-group">
                            <label>{element.title}</label>
                            <input type="text" className="form-control"
                                name={element.name}
                                value={element.value || ''}
                                onChange={element.onChange}
                                placeholder={element.placeholder} />
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <ButtonUser color="btn-primary" action={props.save} button="Enregistrer"/>
                    <ButtonUser color="btn-secondary ml-2" action={props.clear} button="Annuler"/>
                </div>
            </div>
        </div>
    )
}


