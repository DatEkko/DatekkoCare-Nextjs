import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./AuthenticationComponent.scss";
import { useState } from 'react';
import { toast } from 'react-toastify';

const AuthenticationComponent = (props: any) => {
    const { isAdmin, setIsAdmin } = props;
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleOnChangeInput = (type: string, value: string) => {
        if (type === "email") {
            setEmail(value);
        }

        if (type === "password") {
            setPassword(value)
        }
    }

    const handleLogin = () => {
        if (!email || !password) {
            toast.error("Vui lòng nhập thông tin");
            return
        }

        if (email === "admin" && password === "123") {
            setIsAdmin(!isAdmin)
            toast.success("Đăng nhập thành công");
            return
        }

        toast.error("Sai thông tin đăng nhập");
        return
    }

    return (
        <div className="authentication">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tên đăng nhập</Form.Label>
                    <Form.Control
                        placeholder="Nhập tài khoản"
                        onChange={(event) => handleOnChangeInput("email", event?.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(event) => handleOnChangeInput("password", event?.target.value)}
                    />
                </Form.Group>
                <Button onClick={() => handleLogin()}>
                    Đăng nhập
                </Button>
            </Form>
        </div>
    )
}

export default AuthenticationComponent;