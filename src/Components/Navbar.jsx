import styles from '../Styles/NavBar.module.css';
import PropTypes from 'prop-types';
import switchBox from '../Styles/Switchbx.module.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const textcol = props.mode === "dark" ? "white" : "black";
  return (
    <>
      <nav className={`${styles.nav}`} style={{ backgroundColor: props.mode === "dark" ? "#132E35" : "#FAF9F6" }}>
        <Link to='/' style={{ color: textcol }}> {props.title}</Link>
        <Link to='/' style={{ color: textcol, paddingLeft:"10px"}}>Home</Link>
        <Link to="/about" style={{ color: textcol, paddingLeft:"10px" }}>About</Link>
        {/* <button style={{ color: textcol }} >{props.about}</button> */}
        <div className={`${switchBox.switch}`}>
          <input type="checkbox" id="toggle" onChange={props.enableMode} />
          <label className={switchBox.label} htmlFor="toggle"></label>
          <span className={switchBox["switch-text"]} style={{ color: textcol}}>Dark Mode</span>
        </div><br/>
      </nav><br /><br/>
      {/* inset content in this div */}
      {/* <div className={`${styles.content}`}></div> */}
      {/* <div></div> */}

    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Set title here',
  about: 'Set about here'
};
