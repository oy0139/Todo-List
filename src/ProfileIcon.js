import myHeadshotImage from "./images/Headshot.jpeg";
import RaisingCanesImage from "./images/RaisingCanesTimesSquare.jpeg";

export function renderProfileIcon() {

    const profileIconWrapper = document.querySelector(".profileIcon");
    const projectIcon = document.querySelector(".projectIcon");
    const TeamIcon = document.querySelector(".teamIcon")

    const img1 = document.createElement("img");
    img1.src = myHeadshotImage;

    const img2 = document.createElement("img");
    img2.src = myHeadshotImage;
    
    const img3 = document.createElement("img");
    img3.src = RaisingCanesImage;

    profileIconWrapper.appendChild(img1);
    projectIcon.appendChild(img2);
    TeamIcon.appendChild(img3);
}
