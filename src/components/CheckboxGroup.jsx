import React from "react";
import "./CheckboxGroup.css";

function CheckboxGroup() {
    const terms = [
        { text: "전체 동의", hasLink: false },
        { text: "만 14세 이상 가입 동의 (필수)", hasLink: false },
        { text: "서비스 이용 동의 (필수)", hasLink: true },
        { text: "개인정보처리방침 동의 (필수)", hasLink: true }
    ];

    return (
        <div className="CheckboxGroup">
            <h5 className="checkboxgroup-title">약관 동의</h5>
            {terms.map((term, index) => (
                <label key={index} className="checkboxgroup-item">
                    <div className="checkbox-text">
                        <input type="checkbox" className="checkboxgroup-option" />
                        <span>{term.text}</span>
                    </div>
                    {term.hasLink && (
                        <button className="checkboxgroup-button" type="button">
                            약관보기
                        </button>
                    )}
                </label>
            ))}
        </div>
    );
}

export default CheckboxGroup;
