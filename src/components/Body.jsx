import MainPage from "./MainPage";
import PersonalPage from "./PersonalPage";

function Body(props) {
    return (
        <div className='body'>
            <MainPage
                activeId={props.tabId}
                user={props.user}
            />
            <PersonalPage
                activeId={props.tabId}
                labels={props.labels}
                userId={props.userId}
                songPlaying={props.songPlaying}
                setSongPlaying={props.setSongPlaying}
            />
        </div>
    )
}

export default Body