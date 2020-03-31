import React,{ Component } from 'react';
import styled from 'styled-components';

const RadioButton = ({selectedOption, handleRadioChange}) => (

    <form>
        <div className="form-check">
            <label>
            <input
                type="radio"
                name="react-tips"
                value="option1"
                checked={selectedOption == "option1"}
                onChange={handleRadioChange}
                className="form-check-input"
            />
            Option 1
            </label>
        </div>

        <div className="form-check">
            <label>
                <input
                    type="radio"
                    name="react-tips"
                    value="option2"
                    checked={selectedOption == "option2"}
                    onChange={handleRadioChange}
                    className="form-check-input"
                />
                Option 2
            </label>
        </div>

        <div className="form-check">
            <label>
                <input
                    type="radio"
                    name="react-tips"
                    value="option3"
                    checked={selectedOption == "option3"}
                    onChange={handleRadioChange}
                    className="form-check-input"
                />
                Option 3
            </label>
        </div>

        <div className="form-group">
            <button className="btn btn-primary mt-2" type="submit">
            Save
            </button>
        </div>
    </form>
);


export default RadioButton;