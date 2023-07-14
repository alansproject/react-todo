/* eslint-disable react/prop-types */
export default function WebInfo( { showInfo, setShowInfo }){
    function handleShowing(setShowInfo){
        setShowInfo(!showInfo)
    }
    return(
        <div className='wrapper'>
        <div className="username-popup info-popup">
            <section className='text'>
                <h3>Web Info</h3>
                <p>This is my first simple React project</p>
                <p style={{marginTop: '15px'}}>I created this using : </p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Vanilla Javascript</li>
                    <li>React JS as a framework</li>
                </ul>
                <footer>
                    <hr/>
                    <p>&copy; 2023 coded by <span>Alan Sadewa</span></p>
                </footer>
                <button type='button' onClick={() => handleShowing(setShowInfo)}>X</button>
            </section>
        </div>
        </div>
    )
}