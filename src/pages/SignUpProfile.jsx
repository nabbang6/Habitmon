import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import Button from "../components/Button";
import "./SignUpProfile.css";
import { UserStateContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

export default function SignUpProfile() {
  const { setUserInfo } = useContext(UserStateContext);
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);

  const isComplete = nickname.trim() !== "" && ageRange !== "" && gender !== "";

  const handleNextClick = async () => {
    if (!isComplete) return;

    setLoading(true);
    const payload = {
      nickname: String(nickname),
      ageRange: String(ageRange),
      gender: String(gender),
    };
    console.log("보내는 데이터:", payload);

    try {
      const response = await fetch(
        "https://2335-210-119-237-95.ngrok-free.app/member/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("회원가입 실패");
      }

      const data = await response.json();
      console.log("백엔드 응답:", data);

      const newUser = {
        id: data.data.memberId,
        nickname,
        ageRange,
        gender,
      };

      setUserInfo(newUser);
      localStorage.setItem("userInfo", JSON.stringify(newUser));

      navigate("/mission-new");
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="SignUpProfile">
      <h2 className="signupprofile-header">프로필 설정</h2>
      <div className="signupprofile-inputfield">
        <InputField
          label="닉네임"
          placeholder="닉네임을 입력해 주세요"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <SelectField
          label="나이"
          options={["10대", "20대", "30대", "40대", "50대 이상"]}
          value={ageRange}
          onChange={(value) => {
            console.log("선택된 나이:", value);
            setAgeRange(value);
          }}
        />
        <SelectField
          label="성별"
          options={["남자", "여자", "기타"]}
          value={gender}
          onChange={setGender}
        />
      </div>
      <div className="signupprofile-button">
        <Button
          text={loading ? "다음" : "다음"}
          type={loading ? "second" : "primary"}
          disabled={!isComplete}
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
}
