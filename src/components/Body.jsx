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
            />
        </div>
    )
}

export default Body