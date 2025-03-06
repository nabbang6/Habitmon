import "./BackButton.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
    const nav = useNavigate();
    return (
        <button className="back-button" onClick={() => nav(-1)}>
        <IoArrowBackOutline className="back-icon" />
        <span>프로필로 돌아가기</span>
        </button>
    );
}
