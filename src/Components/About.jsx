import React from 'react';
import { FaRegLightbulb, FaUserEdit, FaCogs, FaUserAlt } from 'react-icons/fa';
import { MdOutlineAnalytics } from 'react-icons/md';

export default function About(props) {
    const isDark = props.mode === "dark";

    const pageStyle = {
        color: isDark ? 'white' : 'black',
        backgroundColor: isDark ? '#121212' : 'white',
        transition: 'all 0.3s ease-in-out',
        minHeight: '100vh',
        padding: '2rem'
    };

    const cardStyle = {
        backgroundColor: isDark ? '#1e1e1e' : '#f9f9f9',
        color: isDark ? '#ffffff' : '#000000',
        border: '1px solid',
        borderColor: isDark ? '#333' : '#ccc',
        borderRadius: '10px',
        padding: '1rem',
        marginBottom: '1.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    };

    const iconStyle = {
        fontSize: '1.5rem',
        marginRight: '10px',
        color: isDark ? '#ffc107' : '#007bff'
    };

    return (
        <div style={pageStyle} className="container-fluid">
            <div className="container">
                <h1 className="mb-4">About TextAnalyzer</h1>

                <div style={cardStyle}>
                    <h4><MdOutlineAnalytics style={iconStyle} />What is TextAnalyzer?</h4>
                    <p>
                        <strong>TextAnalyzer</strong> is a fast and intuitive tool to format and analyze text. Whether you're a student, developer, or writer, this tool simplifies tasks like casing, reversing, and word counts — all in real-time.
                    </p>
                </div>

                <div style={cardStyle}>
                    <h4><FaCogs style={iconStyle} />Features</h4>
                    <ul>
                        <li>Convert to UPPERCASE / lowercase</li>
                        <li>Sentence case formatter</li>
                        <li>Text reverse function</li>
                        <li>Word and character counters</li>
                        <li>Real-time reading time calculator</li>
                    </ul>
                </div>

                <div style={cardStyle}>
                    <h4><FaRegLightbulb style={iconStyle} />Why I Built This</h4>
                    <p>
                        I created this app to help myself and others process text quickly — without using bulky tools. It's built using React, with a clean and fast interface for instant feedback.
                    </p>
                </div>

                <div style={cardStyle}>
                    <h4><FaUserAlt style={iconStyle} />About the Developer</h4>
                    <p>
                        Hi, I'm <strong>Himanshu Agarwal</strong>, a self-taught full-stack developer focused on building meaningful tools that improve productivity. I enjoy working with React, Node.js, and everything JavaScript.
                    </p>
                    <p>
                        <strong>Connect with me:</strong><br />
                        <a href="mailto:himanshuagarwalskr@gmail.com">himanshuagarwalskr@gmail.com</a>
                        <br />
                        GitHub: <a href="https://github.com/TchyCyb3re/" target="_blank" rel="noreferrer">TchyCyb3re</a><br />
                        LinkedIn: <a href="https://www.linkedin.com/in/himanshuagarwal04/" target="_blank" rel="noreferrer">himanshuagarwal04</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
