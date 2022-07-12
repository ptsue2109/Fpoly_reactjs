import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import "./auth.css";
import { Form, Input, message } from "antd";
import { useAppDispatch } from "../../app/stores/hooks";
import { authAsyncRegister } from "../../app/stores/slices/authThunk";

interface Props {
  user: any;
}

const Register = ({ user }: Props) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    const { meta, payload } = await dispatch(authAsyncRegister(values));
    if (meta.requestStatus == "fulfilled") {
      message.success("Register success", 2, () => {
        navigate("/login");
      });
    } else {
      message.error(`${payload}`);
    }
  };

  React.useEffect(() => {
    document.title = "REGISTER";
  }, []);
  
  return (
    <>
      <div className="card h-full">
        <div className="flex align-content-center justify-content-center card-container mt-3">
          <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 ">
            <div className="text-900 text-3xl font-medium mb-3">Register</div>
            <div className="">
              {/* <form>
                            <div className="">
                                <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                                <InputText id="email" type="text" className="w-full mb-3" />
                            </div>
                            <div className="">
                                <label htmlFor="username" className="block text-900 font-medium mb-2">username</label>
                                <InputText id="username" type="text" className="w-full mb-3" />
                            </div>
                            <div className="">
                                <label htmlFor="phoneNumber" className="block text-900 font-medium mb-2">Phone Number</label>
                                <InputText id="phoneNumber" type="number" className="w-full mb-3" />
                            </div>
                            <div className="">
                                <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                                <InputText id="password" type="password" className="w-full mb-3" />
                            </div>
                            <div className="flex justify-content-end mb-3">
                                <p className="font-medium no-underline ml-2 text-black-500 text-right cursor-pointer">Having account</p>
                                <Link to={'/login'} className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Login !</Link>
                            </div>
                            <Button label="Sign In" icon="pi pi-user" className="w-full" />
                            <div className="">
                                <Divider align="center">
                                    <div className="inline-flex align-items-center">
                                        <b>OR</b>
                                    </div>
                                </Divider>
                                <div className="button-demo">
                                    <div className="template flex justify-content-between">
                                        <Button className="google p-3" >
                                            <i className="pi pi-google px-2"></i>
                                            <span className="px-3">Google</span>
                                        </Button>
                                        <Button className="github p-3">
                                            <i className="pi pi-github px-2"></i>
                                            <span className="px-3">Github</span>
                                        </Button>
                                        <Button className="linkedin p-3">
                                            <i className="pi pi-linkedin px-2"></i>
                                            <span className="px-3">linkedin</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form> */}
            </div>
            <Form
              layout="vertical"
              form={form}
              name="register"
              onFinish={onFinish}
            >
              <Form.Item
                label="Tên Người Dùng"
                name="username"
                rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
                style={{ flex: 1 }}
              >
                <Input type="text" placeholder="Nhập vào" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
                style={{ flex: 1 }}
              >
                <Input type="email" placeholder="Nhập vào" />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
                style={{ flex: 1 }}
              >
                <Input type="text" placeholder="Nhập vào" />
              </Form.Item>
              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
                style={{ flex: 1 }}
              >
                <Input.Password placeholder="Nhập vào" />
              </Form.Item>

              <div className="flex  justify-content-end mb-3">
                <p className="font-medium no-underline ml-2 text-black-500 text-right cursor-pointer">
                  Having account?
                </p>
                <Link
                  to={"/login"}
                  className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
                >
                  Login now
                </Link>
              </div>

              <Button label="Sign In" icon="pi pi-user" className="w-full" />
              <div className="">
                <Divider align="center">
                  <div className="inline-flex align-items-center">
                    <b>OR</b>
                  </div>
                </Divider>
                <div className="button-demo">
                  <div className="template flex justify-content-between">
                    <Button className="google p-3">
                      <i className="pi pi-google px-2"></i>
                      <span className="px-3">Google</span>
                    </Button>
                    <Button className="github p-3">
                      <i className="pi pi-github px-2"></i>
                      <span className="px-3">Github</span>
                    </Button>
                    <Button className="linkedin p-3">
                      <i className="pi pi-linkedin px-2"></i>
                      <span className="px-3">linkedin</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
