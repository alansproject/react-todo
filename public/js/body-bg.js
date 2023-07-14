export default function changeBody(showing, showInfo){
    showing || showInfo ? document.body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))' : document.body.style.background = 'white'
}