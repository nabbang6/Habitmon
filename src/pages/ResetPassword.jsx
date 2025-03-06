import "./ResetPassword.css";
import BackButton from "../components/Profile/BackButton";
import InputField from "../components/InputField";
import Button from "../components/Button";
export default function ResetPassword() {
    return (
        <div className="ResetPassword">
            {/* 프로필로 돌아가기 */}
            <BackButton /> 
            <h2 className="resetpassword-header">비밀번호 재설정</h2>
            <div className="resetpassword-inputfield">
                <InputField label="현재 비밀번호" placeholder="현재 비밀번호 입력"  showDuplicateCheck={true}/>
                <InputField label="새 비밀번호" type="password" placeholder="8자 이상 입력" />
                <InputField label="새 비밀번호 재입력" type="password" placeholder="8자 이상 입력" />
            </div>
            <div className="resetpassword-button">
                <Button text={"완료"} type={"primary"}/>
            </div>

        </div>
    );
}
