import moment from 'moment';
import React from 'react'
import { NavLink } from 'react-router-dom';

export default function  ItemTheater({ itemMovie }) {
    console.log(itemMovie);
    return (
        <div className="flex justify-center space-x-5 border-black border-b pb-3">

            <img
                className="h-36 w-24 object-cover object-top rounded"
                src={itemMovie.hinhAnh}
                alt="img"
            />

            <div>
                <div className='flex items-center space-x-5'>
                    <h5 className="font-medium text-2xl hover:text-[#E3D807] cursor-pointer mb-5">{itemMovie.tenPhim.substring(0, 25)}</h5>
                </div>
                <div className="grid gap-5 grid-cols-3">
                    {itemMovie.lstLichChieuTheoPhim.slice(0, 3).map((item) => {
                        return (
                         <NavLink to={`/booking/${itemMovie.lstLichChieuTheoPhim[0].maLichChieu}`}>
                                <button className="px-5 py-1 border-2 border-[#E4D807] bg-[#E4D807] rounded-sm font-semibold hover:text-white hover:bg-opacity-0 duration-300">
                                    {moment(item.ngayChieuGioChieu).format("DD -mm-yyyy")}
                                </button>
                         </NavLink>
                        );
                    })}
                </div>
            </div>

        </div>
    )
}
