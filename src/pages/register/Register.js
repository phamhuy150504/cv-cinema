import {
    Button,
    Form,
    Input,
    message
} from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { userService } from '../../services/userService';

const Register = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const onFinish = (values) => {
        const registerAPI = async () => {
            try {
                const res = await userService().registerAccount(values)
                navigate('/login')
                message.success('register Successful')
            } catch (error) {
                message.error(error.response.data.content)
            }
        } 

        registerAPI()
    };

    return (
        <section className='w-screen h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: 'url(https://i0.wp.com/www.alphr.com/wp-content/uploads/2020/10/Netflix-001.png?fit=569%2C320&ssl=1)' }}>
            <div className='h-full flex items-center justify-center'>
                <div className='w-[400px] bg-white rounded mx-auto shadow-lg'>
                    <h2 className='text-center text-3xl font-semibold pt-5'>Register</h2>
                    <Form
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        residence: ['zhejiang', 'hangzhou', 'xihu'],
                        prefix: '86',
                    }}
                    className='w-full p-5'
                    scrollToFirstError
                    layout='vertical'
                    wrapperCol={24}
                    labelCol={24}
                    autoComplete='off'
                >
                    <Form.Item
                        name="hoTen"
                        label="Full name"
                        tooltip="What do you want others to call you?"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tài khoản !',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="taiKhoan"
                        label="Account"
                        tooltip="What do you want others to call you?"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập họ và tên !',
                                whitespace: true,
                            },
                            {
                                min: 8,
                                message: 'Tài khoản tối thiểu 8 kí tự !',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'Chưa đúng định dạng email !',
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập email của bạn !',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="matKhau"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mập khẩu!',
                            },
                            {
                                min: 8,
                                message: 'Tối thiểu 8 kí tự'
                            }
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng xác nhận mật khẩu !',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('matKhau') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Mật khẩu chưa trùng khợp !'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                        <button className='text-blue-500 underline text-xs'>
                            <NavLink to={'/login'}>
                                you have had account?
                            </NavLink>
                        </button>

                    <Form.Item>
                        <Button type="primary" className='w-full bg-yellow-500 hover:bg-yellow-400' htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
                </div>
            </div>
        </section>
    );
};
export default Register;

