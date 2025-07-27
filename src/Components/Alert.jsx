import React from 'react'
function Alert(props) {
    return (
        props.alert && <>
            <div className={`alert alert-${props.alert.text} alert-dismissible fade show`} style={{marginTop: "-3.8px"}} role="alert">
                <strong>{props.alert.text.charAt(0).toUpperCase() + props.alert.text.slice(1)}!</strong> {props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    )
}

export default Alert
