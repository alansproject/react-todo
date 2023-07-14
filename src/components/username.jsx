/* eslint-disable react/prop-types */
export default function Username({ userName, setUserName, showing, setShowing }){
    function handleShowing(){
        setShowing(!showing)
      }
    return(
        <div className='wrapper'>
        <div className="username-popup">
            <img src="/images/popup.svg" alt="hello" />
            <section className='text'>
                <h2>Enter a username...</h2>
                <input  type='text' value={userName} onChange={(e) => setUserName(e.target.value)} maxLength={10}/>
                <button type='button' onClick={handleShowing}>Ok</button>
            </section>
        </div>
        </div>
    )
}