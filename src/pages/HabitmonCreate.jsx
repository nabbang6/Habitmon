import "./HabitmonCreate.css";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import habbitmon0 from "../assets/habbitmon0.png";
import Button from "../components/Button";
import { CharacterStateContext } from "../App";

const HabitmonCreate = () => {
  const [habitmonName, setHabitmonName] = useState("");
  const navigate = useNavigate();
  const { setCharacterInfo } = useContext(CharacterStateContext);

  // 입력값 처리
  const handleInputChange = (e) => setHabitmonName(e.target.value);

  // 완료 버튼 클릭 시 실행
  const handleButtonClick = () => {
    if (!habitmonName.trim()) {
      alert("습관몬 이름을 입력하세요!");
      return;
    }

    const newCharacter = { name: habitmonName }; // 새로운 캐릭터 정보 객체 생성
    setCharacterInfo(newCharacter); // 상태 업데이트
    localStorage.setItem("characterInfo", JSON.stringify(newCharacter)); // 로컬스토리지에 저장

    navigate("/habitmonConfirm"); // 페이지 이동
  };

  return (
    <div className="habitmon-container">
      <div className="Little-habitmon">
        <img src={habbitmon0} alt="Habitmon" className="habitmon-image" />
        <input
          type="text"
          placeholder="습관몬"
          value={habitmonName}
          onChange={handleInputChange}
          className="habitmon-input"
        />
        <p className="habitmon-subtext">이제 나만의 습관 이름을 지어줘요</p>
      </div>
      <div className="habitmon-button">
        <Button
          text="완료"
          type={habitmonName ? "primary" : ""}
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default HabitmonCreate;
