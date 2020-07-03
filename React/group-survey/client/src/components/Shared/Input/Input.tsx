import { Component } from "react";
import React from "react";
import styles from './Input.module.css';

type InputProps = {
    type: string
    placeholder: string 
}

export default class Input extends Component<InputProps> {
    render() {
        return <>
            <label className={styles.test}>{this.props.placeholder}
                <input type={this.props.type} placeholder={this.props.placeholder}/>
            </label>
        </>
    }
}