import React from "react";
import style from "./Profile.module.css"


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode() {
        this.setState({
            editMode: true,
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState(
            {
                status: e.currentTarget.value,
            }
        )
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    render () {
        return (
            <>
            {
                this.state.editMode === true 
                ? <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} value={this.state.status} /> 
                : <span className={style.Status} onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || 'No status'}</span>
            }
            </>)
    }
}

export default ProfileStatus;