import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./HabitmonConfirm.css";
import habbitmon0 from "../assets/habbitmon0.png";
import Button from "../components/Button";
import { CharacterStateContext } from "../App";

const HabitmonConfirm = () => {
  // characterInfo가 배열이 아닌 객체여야 하므로, 상태에서 가져올 때 수정
  const { characterInfo } = useContext(CharacterStateContext) || {};
  const habitmonName = characterInfo?.name || "습관이"; // characterInfo가 없으면 기본값

  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (habitmonName) {
      navigate("/signup-profile");
    }
  };

  return (
    <div className="habitmon-confirm-container">
      <div className="habitmon-little">
        <p className="habitmon-confirm-title">
          내가 키울 습관 이름은 <br />
          <span className="habitmon-highlight">{habitmonName}!</span>
        </p>
        <img
          src={habbitmon0}
          alt="Habitmon"
          className="habitmon-confirm-image"
        />
        <p className="habitmon-confirm-text">
          습관을 매일매일 지킬 때마다 <br />
          <span className="habitmon-highlight">{habitmonName}</span>도 자라날
          거예요
        </p>
      </div>
      <div className="habitmon-button">
        <Button
          text="확인"
          type={habitmonName ? "primary" : ""}
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default HabitmonConfirm;
