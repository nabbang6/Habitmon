import HomeMenu from "../components/Profile/HomeMenu";
import "./Profile.css";

export default function Profile() {
  const nickname = "습관이";
  const day = "38";
  const eamil = "habbit1234@gamil.com";
  return (
    <div className="Profile">
      <h2 className="profile-header">프로필</h2>
      <div className="profile-main">
        <div className="nickname">{nickname}</div>
        <div className="email">{eamil}</div>
        <div className="process">
          <span>{nickname}</span>와 &nbsp;<span>{day}</span>일 째 달성중
        </div>
      </div>
      <button type="text">프로필 편집</button>
      <hr />
      <div className="profile-state">
        <button>비밀번호 재설정</button>
        <button>로그아웃</button>
      </div>
      <div className="profile-footer">
        {/* 홈, 미션, 프로필 */}
        <HomeMenu />
      </div>
    </div>
  );
}
