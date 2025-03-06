import InputField from "../components/InputField";
import Button from "../components/Button";
import "./Login.css";

export default function Login(){
    return (
        <div className="Login">
            <h2 className="login-header">이메일 로그인</h2>
            <div className="login-inputfield">
                <InputField label="이메일" placeholder="이메일을 입력해 주세요" />
                <InputField label="비밀번호" type="password" placeholder="8자 이상" />
            </div>
            <div className="login-botton">
                <Button  text="로그인" />
            </div>

        </div>
    )
}