import InputField from "../components/InputField";
import CheckboxGroup from "../components/CheckboxGroup";
import Button from "../components/Button";
import "./SignUp.css";

export default function SignUp(){
    return (
        <div className="SignUp">
            <h2 className="signup-header" >회원가입</h2>
            <div className="signup-inputfield">
                <InputField label="이메일" placeholder="이메일을 입력해 주세요"  showDuplicateCheck={true}/>
                <InputField label="비밀번호" type="password" placeholder="8자 이상" />
                <InputField label="비밀번호 확인" type="password" placeholder="비밀번호를 한 번 더 입력해 주세요" />
            </div>

            <div className="signup-option">
                <CheckboxGroup />
            </div>
            <div className="signup-botton">
                <Button text="다음" disabled={true} />
            </div>

        </div>
    )
}



