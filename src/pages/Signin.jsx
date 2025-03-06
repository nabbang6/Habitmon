import React from "react";
import Button from "../components/Button";
import "./Signin.css";

export default function Signin() {
    return (
        <div className="Signin">
            <div className="signin-header">
                <h1 className="signin-title">프로젝트명</h1>
                <p className="signin-slogan">슬로건이 들어가는 공간</p>
            </div>

            <div className="signin-buttons">
                <Button text="이메일 로그인" type="primary"/>
                <Button text="회원가입" type="third " />
            </div>
        </div>
    );
}
