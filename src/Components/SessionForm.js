import { useState } from "react";

function SessionForm() {
  const [smile, setSmile] = useState(0);
  const [conv, setConv] = useState(0);
  const [form, setForm] = useState(0);
  const [story, setStory] = useState(0);
  const [message, setMessage] = useState(0);
  const [number, setNumber] = useState(0);

  return (
    <form id="darForm">
      <div>
        <div>
          <label>SMILE AND COMPLIMENTS</label>
          <input
            type="number"
            name="smile"
            id="smile"
            className="formInput"
            readOnly={true}
            min="0"
            value={smile}
            onChange={(e) => setSmile(e.target.value)}
          />
        </div>
        <div>
          <label>CONVERSATIONS</label>
          <input
            type="number"
            name="conversations"
            id="conversations"
            className="formInput"
            readOnly={true}
            min="0"
            value={conv}
            onChange={(e) => setConv(e.target.value)}
          />
        </div>
        <div>
          <label>FORM CONVERSATIONS</label>
          <input
            type="number"
            name="form"
            id="form"
            className="formInput"
            readOnly={true}
            min="0"
            value={form}
            onChange={(e) => setForm}
          />
        </div>
        <div>
          <label>TELLING YOUR STORY</label>
          <input
            type="number"
            name="story"
            id="story"
            className="formInput"
            readOnly={true}
            min="0"
            value="0"
          />
        </div>
        <div>
          <label>MESSAGE DROPS</label>
          <input
            type="number"
            name="message"
            id="message"
            className="formInput"
            readOnly={true}
            min="0"
            value="0"
          />
        </div>
        <div>
          <label>NAMES AND NUMBERS</label>
          <input
            type="number"
            name="number"
            id="number"
            className="formInput"
            readOnly={true}
            min="0"
            value="0"
          />
        </div>
      </div>
    </form>
  );
}

export default SessionForm;
