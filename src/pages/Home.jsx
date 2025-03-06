import HomeMenu from "../components/Profile/HomeMenu";
import HabitList from "../components/HabitList";
import { getCharacterImage } from "../util/get-character-image";
import { useState, useEffect } from "react";
import { fetchHabitList } from "../util/api"; // 공통 api 가져오기
import "./Home.css";

export default function Home() {
  const [nickname, setNickname] = useState("습관이");
  const [level, setLevel] = useState(0);
  const hobitmonId = level > 3 ? 3 : level;
  const [habitList, setHabitList] = useState([
    { habitId: 1, name: "아침 운동" },
    { habitId: 2, name: "독서 30분" },
    { habitId: 3, name: "물 2L 마시기" },
    { habitId: 4, name: "12시 전에 취침하기" },
  ]);

  // /habitmon/{memberId}/info로 get 요청 -> name, age(레벨)

  useEffect(() => {
    const memberId = localStorage.getItem("memberId");
    if (!memberId) return;

    // 습관 리스트 가져오기
    fetchHabitList(memberId).then(setHabitList);

    // 유저 정보 가져오기
    fetch(
      `https://2335-210-119-237-95.ngrok-free.app/habitmon/${memberId}/info`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 0) {
          setNickname(data.data.name);
          setLevel(parseInt(data.data.age, 10)); // 레벨 설정
        }
      })
      .catch((error) => console.error("Error fetching habitmon info:", error));
  }, []);

  // 습관 체크 시 레벨 증가

  const handleHabitCheck = () => {
    setLevel((prev) => (prev < 3 ? prev + 1 : 3)); // 최대 3까지 증가
  };

  const xp = 190;
  const maxXp = 500;
  const progress = (xp / maxXp) * 100;

  return (
    <div className="Home">
      <div className="home-header">
        습관 달성까지 <br /> 38일째!
      </div>
      <div className="home-character">
        <img src={getCharacterImage(hobitmonId)} />
        <h4>{nickname}</h4>
      </div>

      <div className="home-character-info">
        <div className="level">레벨 {level}</div>
        <div className="xp">경험치 {xp}</div>
        <div className="xp-bar-container">
          <div className="xp-bar" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="xp-percent">{progress.toFixed(0)}%</div>
      </div>

      <HabitList
        text={"🌱 오늘의 습관리스트 달성해요!"}
        list={habitList}
        onHabitCheck={handleHabitCheck}
      />
      <HomeMenu />
    </div>
  );
}
