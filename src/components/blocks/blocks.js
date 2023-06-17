import React from 'react';
import './blocks.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Blocks = (props) => {
    const { banner_picture, profile_pic, name, title, date, read } = props.block;
    const btnBookmark = props.btnBookmark;
    const btnTime = props.btnTime;

    return (
        <div className='blocks'>
            <img className='banner-pic' src={banner_picture} alt=""></img>
            <br></br>

            <div className='pro-pic-name'>

                <img className='pro-pic' src={profile_pic} alt=''></img>
                <div>
                    <p className='name'>{name}</p>
                    <p className='date'>{date}</p>
                </div>

                <p className='read'>0{read} min read </p> &nbsp;
                <button className='btn-bookmark'
                    onClick={() => btnBookmark(props.block)}>
                    <FontAwesomeIcon className='bookmark' icon={faBookmark} /></button>
            </div>

            <p className='title'>{title}</p>
            <button className='btn-read' onClick={() => btnTime(props.block)}>Mark as read</button>
            <ToastContainer style={{ fontWeight: '600' }} />
            <hr className='block-hr'></hr>
        </div>
    );
};

export default Blocks;