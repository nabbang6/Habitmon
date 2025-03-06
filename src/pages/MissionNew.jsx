import { useState, useContext, useEffect } from "react";
import "./MissionNew.css";
import InputField from "../components/InputField";
import Button from "../components/Button";
import HomeMenu from "../components/Profile/HomeMenu";
import { HabitStateContext, UserStateContext } from "../App";

export default function MissionNew() {
  const { habitInfo, setHabitInfo } = useContext(HabitStateContext);
  const { userInfo, setUserInfo } = useContext(UserStateContext);

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  console.log("현재 유저 정보:", userInfo); // 유저 정보 확인

  const [habit, setHabit] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleHabitChange = (e) => {
    console.log("입력된 습관:", e.target.value); // 입력 값 확인
    setHabit(e.target.value);
  };

  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);

  const handleSubmit = async () => {
    if (!habit || !startDate || !endDate) {
      alert("모든 항목을 입력하세요!");
      return;
    }

    const newHabit = { habit, startDate, endDate };
    setHabitInfo([...habitInfo, newHabit]);
    localStorage.setItem("habitInfo", JSON.stringify([...habitInfo, newHabit]));

    if (userInfo) {
      console.log("서버로 전송할 데이터:", {
        memberId: userInfo.id,
        habit,
        startDate,
        endDate,
      });

      try {
        const response = await fetch(
          "https://2335-210-119-237-95.ngrok-free.app/habit/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              memberId: userInfo.id,
              habit,
              startDate,
              endDate,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("습관 등록 실패");
        }

        const data = await response.json();
        console.log("백엔드 응답:", data);
        alert("습관이 등록되었습니다!");
      } catch (error) {
        console.error("습관 등록 중 오류 발생:", error);
      }
    }
  };

  return (
    <div className="MissionNew">
      <div className="missionnew-header">
        <div>매일 지킬 습관을 만들어봐요</div>
        <div>
          지금 많은 20대들이 <u>일찍 일어나기</u>에 도전하고 있어요
        </div>
      </div>

      <div className="missionnew-create-habit">
        <InputField
          label="습관 만들기"
          placeholder="할 일 입력"
          value={habit}
          onChange={handleHabitChange}
        />
      </div>

      <div className="missionnew-create-date">
        <div className="challenge">챌린지 기간</div>
        <div className="date">
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
          />
          <span>~</span>
          <input type="date" value={endDate} onChange={handleEndDateChange} />
        </div>
      </div>

      <div className="habit-add">
        <Button text="습관 추가" type="primary" onClick={handleSubmit} />
      </div>

      <div className="habit-menu">
        <HomeMenu />
      </div>
    </div>
  );
}
