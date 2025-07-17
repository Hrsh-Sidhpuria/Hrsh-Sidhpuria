import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import './Chatbot.css';
import chatbotImg from './assets/chatbot-img.png';
import closeImg from './assets/close.png';
import userImg from './assets/user.png';

const faqData = {
  "Introduce Harsh Sidhpuria": [
    "Who is Harsh Sidhpuria?",
    "What motivates Harsh as a developer?",
  ],
  Technologies: [
    "Which programming languages does Harsh know?",
    "What web frameworks and tools does Harsh use?",
    "Which soft skills does Harsh possess?",
  ],
  Projects: [
    "What is the Path Provider project?",
    "What are Harsh's JavaScript projects about?",
    "What does the Facial Expression Detection project do?",
    "What is AuthGuard Core?",
    "What Chrome Extension did Harsh build?",
  ],
  "Additional Information": [
    "Which languages does Harsh speak?",
    "What are Harsh's interests?",
    "What certifications and awards has Harsh received?",
  ],
  Contact: ["How can I contact Harsh?", "Where can I find Harsh's profiles?"],
  Education: [
    "What degree has Harsh pursued?",
    "Which college does Harsh study in?",
    "What is Harsh's CGPA?",
  ],
};

const faqResponses = {
  "Who is Harsh Sidhpuria?":
  "Harsh Sidhpuria is a result-oriented Software Developer with a strong background in computer engineering, experienced in full-stack development using technologies like C#, ASP.NET Core, React, and Python.",
"What motivates Harsh as a developer?":
  "Harsh is driven by a passion for solving real-world problems, learning new technologies, and building impactful and efficient software solutions.",
"Which programming languages does Harsh know?":
  "Harsh has strong proficiency in C#, JavaScript, Python, and C, allowing him to build versatile and robust applications across domains.",
"What web frameworks and tools does Harsh use?":
  "He works with ASP.NET Core MVC, React JS, HTML, CSS, AJAX, MySQL, and DevOps tools like Git, GitHub, and Docker.",
"Which soft skills does Harsh possess?":
  "Harsh excels in communication, critical thinking, and decision-making, enabling him to adapt rapidly and tackle challenges effectively.",
"What is the Path Provider project?":
  "Path Provider is a QR-enabled web application that displays maps and nearby locations of a university or place using HTML, CSS, JavaScript, Python, and Folium for interactive maps.",
"What are Harsh's JavaScript projects about?":
  "Harsh has built multiple JavaScript mini-projects including a Tic-Tac-Toe game with AI, To-Do list, Random Color Generator, Text Converter, Text-to-Speech Converter, and Text Searching & Highlighting tools to enhance his JS and DOM manipulation skills.",
"What does the Facial Expression Detection project do?":
  "This project detects and classifies facial expressions in real-time using Python, OpenCV, Keras, and TensorFlow, achieving high accuracy for applications like emotion analysis and human-computer interaction.",
"What is AuthGuard Core?":
  "AuthGuard Core is a custom authentication and authorization system built in ASP.NET Core MVC without using Identity or Entity Framework, implementing role-based and claims-based access with secure password hashing and database flexibility.",
"What Chrome Extension did Harsh build?":
  "Harsh developed a Chrome Extension for picking colors from any webpage, displaying HEX, RGB, or HSL codes instantly, useful for designers and developers in their workflow.",
"Which languages does Harsh speak?":
  "Harsh speaks English, Hindi, and Gujarati, enabling him to communicate effectively with diverse groups.",
"What are Harsh's interests?":
  "His interests include continuous learning, travelling for fresh experiences, and reading books to expand his knowledge.",
"What certifications and awards has Harsh received?":
  "Harsh has completed the SAP Advanced Course in Emerging Technologies (2024) and received an Academic Excellence Award in 2023 for outstanding performance.",
"How can I contact Harsh?":
  "You can reach out to Harsh via email at harshsidhpuria@gmail.com or contact him at +91 6351455749.",
"Where can I find Harsh's profiles?":
  "Visit his portfolio at https://harsh-sidhpuria-portfolio.netlify.app/, GitHub at https://github.com/Hrsh-Sidhpuria, and LinkedIn at https://in.linkedin.com/in/harsh-sidhpuria-26a0b62b8.",
"What degree has Harsh pursued?":
  "Harsh has pursued a Bachelor of Engineering degree in Computer Engineering from Gujarat Technological University.",
"Which college does Harsh study in?":
  "He is studying at Gujarat Technological University, a reputed engineering university in Gujarat, India.",
"What is Harsh's CGPA?":
  "Harsh currently has an impressive CGPA of 9.05 in his Bachelor of Engineering program.",
};

const API_KEY = "AIzaSyDqabhiyOrLkoDLm_2H1NY3aNaV9IX1rV8";
const GEMINI_PROMPT = `You are HarshSense, a helpful AI Student Assistant developed by Harsh Sidhpuria.\n\nYour responsibilities: - You are HarshSense, an AI Agent for Harsh Sidhpuria's Portfolio and Professional Support Platform. If the user starts the conversation with a greeting, greet them warmly by introducing yourself as HarshSense, the AI agent of Harsh Sidhpuria's Portfolio. - If the user speaks to you in English, continue responding in English. If the user speaks in another language, continue in that language for the entire conversation. - If the user asks you to change the language or begins using a different language, switch and continue in that requested language seamlessly. - You must assist users with:   - **Providing information about Harsh Sidhpuria**, such as:     - **Who he is**: Harsh Sidhpuria is a result-oriented Software Developer from Surat, Gujarat, with a strong background in Computer Engineering.       - **His professional profile**: Skilled in full-stack development using C#, ASP.NET Core, React, JavaScript, and Python.       - **His passion**: Building scalable applications, solving real-world problems, and learning emerging technologies.   - **Clarifying his educational background**, such as:     - **Degree**: Bachelor of Engineering in Computer Engineering.       - **College**: Gujarat Technological University.       - **CGPA**: 9.05 CGPA.       - **Awards & Certifications**: Academic Excellence Award (2023), SAP Advanced Course in Emerging Technologies (2024).   - **Answering questions about his portfolio projects**, including:     - **Path Provider**: A QR-enabled campus navigation web application built with HTML, CSS, JavaScript, Python, and Folium for interactive maps.       - **JavaScript Projects**: Mini-projects like Tic-Tac-Toe with AI (Minimax algorithm), To-Do List, Random Color Generator, Text Converter, Text-to-Speech Converter, and Text Searching & Highlighting tools.       - **Facial Expression Detection**: A real-time facial expression classifier built using Python, OpenCV, Keras, and TensorFlow.       - **AuthGuard Core**: A custom authentication and authorization system built with ASP.NET Core MVC without using Identity Framework or Entity Framework, implementing role-based and claims-based access.       - **Chrome Extension**: A Color Picker extension that extracts color codes (HEX, RGB, HSL) from any webpage, useful for designers and developers.

- **Guiding users to Harsh's contact details and profiles**, such as:     
- **Email**: harshsidhpuria@gmail.com       - **Phone**: +91 6351455749       
- **Portfolio website**: https://harsh-sidhpuria-portfolio.netlify.app/     
- **Instagram** : https://www.instagram.com/hrsh_960s/
- **GitHub**: https://github.com/Hrsh-Sidhpuria       
- **LinkedIn**: https://in.linkedin.com/in/harsh-sidhpuria-26a0b62b8 

- remember if you are giving reply in points then dont start that point with *, means dont use * as bullet use * as to make text bolder only.
- dont give full stop after url or link simply give space and then give full stop
- **Sharing details of technologies known**, including:     - Programming Languages: C#, JavaScript, Python, C.       - Web Development: ASP.NET Core MVC, React JS, HTML, CSS, AJAX.       - Databases: MySQL.       - DevOps & Tools: Git, GitHub, Docker, SQL Server Management Studio, Eclipse, Anaconda, Jupyter Notebook, Google Colab.       - Additional Competencies: Advanced Data Structures and Algorithms, RESTful API Development, Algorithm Design and Optimization, Agile methodologies, version control, debugging, and optimization.   - **Sharing his soft skills and personal interests**, such as:     - Soft Skills: Communication, Critical Thinking, Decision Making.       - Languages Spoken: English, Hindi, Gujarati.       - Interests: Continuous learning, travelling, and reading books.   - **Helping users navigate the portfolio website effectively** or explaining any specific section if they are confused, such as where to find projects, technologies, or contact sections.
continue talking to the user as they find the chat interesting and keep the conversation going.
- here is my personal information.
- i am from surat gujarat india.
-my height is 6.3 feet.
-i have done my schooling from surat in 2021.
-i have done my btech from gtuniversity in 2025.
-my birthday is on 1th july 2003.

if user ask you about my girl friend, friends, phone password, social media account password or any this like this then reply to them in a funney way that user finds it funny and they smile also use emoji with it, reply the user with the funny answers with that ask the harsh directly. this is in such a way that user find the conversation very funny and enjoyable. 

- HarshSense should maintain a tone that is: 
- Warm, confident, clear, and structured for professional queries.
- Fun and witty with emojis for playful or off-scope personal questions.
- Always polite, never sarcastic, and never humiliating the user.


- Always use short sentences with proper spacing for readability.
- If explaining a project, break into bullet points if technical details exceed 3 lines.

- When user says 'bye' or similar, reply with:
"Thank you for exploring Harsh Sidhpuria's portfolio with HarshSense. Have a great day ahead! 😊"

- When asked about yourself, mention your version and last updated month to reflect transparency:

"I am HarshSense v1.0, last updated in July 2025 by Harsh Sidhpuria to assist visitors seamlessly."


- Answer the user in a break and in a paragraph so that it finds user read in good manner.  
- Politely refuse to answer anything outside this scope. For example, if the user asks about current world news, unrelated coding implementation help, or personal topics not mentioned above, respond with:     "I'm here to assist you with information related to Harsh Sidhpuria's profile, projects, and professional background. Please ask something in this area."     in the **same language the user is using**. - Always maintain a polite, professional, and confident tone, reflecting **Harsh Sidhpuria's personal brand**. - If users ask about your creator, mention:     "I am HarshSense, created and maintained by Harsh Sidhpuria, a Software Developer passionate about building impactful and innovative solutions." Your goal is to provide **quick, clear, and structured information**, ensuring users get a professional and seamless assistance experience while exploring **Harsh Sidhpuria's portfolio and profile**.


  
`;

function TypingIndicator() {
  return (
    <div className="typing-indicator">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! I'm HarshSense, the AI agent of Harsh Sidhpuria. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [typing, setTyping] = useState(false);
  const [faqCategory, setFaqCategory] = useState(null);
  const [showFaqQuestions, setShowFaqQuestions] = useState(false);
  const chatBodyRef = useRef(null);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const endOfMessagesRef = useRef(null);
  // Add state for toggler chat bubble
  const [showTogglerBubble, setShowTogglerBubble] = useState(false);
  const [togglerBubbleShown, setTogglerBubbleShown] = useState(false);

  // Show chat bubble after 5s if not open, hide after 30s, never show again
  useEffect(() => {
    let showTimer, hideTimer;
    if (!open && !togglerBubbleShown) {
      showTimer = setTimeout(() => setShowTogglerBubble(true), 5000);
      hideTimer = setTimeout(() => {
        setShowTogglerBubble(false);
        setTogglerBubbleShown(true);
      }, 35000); // 5s delay + 30s visible
    }
    if (open) {
      setShowTogglerBubble(false);
    }
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [open, togglerBubbleShown]);

  useEffect(() => {
    if (open && chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, open, typing]);

  // Always scroll to bottom on load, open, or new message
  useLayoutEffect(() => {
    if (!open) return;
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, [open, messages, typing]);

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: 'smooth' });
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = {
      role: "user",
      text: input,
      timestamp: new Date(),
    };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setTyping(true);

    // If FAQ, answer instantly
    if (faqResponses[input.trim()]) {
      setTimeout(() => {
        setMessages((msgs) => [
          ...msgs,
          { role: "bot", text: faqResponses[input.trim()], timestamp: new Date() },
        ]);
        setTyping(false);
      }, 900);
      return;
    }

    // Otherwise, call Gemini API
    setMessages((msgs) => [
      ...msgs,
      { role: "bot", text: "Let me think", timestamp: new Date() },
    ]);

    try {
      const reqBody = {
        contents: [
          {
            role: "model",
            parts: [
              { text: GEMINI_PROMPT },
            ],
          },
          ...messages
            .filter((m) => m.role === "user" || m.role === "bot")
            .map((m) => ({
              role: m.role === "user" ? "user" : "model",
              parts: [{ text: m.text }],
            })),
          {
            role: "user",
            parts: [{ text: input.trim() }],
          },
        ],
      };
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reqBody),
        }
      );
      const data = await res.json();
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
        "Sorry, I didn't understand that.";
      setMessages((msgs) => {
        
        const filtered = msgs.filter(
          (m) => m.text !== "Let me think" || m.role !== "bot"
        );
        return [
          ...filtered,
          { role: "bot", text: reply, timestamp: new Date() },
        ];
      });
      setTyping(false);
    } catch (err) {
      setMessages((msgs) => {
       
        const filtered = msgs.filter(
          (m) => m.text !== "Let me think" || m.role !== "bot"
        );
        return [
          ...filtered,
          { role: "bot", text: "An error occurred. Please try again.", timestamp: new Date() },
        ];
      });
      setTyping(false);
    }
  };

  const handleFaqClick = (category) => {
    setFaqCategory(category);
    setShowFaqQuestions(true);
  };

  const handleFaqQuestionClick = (question) => {
    // Add user message
    const userMsg = {
      role: "user",
      text: question,
      timestamp: new Date(),
    };
    setMessages((msgs) => [...msgs, userMsg]);
    setTyping(true);
    setShowFaqQuestions(false);
    setTimeout(() => {
      let reply = faqResponses[question] || "Let me find that out for you...";
      setMessages((msgs) => [
        ...msgs,
        { role: "bot", text: reply, timestamp: new Date() },
      ]);
      setTyping(false);
      setFaqCategory(null); // Return to category view after answer
    }, 900);
  };

  return (
    <div className="harsh-chatbot-root">
      {/* Overlay for grayout background when chat is open */}
      {open && (
        <div
          className="chatbot-overlay"
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.60)',
            zIndex: 2147483646,
            transition: 'opacity 0.2s',
            cursor: 'pointer',
          }}
          aria-label="Close chatbot"
        />
      )}
      {/* Toggler Button */}
      {!open && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 2147483647, width: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'none' }}>
          {showTogglerBubble && (
            <div className="toggler-chat-bubble" style={{ pointerEvents: 'auto' }}>
              <button className="toggler-bubble-close" onClick={() => { setShowTogglerBubble(false); setTogglerBubbleShown(true); }} aria-label="Close">×</button>
              <span>👋 Curious about Harsh?<br />Tap here to chat with my AI assistant!</span>
            </div>
          )}
          <button
            id="chatbot-toggler"
            className={`chatbot-toggler${showTogglerBubble ? ' glow' : ''}`}
            onClick={() => setOpen(true)}
            style={{ pointerEvents: 'auto' }}
          >
            <div className="rotating-dotted-circle">
                <img src={chatbotImg} alt="Chatbot" width={48} height={48} />
            </div>
          </button>
        </div>
      )}
      {/* Chatbot Popup */}
      {open && (
        <div className="chatbot-container" style={{ zIndex: 2147483647 }}>
          <div className="card">
            {/* Fixed Header */}
            <div className="card-header" style={{ position: 'sticky', top: 0, zIndex: 2 }}>
              <div className="profile-block">
                <img src={chatbotImg} alt="Bot" />
                <div className="profile-text">
                  <h5>HarshSense</h5>
                  <div className="status-row">
                    <span className="status-dot" />
                    <span id="status-text">Online</span>
                  </div>
                </div>
              </div>
              <button id="chatbot-close" onClick={() => setOpen(false)}>
                ×
              </button>
            </div>
            {/* Chat Area (scrollable) */}
            <div
              className="card-body"
              id="chatbot-body"
              ref={chatBodyRef}
              style={{ position: 'relative' }}
            >
              <div id="chat-messages">
                {/* FAQ Tabs/Buttons inside chat messages, scroll with chat */}
                {!showFaqQuestions && (
                  <div className="faq-tabs">
                    {Object.keys(faqData).map((cat) => (
                      <button
                        key={cat}
                        className={`faq-tab-btn${faqCategory === cat ? ' active' : ''}`}
                        onClick={() => handleFaqClick(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
                {/* FAQ Questions (if a category is selected) */}
                {showFaqQuestions && faqCategory && (
                  <div id="faq-list">
                    {faqData[faqCategory].map((q) => (
                      <button
                        key={q}
                        className="faq-question-btn"
                        onClick={() => handleFaqQuestionClick(q)}
                      >
                        {q}
                      </button>
                    ))}
                    <button
                      className="faq-question-btn"
                      onClick={() => { setShowFaqQuestions(false); setFaqCategory(null); }}
                    >
                      Back
                    </button>
                  </div>
                )}
                {/* Chat Messages */}
                {messages.map((msg, idx) => (
                  <div key={idx} className={`chat-message ${msg.role}`}>
                    {msg.role === 'bot' && (
                      <img src={chatbotImg} alt="Bot" />
                    )}
                    <div className="bubble">
                      {msg.role === 'bot'
                        ? msg.text
                            .split(/\n{2,}|\r?\n/)
                            .filter(Boolean)
                            .map((para, i) => {
                              // Regex to match URLs
                              const urlRegex = /(https?:\/\/[^\s]+)/g;
                              // Regex to match *bold* or **bold**
                              const boldRegex = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;
                              // Split by URL first
                              const urlParts = para.split(urlRegex);
                              return (
                                <p key={i} style={{margin: 0, marginBottom: '0.4em'}}>
                                  {urlParts.map((part, j) => {
                                    if (urlRegex.test(part)) {
                                      return (
                                        <a
                                          key={j}
                                          href={part}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          style={{ color: '#00cfff', textDecoration: 'underline', wordBreak: 'break-all' }}
                                        >
                                          {part}
                                        </a>
                                      );
                                    } else {
                                      // Now handle bold inside non-link text
                                      const boldParts = [];
                                      let lastIndex = 0;
                                      let match;
                                      boldRegex.lastIndex = 0;
                                      while ((match = boldRegex.exec(part)) !== null) {
                                        if (match.index > lastIndex) {
                                          boldParts.push(part.slice(lastIndex, match.index));
                                        }
                                        boldParts.push(
                                          <strong key={j + '-b-' + match.index} style={{fontWeight: 700}}>
                                            {match[1] || match[2]}
                                          </strong>
                                        );
                                        lastIndex = match.index + match[0].length;
                                      }
                                      if (lastIndex < part.length) {
                                        boldParts.push(part.slice(lastIndex));
                                      }
                                      return <React.Fragment key={j}>{boldParts}</React.Fragment>;
                                    }
                                  })}
                                </p>
                              );
                            })
                        : msg.text}
                      <div className="timestamp">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                    {msg.role === 'user' && (
                      <img src={userImg} alt="You" />
                    )}
                  </div>
                ))}
                {typing && <TypingIndicator />}
                <div ref={endOfMessagesRef} />
              </div>
              {/* Scroll-to-bottom arrow */}
              {showScrollDown && (
                <button className="scroll-down-arrow" onClick={scrollToBottom} title="Scroll to bottom">
                  ▼
                </button>
              )}
            </div>
            <div className="card-footer">
              <div className="input-group">
                <input
                  id="chat-input"
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  autoComplete="off"
                />
                <button id="chat-send" onClick={handleSend}>
                  Send
                </button>
              </div>
              {/* Wavy line divider below input */}
              <div className="wavy-divider" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <svg width="100%" height="24" viewBox="0 0 320 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '340px', minWidth: '120px' }}>
                  <path d="M0 20 Q 20 0, 40 20 T 80 20 T 120 20 T 160 20 T 200 20 T 240 20 T 280 20 T 320 20" stroke="#c00" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot; 