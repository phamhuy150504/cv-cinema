import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Switch
} from 'antd';
import { adminService } from '../../../services/AdminService'
import { useFormik } from 'formik';
// import *  as Yup from 'yup'
import moment from 'moment';
import { useState } from 'react';

const AddNewMovie = () => {
  const [imgSrc, setImgSrc] = useState('')

  const postNewMovie = async (formData) => {
    try {
      const res = await adminService().addNewMovie(formData)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  // handle Form
  const formik = useFormik({
    initialValues: {
      tenPhim: '',
      trailer: '',
      moTa: '',
      ngayKhoiChieu: '',
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {}
    },
    // validationSchema: Yup.object({
    //   tenPhim: Yup.string().min(5, 'Name movie must be at least 5 characters !')
    //   .max(25, 'Name movie must be at least 25 characters!')
    //   .required('You must fill in this section !'),
    //   trailer: Yup.string()
    // }),
    onSubmit: (values) => {
      console.log(values)
      let formData = new FormData()

      for (let key in values) {
        <p></p>
        // values.hinhAnh.name of file 
        !key == 'hinhAnh' ? 
        formData.append(key, values[key]) 
        : 
        formData.append('File', values.hinhAnh, values.hinhAnh.name)
      }

      postNewMovie(formData)
    },
  })

  const handleChangeDatePicker = (values) => {
    const ngayKhoiChieu = moment(values).format('DD/MM/YYYY')
    formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
  }

  const handleChangeSwitch = (name) => {
    return (values) => {
      formik.setFieldValue(name, values)
    }
  }

  const handleChangeFile = (e) => {
    let file = e.target.files[0]
    if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/gif') {
      // new File => Reader of JS supports translates files
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      }
    }

    formik.setFieldValue('hinhAnh', file)
  }

  // ----------------------------------------------------------------
  return (
    <div className='flex items-center justify-center w-full  flex-col'>
      <h3 className='text-center font-bold text-3xl pb-5'>ADD NEW MOVIE </h3>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        layout="horizontal"
        style={{
          minWidth: '600px'
        }}
      >
        <Form.Item label="Tên Phim">
          <Input onBlur={formik.handleBlur} name='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim} />
          {/* {formik.touched.tenPhim && formik.errors.tenPhim  && <p className='text-xs text-red-500'>{formik.errors.tenPhim}</p>}  */}
        </Form.Item>

        <Form.Item label="Trailer">
          <Input name='trailer' onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Mô Tả">
          <Input name='moTa' onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Ngày Khởi Chiếu">
          <DatePicker name='ngayKhoiChieu' format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} />
        </Form.Item>

        <Form.Item label="Đang Chiếu">
          <Switch onChange={handleChangeSwitch('dangChieu')} />
        </Form.Item>

        <Form.Item label="Sắp Chiếu chiếu">
          <Switch onChange={handleChangeSwitch('sapChieu')} />
        </Form.Item>

        <Form.Item label="Hot">
          <Switch onChange={handleChangeSwitch('hot')} />
        </Form.Item>

        <Form.Item label="Số sao">
          <InputNumber min={1} max={10} onChange={handleChangeSwitch('danhGia')} />
        </Form.Item>

        <Form.Item label="Hinh anh">
          <input onChange={handleChangeFile} type="file" />
          <br />
          <img src={imgSrc} alt="..." className='w-[100px] h-[150px]' />
        </Form.Item>

        <Form.Item label="Button">
          <button type='submit' className='border-2 border-blue-600 bg-blue-600 px-5 rounded-lg hover:bg-white text-white hover:text-black duration-300' >Button</button>
        </Form.Item>
      </Form>

    </div>
  );
};
export default AddNewMovie;