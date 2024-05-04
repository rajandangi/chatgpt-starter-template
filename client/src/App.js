import logo from './logo.svg';
import './Normalize.css';
import './App.css';
import ChatIcon from './ChatIcon';
import ChatgptIcon from './ChatgptIcon';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          New Chat
          <span>
            <ChatIcon />
          </span>
        </div>
      </aside>

      <section className="chatbox">

        <div className='chat-log'>
          <div className="chat-message">
            <div className="chat-message-center">
              <div className="avatar">
                <img alt="User" referrerpolicy="no-referrer" loading="lazy" width="40" height="40" src="https://lh3.googleusercontent.com/a/ALm5wu0YFv4LDcc782wPsy6UsyWcricu7l-tS58kequ4gA=s96-c" />
              </div>
              <div className="message">
                hello
              </div>
            </div>
          </div>

          <div className="chat-message chatgpt">
            <div className="chat-message-center">
              <div className="avatar chatgpt">
                <ChatgptIcon />
              </div>
              <div className="message">
                hello,I'm AI
              </div>
            </div>
          </div>
        </div>


        <div className="chat-input-holder">
          <textarea className='chat-input-textarea' rows="1">
          </textarea>
        </div>

      </section>
    </div>
  );
}

export default App;
