import React, { useState } from 'react';

function City(props) {

    const [validationError, setValidationError] = useState(null);

    const validate = (event) => {
        const cityPattern = /^[a-z]+$/i;    //should be multiple english letters (case-insensitive)
        const valid = cityPattern.test(event.target.value);
        if (!valid) {
            setValidationError('* should be a valid city of NZ only');
            props.clearResponse();
        } else {
            setValidationError('');
            props.onCityChange(event.target.value);
        }
    };

    return (
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-10">
                    <style jsx="true">{`
                        .form-control::-webkit-input-placeholder {
                            color: #ddd;
                        }
                    `}
                    </style>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="usr" 
                        placeholder="NZ city name"
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                validate(event);
                            }
                        }}
                    ></input>   
                </div>
            </div>
            <div className="pl-3 row">
                <div className="text-danger small"> { validationError }</div>
            </div>
        </div>
    );
}

export default City