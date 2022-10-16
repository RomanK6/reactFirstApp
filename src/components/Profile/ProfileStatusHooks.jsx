import React, {useState, useEffect} from "react";
import style from "./Profile.module.css"


const ProfileStatusHooks = (props) => {
    
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <>
        {
            !editMode && <span className={style.Status} onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
        }
        {
            editMode && <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={status} /> 
        }
    </>)
}

export default ProfileStatusHooks;