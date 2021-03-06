import React, { FC, useReducer, useState } from "react";
import ReactModal from "react-modal";
import "./Registration.css";
// import ModalProps from "../types/ModalProps";
import userReducer from "./common/UserReducer";
import { allowSubmit } from "./common/Helpers";
import PasswordComparison from "./common/PasswordComparison";
import { isPasswordValid, PasswordTestResult } from "../../common/validators/PasswordValidator";

export interface RegistrationProps {
    isOpen: boolean;
    onClickToggle: (
        e: React.MouseEvent<Element, MouseEvent> | React.
        KeyboardEvent<Element>
    ) => void;
}

const Registration: FC<RegistrationProps> = ({isOpen, onClickToggle}) => {
    const [isRegisterDisabled, setRegisterDisabled] = useState(true);
    const [{userName, password, email, passwordConfirm, resultMsg}, dispatch] = useReducer(
        userReducer, {
            userName: "davec",
            password: "",
            email: "admin@gmail.com",
            passwordConfirm: "",
            resultMsg: ""
        }
    )

    const allowRegister = (msg: string, setDisabled: boolean) => {
        setRegisterDisabled(setDisabled);
        dispatch({type: "resultMsg", payload: msg})
    }

    const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "userName", payload: e.target.value});
        if (!e.target.value) {
            allowRegister("Username cannot be empty", true);
        } else {
            allowRegister("", false)
        }
    }

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "email", payload: e.target.value});
        if (!e.target.value) {
            allowRegister("Email cannot be empty", true)
        } else {
            allowRegister("",false)
        }
    }

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "password", payload: e.target.value});
        const passwordCheck: PasswordTestResult = isPasswordValid(e.target.value);

        if (!passwordCheck.isValid) {
            allowRegister(passwordCheck.message, true);
            return
        }

        passwordsSame(passwordConfirm, e.target.value)
    }

    const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "passwordConfirm", payload: e.target.value});
        passwordsSame(password, e.target.value)
    }

    const passwordsSame = (passwordVal: string, passwordConfirmVal: string) => {
        if (passwordVal !== passwordConfirmVal) {
            allowRegister("Passwords do not match", true)
            return false
        } else {
            allowRegister("", false)
        }
        return true
    }

    const onClickRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        onClickToggle(e)
    }

    const onClickCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClickToggle(e)
    }

    return (
        <ReactModal
            className="modal-menu"
            isOpen={isOpen}
            onRequestClose={onClickToggle}
            shouldCloseOnOverlayClick={true}
        >
            <form>
                <div className="reg-inputs">
                    <div>
                        <label>username</label>
                        <input type="text" value={userName} onChange={onChangeUserName}/>
                    </div>
                    <div>
                        <label>email</label>
                        <input type="text" value={email} onChange={onChangeEmail}/>
                    </div>
                </div>
                <div>
                    <label>password</label>
                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={onChangePassword}
                    />
                </div>
                <div>
                    <label>password confirm</label>
                    <input 
                        type="password"
                        placeholder="Password Confirmation"
                        value={passwordConfirm}
                        onChange={onChangePasswordConfirm}
                    />
                </div>
                <div className="reg-buttons">
                    <div className="reg-btn-left">
                        <button
                            style={{marginLeft: ".5em"}}
                            className="action-btn"
                            disabled={isRegisterDisabled}
                            onClick={onClickRegister}
                        >
                            Register
                        </button>
                        <button
                            style={{marginLeft: ".5rem"}}
                            className="cancel-btn"
                            onClick={onClickCancel}
                        >
                            Close
                        </button>
                    </div>
                    <div className="reg-btn-right">
                        <span className="reg-btn-right">
                            <strong>{resultMsg}</strong>
                        </span>
                    </div>
                </div>
            </form>
        </ReactModal>
    )
}

export default Registration;
