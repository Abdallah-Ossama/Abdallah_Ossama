import "./Message.css";

const Message = ({text}) => {
  return (
    <div id="Message-container">
      <div id="Message" >
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
      </div>
    </div>
  )
}

export default Message