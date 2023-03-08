import React, { useState } from 'react'
import { Grid, TextField, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function SignUp() {
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
                        <label htmlFor="">Tên Facebook</label>
                        <input type="text" name="" id="" className="form-control" placeholder="" />
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="">Tài Khoản Email</label>
                        <input type="text" name="" id="" className="form-control" placeholder="" />
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="">Mật Khẩu</label>
                        <input type={typePass} name="" id="" className="form-control" placeholder="" />
                        <i style={{ float: 'right', position: 'relative', top: '-32px', cursor: 'pointer' }}>{elementEye}</i>
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="">Nhập Lại Mật Khẩu</label>
                        <input type={typePass} name="" id="" className="form-control" placeholder="" />
                        <i style={{ float: 'right', position: 'relative', top: '-32px', cursor: 'pointer' }}>{elementEye}</i>
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="">Mã Số</label>
                        <input type='text' name="" id="" className="form-control" placeholder="" />
                    </div>

                    <div className="form-group mt-3">
                        <input type="submit" className="submit-signIn btn btn-success w-100" placeholder="" value="Đăng ký tài khoản"/>
                    </div>
                </div>
            </form >
        </div >
    )
}
