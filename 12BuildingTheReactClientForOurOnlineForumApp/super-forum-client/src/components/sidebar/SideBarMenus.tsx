import { faRegistered, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { AppState } from '../../store/AppState';
import { UserProfileSetType } from '../../store/user/Reducer';
import Registration from '../auth/Registration';
import "./SideBarMenus.css"

const SideBarMenus = () => {
    const [showRegister, setShowRegister] = useState(false)
    const user = useSelector((state: AppState) => state.user)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: UserProfileSetType,
            payload: {
                id: 1,
                userName: "testUser"
            } 
        })
    }, [dispatch])

    const onClickToggleRegister = () => {
        setShowRegister(!showRegister);
    }

    return (
        <>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faUser}/>
                    <span className="menu-name">{user?.userName}</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faRegistered}/>
                    <span className="menu-name" onClick={onClickToggleRegister}>Register</span>
                    <Registration isOpen={showRegister} onClickToggle={onClickToggleRegister}/>
                </li>
            </ul>
        </>
    )
}

export default SideBarMenus