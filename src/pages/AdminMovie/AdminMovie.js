import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import { setLoadingOff, setLoadingOn } from '../../toolkits/reducers/SpinnerSlice';
import { MovieService } from '../../services/movieService';
import { useDispatch } from 'react-redux';
import { headerTable } from './utils';
import { useNavigate } from 'react-router-dom';
const { Search } = Input;





export default function AdminMovie() {
    const onSearch = (value) => console.log(value);
    const [listMovie, setListMovie] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(setLoadingOn())
        const fetchListMovie = async () => {
          try {
            const result = await MovieService().getListMovie()
            setListMovie(result.data.content)
            dispatch(setLoadingOff())
          } catch (error) {
            dispatch(setLoadingOff())
          }
        }
        fetchListMovie()
      }, [])
    
    // handle
    const handleChangePage = () => {
        navigate('/admin/add-movie')
    }

    // ----------------------------------------------------------------
    return (
        <div>
            <h2 className='text-center font-bold text-3xl pb-5'>Manager User</h2>
            <button onClick={handleChangePage} className='border-2 border-blue-600 px-3 py-1 rounded-lg mb-3 bg-blue-600 text-white hover:bg-white hover:text-black duration-300'>ADD NEW MOVIE</button>
            <Search
            className='w-full mb-5'
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                style={{
                    width: 200,
                }}
            />
            <Table dataSource={listMovie} columns={headerTable} />;
        </div>
    )
}
