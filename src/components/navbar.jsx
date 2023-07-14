/* eslint-disable react/prop-types */
export default function Navbar({ showing, userName, showInfo, setShowInfo }){
    return(
        <nav>
            <section className='left'>
                <img src='/images/logo.svg'/>
                <h3 role='button' style={{cursor: 'pointer'}} onClick={() => setShowInfo(!showInfo)}>Todo List</h3>
            </section>

            <section className='right' role='button' onClick={() => showing(true)} style={{cursor: 'pointer'}}>
                <img src="/images/user-profile.svg" alt='profile' />
                <p>{userName ? userName : 'User'}</p>
            </section>
        </nav>
    )
}