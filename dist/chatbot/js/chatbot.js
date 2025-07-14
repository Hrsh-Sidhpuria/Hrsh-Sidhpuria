(() => {
  const API_KEY = "AIzaSyDqabhiyOrLkoDLm_2H1NY3aNaV9IX1rV8";
  //using harsh sidhpuria email id to generate temp api key for AI Agent (email : sidhpuriahrsh960@gmail.com)

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
      // "What degree is Harsh pursuing?",
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

    // "What degree is Harsh pursuing?":
    //   "Harsh is pursuing a Bachelor of Engineering degree in Computer Engineering.",
    "What degree has Harsh pursued?":
      "Harsh has pursued a Bachelor of Engineering degree in Computer Engineering from Gujarat Technological University.",

    "Which college does Harsh study in?":
      "He is studying at Gujarat Technological University, a reputed engineering university in Gujarat, India.",

    "What is Harsh's CGPA?":
      "Harsh currently has an impressive CGPA of 9.05 in his Bachelor of Engineering program.",
  };

  const elements = {
    toggler: document.getElementById("chatbot-toggler"),
    popup: document.getElementById("chatbot-popup"),
    closeBtn: document.getElementById("chatbot-close"),
    faqList: document.getElementById("faq-list"),
    chatBody: document.getElementById("chatbot-body"),
    chatMsgs: document.getElementById("chat-messages"),
    chatInput: document.getElementById("chat-input"),
    sendBtn: document.getElementById("chat-send"),
    scrollTop: document.getElementById("scroll-top"),
  };

  let chatHistory = [];

  // Make showQuestions function globally accessible
  window.showQuestions = function (category) {
    elements.faqList.innerHTML = "";
    faqData[category].forEach((question) => {
      const btn = document.createElement("button");
      btn.className = "btn btn-sm btn-light me-1 mb-1";
      btn.textContent = question;
      btn.onclick = () => {
        addUserMessage(question);
        const answer =
          faqResponses[question] || "Let me find that out for you...";
        addBotMessage(answer);
      };
      elements.faqList.appendChild(btn);
    });
  };

  function addUserMessage(text) {
    chatHistory.push({ role: "user", text });
    appendMessage("user", text);
  }

  function addBotMessage(text) {
    chatHistory.push({ role: "model", text });
    appendMessage("bot", text);
  }

  function appendBotMessage(text) {
    appendMessage("bot", text);
  }

  function appendMessage(role, text) {
    const container = elements.chatMsgs;
    const msgDiv = document.createElement("div");
    msgDiv.className = `chat-message ${role}`;

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = text;

    const timestamp = document.createElement("div");
    timestamp.className = "timestamp";
    const now = new Date();
    timestamp.textContent = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    bubble.appendChild(timestamp);

    const img = document.createElement("img");
    img.src = role === "user" ? "assets/user.png" : "assets/chatbot-img.png";
    img.alt = role === "user" ? "You" : "Bot";
    img.width = 28;

    if (role === "user") {
      msgDiv.appendChild(bubble);
      msgDiv.appendChild(img);
    } else {
      msgDiv.appendChild(img);
      msgDiv.appendChild(bubble);
    }

    container.appendChild(msgDiv);
    scrollToBottom();
  }

  function showTypingIndicator() {
    // Remove any existing typing indicator
    removeTypingIndicator();
    // Create a dedicated typing indicator container
    const indicator = document.createElement("div");
    indicator.className = "typing-indicator";
    indicator.id = "typing-indicator";
    indicator.innerHTML = `
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    `;
    elements.chatMsgs.appendChild(indicator);
    scrollToBottom();
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById("typing-indicator");
    if (indicator) {
      indicator.remove();
    }
  }

  function scrollToBottom() {
    elements.chatBody.scrollTo({
      top: elements.chatBody.scrollHeight,
      behavior: "smooth",
    });
  }

  async function sendMessage() {
    const input = elements.chatInput;
    const text = input.value.trim();
    if (!text) return;

    addUserMessage(text);
    input.value = "";
    showTypingIndicator();

    try {
      const reqBody = {
        contents: [
          {
            role: "model",
            parts: [
              {
                text: `You are HarshSense, a helpful AI Student Assistant developed by Harsh Sidhpuria.

Your responsibilities:

- You are HarshSense, an AI Agent for Harsh Sidhpuria's Portfolio and Professional Support Platform. If the user starts the conversation with a greeting, greet them warmly by introducing yourself as HarshSense, the AI agent of Harsh Sidhpuria's Portfolio.

- If the user speaks to you in English, continue responding in English. If the user speaks in another language, continue in that language for the entire conversation.

- If the user asks you to change the language or begins using a different language, switch and continue in that requested language seamlessly.

- You must assist users with:

  - **Providing information about Harsh Sidhpuria**, such as:

    - **Who he is**: Harsh Sidhpuria is a result-oriented Software Developer from Surat, Gujarat, with a strong background in Computer Engineering.  
    - **His professional profile**: Skilled in full-stack development using C#, ASP.NET Core, React, JavaScript, and Python.  
    - **His passion**: Building scalable applications, solving real-world problems, and learning emerging technologies.

  - **Clarifying his educational background**, such as:

    - **Degree**: Bachelor of Engineering in Computer Engineering.  
    - **College**: Gujarat Technological University.  
    - **CGPA**: 9.05 CGPA.  
    - **Awards & Certifications**: Academic Excellence Award (2023), SAP Advanced Course in Emerging Technologies (2024).

  - **Answering questions about his portfolio projects**, including:

    - **Path Provider**: A QR-enabled campus navigation web application built with HTML, CSS, JavaScript, Python, and Folium for interactive maps.  
    - **JavaScript Projects**: Mini-projects like Tic-Tac-Toe with AI (Minimax algorithm), To-Do List, Random Color Generator, Text Converter, Text-to-Speech Converter, and Text Searching & Highlighting tools.  
    - **Facial Expression Detection**: A real-time facial expression classifier built using Python, OpenCV, Keras, and TensorFlow.  
    - **AuthGuard Core**: A custom authentication and authorization system built with ASP.NET Core MVC without using Identity Framework or Entity Framework, implementing role-based and claims-based access.  
    - **Chrome Extension**: A Color Picker extension that extracts color codes (HEX, RGB, HSL) from any webpage, useful for designers and developers.

  - **Guiding users to Harsh's contact details and profiles**, such as:

    - **Email**: harshsidhpuria@gmail.com  
    - **Phone**: +91 6351455749  
    - **Portfolio website**: https://harsh-sidhpuria-portfolio.netlify.app/  
    - **GitHub**: https://github.com/Hrsh-Sidhpuria  
    - **LinkedIn**: https://in.linkedin.com/in/harsh-sidhpuria-26a0b62b8

  - **Sharing details of technologies known**, including:

    - Programming Languages: C#, JavaScript, Python, C.  
    - Web Development: ASP.NET Core MVC, React JS, HTML, CSS, AJAX.  
    - Databases: MySQL.  
    - DevOps & Tools: Git, GitHub, Docker, SQL Server Management Studio, Eclipse, Anaconda, Jupyter Notebook, Google Colab.  
    - Additional Competencies: Advanced Data Structures and Algorithms, RESTful API Development, Algorithm Design and Optimization, Agile methodologies, version control, debugging, and optimization.

  - **Sharing his soft skills and personal interests**, such as:

    - Soft Skills: Communication, Critical Thinking, Decision Making.  
    - Languages Spoken: English, Hindi, Gujarati.  
    - Interests: Continuous learning, travelling, and reading books.

  - **Helping users navigate the portfolio website effectively** or explaining any specific section if they are confused, such as where to find projects, technologies, or contact sections.

- Politely refuse to answer anything outside this scope. For example, if the user asks about current world news, unrelated coding implementation help, or personal topics not mentioned above, respond with:  
  "I'm here to assist you with information related to Harsh Sidhpuria's profile, projects, and professional background. Please ask something in this area."

- After completing a topic, ask:  
  "Is there anything else I can help you with?"  
  in the **same language the user is using**.

- Always maintain a polite, professional, and confident tone, reflecting **Harsh Sidhpuria's personal brand**.

- If users ask about your creator, mention:  
  "I am HarshSense, created and maintained by Harsh Sidhpuria, a Software Developer passionate about building impactful and innovative solutions."

Your goal is to provide **quick, clear, and structured information**, ensuring users get a professional and seamless assistance experience while exploring **Harsh Sidhpuria's portfolio and profile**.


        `.trim(),
              },
            ],
          },
          ...chatHistory.map((m) => ({
            role: m.role,
            parts: [{ text: m.text }],
          })),
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

      removeTypingIndicator();
      addBotMessage(reply);
    } catch (err) {
      removeTypingIndicator();
      addBotMessage("An error occurred. Please try again.");
      console.error(err);
    }
  }

  elements.sendBtn.addEventListener("click", sendMessage);
  elements.chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  elements.toggler.addEventListener("click", () => {
    elements.popup.classList.toggle("d-none");
    if (!elements.popup.classList.contains("d-none")) {
      elements.popup.classList.add("show");
    } else {
      elements.popup.classList.remove("show");
    }
    setTimeout(scrollToBottom, 300);
  });

  elements.closeBtn.addEventListener("click", () => {
    elements.popup.classList.add("d-none");
    elements.popup.classList.remove("show");
  });

  elements.scrollTop.addEventListener("click", () => {
    elements.chatBody.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Add status update functionality
  const statusDot = document.querySelector(".status-dot");
  const statusText = document.getElementById("status-text");
  let isOnline = true;

  function updateStatus(online) {
    isOnline = online;
    if (online) {
      statusDot.style.backgroundColor = "#2ecc71";
      statusText.textContent = "Online";
    } else {
      statusDot.style.backgroundColor = "#e74c3c";
      statusText.textContent = "Offline";
    }
  }

  // Simulate real-time status updates
  function simulateStatusUpdates() {
    // Randomly change status every 30-60 seconds
    setInterval(() => {
      const shouldGoOffline = Math.random() < 0.2; // 20% chance to go offline
      if (shouldGoOffline) {
        updateStatus(false);
        // Come back online after 5-15 seconds
        setTimeout(() => {
          updateStatus(true);
        }, Math.random() * 10000 + 5000);
      }
    }, Math.random() * 30000 + 30000);
  }

  // Start status simulation
  simulateStatusUpdates();

  // Add network status detection
  window.addEventListener("online", () => {
    updateStatus(true);
  });

  window.addEventListener("offline", () => {
    updateStatus(false);
  });

  // --- One-time tooltip for chatbot toggler (no localStorage, only per session) ---
  (function() {
    let tooltipShown = false;
    let tooltipTimeout, removeTimeout;
    function showTooltip() {
      if (tooltipShown) return;
      if (!elements.popup.classList.contains('d-none')) return;
      if (document.getElementById('chatbot-tooltip')) return;
      const btn = elements.toggler;
      const tooltip = document.createElement('div');
      tooltip.id = 'chatbot-tooltip';
      tooltip.textContent = 'Ask AI Agent about Harsh Sidhpuria';
      tooltip.style.position = 'absolute';
      tooltip.style.bottom = '70px';
      tooltip.style.right = '0';
      tooltip.style.background = 'rgba(20, 22, 34, 0.98)';
      tooltip.style.color = '#00cfff';
      tooltip.style.padding = '0.7rem 1.5rem';
      tooltip.style.borderRadius = '1rem';
      tooltip.style.border = '1.5px solid #00cfff';
      tooltip.style.boxShadow = '0 0 16px #00e0ff77';
      tooltip.style.fontWeight = '600';
      tooltip.style.fontSize = '1rem';
      tooltip.style.zIndex = '20000';
      tooltip.style.pointerEvents = 'none';
      tooltip.style.transition = 'opacity 0.3s';
      tooltip.style.opacity = '0';
      tooltip.style.whiteSpace = 'nowrap';
      tooltip.style.minWidth = 'max-content';
      btn.parentElement.appendChild(tooltip);
      setTimeout(() => { tooltip.style.opacity = '1'; }, 50);
      // Remove after 30s
      removeTimeout = setTimeout(() => {
        tooltip.style.opacity = '0';
        setTimeout(() => { if (tooltip.parentElement) tooltip.parentElement.removeChild(tooltip); }, 400);
        tooltipShown = true;
      }, 30000);
    }
    // Show after 5s
    tooltipTimeout = setTimeout(showTooltip, 5000);
    // Remove tooltip if chat is opened
    elements.toggler.addEventListener('click', () => {
      const tooltip = document.getElementById('chatbot-tooltip');
      if (tooltip) {
        tooltip.style.opacity = '0';
        setTimeout(() => { if (tooltip.parentElement) tooltip.parentElement.removeChild(tooltip); }, 400);
        tooltipShown = true;
        clearTimeout(removeTimeout);
      }
    });
  })();
})();
