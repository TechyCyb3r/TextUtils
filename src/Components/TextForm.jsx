import React, { useState } from 'react';
import styles from '../Styles/TextForm.module.css';

export default function TextForm(props) {
    const [text, setText] = useState("");

    // Utility functions
    const isEmpty = text.trim() === "";

    const showAlert = (message, type = "success") => {
        if (props.showAlert) {
            props.showAlert(message, type);
        }
    };

    // Handlers
    const handleUpperCase = () => {
        setText(text.toUpperCase());
        showAlert("Converted to UPPERCASE", "success");
    };

    const handleLowerCase = () => {
        setText(text.toLowerCase());
        showAlert("Converted to lowercase", "success");
    };

    const handleReset = () => {
        setText('');
        showAlert("Text cleared", "info");
    };

    const handleReverse = () => {
        setText(text.split('').reverse().join(''));
        showAlert("Text reversed", "success");
    };

    const handleSentenceCase = () => {
        const sentence = text
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
        setText(sentence);
        showAlert("Converted to sentence case", "success");
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className={`container py-4`} style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <div className="mb-3">
                <label htmlFor="textBox" className={`form-label fw-bold ${styles.myLabel}`}>
                    Enter text to analyze:
                </label>
                <textarea
                    className={`form-control ${styles.box}`}
                    id="textBox"
                    rows="6"
                    placeholder="Enter any text"
                    value={text}
                    onChange={handleChange}
                    style={{
                        backgroundColor: props.mode === "dark" ? "#d8ebff" : "white",
                        color: props.mode === "dark" ? "#000f" : "black"
                    }}
                ></textarea>
            </div>

            {/* Summary */}
            <div className="my-3">
                <p className={styles.psize}>
                    <strong>{isEmpty ? 0 : text.trim().split(/\s+/).length}</strong> words,{" "}
                    <strong>{text.length}</strong> characters,
                    takes <strong>{isEmpty ? "0.0" : (text.trim().split(/\s+/).length * 0.008).toFixed(2)}</strong> minutes to read
                </p>
            </div>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-dark" onClick={handleUpperCase} disabled={isEmpty}>
                    UPPERCASE
                </button>
                <button className="btn btn-dark" onClick={handleLowerCase} disabled={isEmpty}>
                    lowercase
                </button>
                <button className="btn btn-dark" onClick={handleReverse} disabled={isEmpty}>
                    Reverse
                </button>
                <button className="btn btn-dark" onClick={handleSentenceCase} disabled={isEmpty}>
                    Sentence Case
                </button>
                <button className="btn btn-secondary" onClick={handleReset} disabled={isEmpty}>
                    Clear
                </button>
            </div>
        </div>
    );
}
