import Button from "../components/Button";
import SelectField from "../components/SelectField";
import BackButton from "../components/Profile/BackButton";
import "./ProfileSet.css";

export default function ProfileSet() {
    return (
        <div className="ProfileSet">
            {/* 프로필로 돌아가기 */}
            <BackButton /> 
            <h2 className="profileset-header">프로필 편집</h2>

            <div className="profileset-main">
                <div className="email">
                    <h2>이메일</h2>
                    <input type="email" value={"habitmon1234@gmail.com"} />
                </div>
                <div className="nickname">
                    <h2>닉네임</h2>
                    <input type="text" value={"불사조"} />
                </div>
                <div className="info">
                    <SelectField label="나이" options={["10대", "20대", "30대", "40대", "50대 이상"]} />
                    <SelectField label="성별" options={["남자", "여자", "기타"]} />
                </div>
            </div>
            <div className="profileset-button">
                <Button text={"완료"} type={"primary"}/>
            </div>
            

        </div>
    );
}
