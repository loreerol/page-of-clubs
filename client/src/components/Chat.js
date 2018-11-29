import React from "react";

class Chat extends React.Component {
  render() {
    return (
      <div className="chat-app">
        <div class="chat-wrapper">
          <div class="title" />
          <div class="chat-messages-wrap">
            <ul class="chat-messages" />
          </div>
          <form action="" class="chat">
            <input type="text" id="nameInput" placeholder="Anon" />
            <input
              type="text"
              id="messageInput"
              placeholder="Type a Message..."
              required
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

export default Chat;
