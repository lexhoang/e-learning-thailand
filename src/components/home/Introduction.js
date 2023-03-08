import { Grid, Typography } from '@mui/material';
import React from 'react'
import './style/introduction.scss';
import Img_User from '../../assets/images/user_1.png';
export default function Introduction() {
  return (
    <div className='bg_introduction'>
      <div className='col-4 mx-auto'>
        <Typography variant='h2' component='h2' sx={{ fontSize: { lg: '80px', md: '50px', xs: '30px' } }}>
          KHÓA HỌC NÀY DÀNH CHO AI ?
        </Typography>
      </div>

      <Grid container mt={12} className='d-flex align-items-center'>
        <Grid item lg={3} xs={2} >
          <img src={Img_User} alt="" width="100%" />
        </Grid>

        <Grid item xs={7}>
          <Typography variant='h2' component='h2' sx={{ fontSize: { lg: '60px', md: '30px', xs: '20px' } }}>
            Đây sẽ là một sự lựa chọn tuyệt vời
            nếu bạn đang mong muốn học
            Tiếng Thái thành thạo ngay tại nhà!
          </Typography>
        </Grid>

        <Grid item xs={2}>

        </Grid>

      </Grid>
    </div>
  )
}
