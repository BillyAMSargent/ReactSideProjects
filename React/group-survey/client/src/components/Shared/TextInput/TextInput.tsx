import { Component } from "react";
import React from "react";
import styles from './TextInput.module.css';

type InputProps = {
    type: string
    label: string
    placeholder: string 
}

class TextInput extends Component<InputProps> {
    render() {
        return <div>
            <label className={styles.test}>{this.props.label}
                <input type={this.props.type} placeholder={this.props.placeholder}/>
            </label>
        </div>
    }
}

export default TextInput;