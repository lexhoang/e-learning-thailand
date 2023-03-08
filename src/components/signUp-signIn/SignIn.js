import React, { useState } from 'react'
import { Grid, TextField, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function SignIn() {
    const [typePass, setTypePass] = useState("password");

    let elementEye = typePass == "password" ? <VisibilityIcon onClick={() => handleOnEye()} /> : <VisibilityOffIcon onClick={() => handleOffEye()} />

    const handleOnEye = () => {
        setTypePass('text');
    }
    const handleOffEye = () => {
        setTypePass('password');
    }
    return (
        <div>
            <form className="form-inline">
                <div className="col-2" style={{ margin: '200px auto' }}>
                    <div className="form-group">
                        <label htmlFor="">Tài Khoản Đăng Nhập</label>
                        <input type="text" name="" id="" className="form-control" placeholder="" />
                    </div>

                    <div className="form-group mt-4">
                        <label htmlFor="">Mật Khẩu Đăng Nhập</label>
                        <input type={typePass} name="" id="" className="form-control" placeholder="" />
                        <i style={{ float: 'right', position: 'relative', top: '-32px', cursor: 'pointer' }}>{elementEye}</i>
                    </div>
                    <NavLink to="/signup">Đăng ký tài khoản</NavLink>

                    <div className="form-group mt-4">
                        <input type="submit" className="submit-signIn btn btn-success w-100" placeholder="" value="Đăng nhập" />
                    </div>
                </div>
            </form >
        </div >
    )
}
