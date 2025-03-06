import habbitmon0 from './../assets/habbitmon0.png';
import habbitmon1 from './../assets/habbitmon1.png';
import habbitmon2 from './../assets/habbitmon2.png';
import habbitmon3 from './../assets/habbitmon3.png';

// id에 따라 이미지 다르게 나오도록 설정함. App.jsx로 보냄
export function getCharacterImage(habbitmonId) {
    switch (habbitmonId) {
        case 0:
            return habbitmon0;
        case 1:
            return habbitmon1;
        case 2:
            return habbitmon2;
        case 3:
            return habbitmon3;
        default:
            return null;
    }
}