export default function setBodyColor({color}) {
    document.documentElement.style.setProperty('--body-color', color)
}