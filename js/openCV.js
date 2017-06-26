//Downloads a copy of my CV, when the link is clicked

function OpenCV() {
    var CVlink = document.getElementById("CVLink");
    CVlink.setAttribute("href", "cv/CV.docx");
    CVlink.click();
}