import React from 'react'
import "./style/title.scss"
import { Typography, Button } from '@mui/material';

// Ảnh
import ImgBg_1 from '../../assets/images/bg-1.png';

export default function Title() {
    return (
        <div className='title'>
            <img src={ImgBg_1} alt="" style={{ width: "100%" }} />
            <div className="title-content">
                <Typography variant='h2' component='h2' sx={{ fontSize: { lg: '80px', md: '50px', xs: '30px' } }}>
                    KHÓA HỌC ONLINE
                </Typography>

                <Typography variant='h1' component='h1' sx={{ fontSize: { lg: '180px', md: '120px', xs: '80px' } }}>
                    TIẾNG THÁI
                </Typography>


                <Typography mt={5} variant='h4' component='h4' sx={{ fontSize: { lg: '36px', md: '24px', sm: '18px', xs: '14px' } }}>Xây dựng nền tảng và phát triển toàn diện</Typography>
                <Typography mt={3} variant='h4' component='h4' sx={{ fontSize: { lg: '36px', md: '24px', sm: '18px', xs: '14px' } }}>4 kỹ năng "Nghe – Nói – Đọc – Viết” </Typography>
                <Typography mt={3} variant='h4' component='h4' sx={{ fontSize: { lg: '36px', md: '24px', sm: '18px', xs: '14px' } }}>Cho người mời bắt đầu học Tiếng Thái</Typography>
                <div style={{ marginTop: "80px" }}>
                    <Button sx={{ backgroundColor: "#d5d5d5", color: "#5c246d", fontSize: { md: '24px', xs: '14px' } }}>Đăng ký học</Button>
                    <Button className='mx-5' sx={{ backgroundColor: "#5c246d", color: "#ffff", fontSize: { md: '24px', xs: '14px' } }}>Tìm hiểu thêm</Button>
                </div>
            </div>
        </div>
    )
}
