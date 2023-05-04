import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export const headerTable = [
    {
      title: "Id",
      dataIndex: "maPhim",
      key: "maPhim",
      sorter: (a, b) => b.maPhim - a.maPhim,
      sortDirections: ['descend', 'ascend']
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
      render: (moTa) => {
        return <p className="w-96">{moTa.length > 150 ? moTa.substring(0,150)+ '...' : moTa}</p>;
      },
    },
    {
      title: "Đánh gia",
      dataIndex: "danhGia",
      key: "danhGia",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "danhGia",
      render: (url) => {
        return <img src={url} className="w-20" alt="" />;
      },
    },
    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
      render: (action) => {
        return <div className='space-x-2 flex items-center'>
            <p  className="text-2xl text-red-600 cursor-pointer">
            <DeleteOutlined />
            </p>
            <p className="text-2xl text-blue-600 cursor-pointer">
            <EditOutlined />
            </p>
        </div>
      }
    },
  ];