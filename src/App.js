import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="d48dd6ab-d98c-40cf-936f-9bb0ba696b4e"
            userName="kmyles82"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            // onNewMessage={() => console.log('new message')}
        />
    )
}

export default App