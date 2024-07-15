import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Add() {
  const { register, handleSubmit } = useForm();
  const navi = useNavigate();

  function saveData(data) {
    axios.post('http://localhost:5000/user', data);
    //alert('record added')
    navi('/user/show')
  }
  return (
    <>
      <div className='container'>
        <center><h2><u>STUDENT FORM:</u></h2></center>
        <form onSubmit={handleSubmit(saveData)} className='mt-5'>
          <label htmlFor='r'><b> ENTER ROLL NO:</b></label>
          <input type='number' id='r' className='from-control'
            {...register('roll')} />
          <br /><br />
          <label htmlFor='n'><b> ENTER NAME:</b></label>
          <input type='text' id='n' className='from-control'
            {...register('name')} />
          <br /><br />
          <label htmlFor='m'><b> ENTER MARKS:</b></label>
          <input type='number' id='m' className='from-control'
            {...register('marks')} />
          <br /><br />
          <input type="submit" value="Add student" className='btn btn-outline-success col-6' />
          <input type="reset" value="Reset" className='btn btn-outline-warning col-6' />

        </form>
      </div>
    </>
  )
}

export default Add;