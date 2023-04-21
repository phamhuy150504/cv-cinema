import React from 'react'

export default function ItemTheater({ itemMovie }) {
    return (
        <div className="flex items-center space-x-5 border-black border-b pb-3">

            <img
                className="h-36 w-24 object-cover object-top rounded"
                src={itemMovie.hinhAnh}
                alt=""
            />

            <div>
                <div className='flex items-center space-x-5'>
                    <h5 className="font-medium text-xl mb-5 border-b-2 border-yellow-500">{itemMovie.tenPhim.substring(0, 25)}</h5>
                </div>
                <div className="grid gap-5 grid-cols-3">
                    {itemMovie.lstLichChieuTheoPhim.slice(0, 3).map((item) => {
                        return (
                            <button className="rounded px-3 py-1 hover:bg-yellow-400 duration-200 text-white bg-yellow-500 font-medium">
                                {item.ngayChieuGioChieu.substring(0, 12)}
                            </button>
                        );
                    })}
                </div>
            </div>
            
        </div>
    )
}
