import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeMenu from "../components/Profile/HomeMenu";
import HabitList from "../components/HabitList";
import Button from "../components/Button";
import { fetchHabitList } from "../util/api";
import "./Mission.css";

export default function Mission() {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택한 날짜 상태 추가
  const [habitList, setHabitList] = useState([
    { habitId: 1, name: "아침 운동" },
    { habitId: 2, name: "독서 30분" },
    { habitId: 3, name: "물 2L 마시기" },
  ]);

  useEffect(() => {
    const memberId = localStorage.getItem("memberId"); // 로컬스토리지에서 memberId 가져오기
    if (!memberId) return;

    fetchHabitList(memberId).then(setHabitList); // 공통 함수 사용
  }, []);

  const handleNavigate = () => {
    navigate("/mission-new");
  };

  const getWeekDates = (date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day;
    });
  };

  const handlePrevWeek = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() - 7);
      return newDate;
    });
  };

  const handleNextWeek = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() + 7);
      return newDate;
    });
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const weekDates = getWeekDates(currentDate);
  const formattedMonth = `${currentDate.getFullYear()}.${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="Mission">
      {/* 달력 헤더 */}
      <h2 className="checklist-title">CHECK LIST</h2>
      <div className="calender">
        <div className="calendar-header">
          <button className="calendar-next" onClick={handlePrevWeek}>
            {"<"}
          </button>
          <span>{formattedMonth}</span>
          <button className="calendar-next" onClick={handleNextWeek}>
            {">"}
          </button>
        </div>

        {/* 요일 */}
        <div className="weekdays">
          <span className="sunday">일</span>
          <span>월</span>
          <span>화</span>
          <span>수</span>
          <span>목</span>
          <span>금</span>
          <span>토</span>
        </div>

        {/* 날짜 */}
        <div className="dates">
          {weekDates.map((date, index) => (
            <span
              key={index}
              className={`date.toDateString() === new Date().toDateString()
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleDateClick(date)}
            >
              {date.getDate()}
            </span>
          ))}
        </div>
      </div>

      <div className="habit-list">
        <div className="habit-list">
          <HabitList text={"🌱 습관리스트"} list={habitList} />
        </div>
      </div>
      <div className="habit-add">
        <Button text={"습관 추가"} type={"primary"} onClick={handleNavigate} />
      </div>

      <div className="habit-menu">
        <HomeMenu />
      </div>
    </div>
  );
}
