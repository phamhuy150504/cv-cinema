import React from 'react'
import { Button, Form, Input, message } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { userService } from '../../services/userService';
import { useDispatch } from 'react-redux';
import { getUserLogin } from '../../toolkits/reducers/userSlice';
import { localService } from '../../services/localService';
import { setLoadingOff, setLoadingOn } from '../../toolkits/reducers/SpinnerSlice';

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // handle
    const onFinish = (values) => {
        dispatch(setLoadingOn())
        const userLogin = async () => {
            try {
                const res = await userService().login(values)
                dispatch(getUserLogin(res.data.content))
                localService.set(res.data.content)
                message.success('Login successful')
                navigate('/')
                dispatch(setLoadingOff())
            } catch (error) {
                dispatch(setLoadingOff())
                message.error('Bạn nhập sai tài khoản hoặc mật khẩu')
            }
        }

        userLogin()
    };

    // ----------------------------------------------------------------
    return (
        <section className='w-screen h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: 'url(https://i0.wp.com/www.alphr.com/wp-content/uploads/2020/10/Netflix-001.png?fit=569%2C320&ssl=1)' }}>
            <div className='h-full flex items-center justify-center'>
                <div className='w-[400px] bg-white rounded mx-auto shadow-lg'>
                    <h2 className='text-center text-3xl font-semibold pt-5'>Login</h2>
                    <Form
                        className='p-5 '
                        name="basic"
                        labelCol={{
                            span: 24,
                        }}
                        wrapperCol={{
                            span: 24,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >

                        <Form.Item
                            label="Username"
                            name="taiKhoan"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="matKhau"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <button className='text-blue-500 underline text-xs'>
                            <NavLink to={'/register'}>
                                you don't have account ?
                            </NavLink>
                        </button>
                        <Form.Item
                            wrapperCol={{
                                span: 24,
                            }}
                            className='text-right'
                        >
                            <Button className='bg-yellow-500 w-full text-center hover:bg-yellow-400' type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </section>
    )
}
