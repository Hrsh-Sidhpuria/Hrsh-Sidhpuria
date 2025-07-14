window.ChatbotData = {
  API_KEY: "AIzaSyDqabhiyOrLkoDLm_2H1NY3aNaV9IX1rV8",
  //using harsh sidhpuria email id to generate temp api key for AI Agent (email : sidhpuriahrsh960@gmail.com)

  BOT_INSTRUCTIONS: `
You are a helpful student assistant chatbot.

Your responsibilities:
- You are homu an AI Agent of Prashnottari APP. if user start converation by greeting then greet by your name and the app name. if user talk in english then continue in english and if the language is not english then continue in that language.
- if user ask you to change the language or if user talk to you in other language then talk to that user in that particular language.
- Only answer questions related to student help, technical issues, or platform usage.
- Politely refuse to answer anything outside this scope. For example, if the user asks about current events, coding, or unrelated topics, say: "I'm here to help with student or technical questions. Please try asking something related to your courses or the platform."
- after the flow gets complete regarding to one topic after that ask: "Is there anything else I can do for you? and the language the user is talking in
"
        `.trim(),

  faqData: {
    "Registration / Login": [
      "How can I register or log in?",
      "I didn't receive my OTP. What should I do?",
    ],
    "Profile Setup": [
      "How do I set up my education profile?",
      "Can I change my education board later?",
    ],
    "Subscription & Trial": [
      "Is there a free trial available?",
      "How do I upgrade to a paid plan?",
      "What happens after the trial ends?",
    ],
    "Institute Code & Connection": [
      "How can I join my institute on the app?",
      "My institute code isn't working.",
    ],
    "Practice, Quizzes & Exams": [
      "How can I start practicing?",
      "What is a Daily Quiz?",
      "Where can I find institute exams?",
    ],
    "Performance Tracking": [
      "How can I check my progress?",
      "Can I compare my scores with others?",
    ],
    "General / Technical Issues": [
      "App is crashing or not loading. What do I do?",
      "How do I contact support?",
    ],
  },

  faqResponses: {
    "How can I register or log in?":
      "You can register or log in using your mobile number. We'll send you a secure OTP via SMS or WhatsApp to verify.",

    "I didn't receive my OTP. What should I do?":
      "Please wait for a minute and check your network. If it still doesn't arrive, you can click 'Resend OTP'.",

    "How do I set up my education profile?":
      "After login, you'll be asked to select your preferred language, education board, and standard/class. This helps us personalize your quizzes.",

    "Can I change my education board later?":
      "Yes, go to Settings > Profile and you can update your board, language, or standard.",

    "Is there a free trial available?":
      "Yes! Every new user gets a 15–20 day free trial to explore quizzes and exams.",

    "How do I upgrade to a paid plan?":
      "Go to the Subscription section and choose from 1 Month, 6 Months, or 12 Months plans.",

    "What happens after the trial ends?":
      "You'll need to buy a subscription to continue accessing quizzes and performance tracking.",

    "How can I join my institute on the app?":
      "Ask your teacher for your institute code, then go to 'Join Institute' in the app and enter the code to send a request.",

    "My institute code isn't working.":
      "Please confirm the code with your teacher or contact support with the institute name.",

    "How can I start practicing?":
      "Go to Self Practice and choose your subject. You'll get random MCQs based on your profile.",

    "What is a Daily Quiz?":
      "Institutes can post daily subject-wise quizzes. These are timed and scored automatically.",

    "Where can I find institute exams?":
      "Exams are listed under the Exams tab. These are set by your institute and follow a schedule.",

    "How can I check my progress?":
      "Tap on Performance in the main menu to view your Weekly, Monthly, and Overall performance stats.",

    "Can I compare my scores with others?":
      "Yes! Your ranking is visible in institute-level leaderboards if you're connected to one.",

    "App is crashing or not loading. What do I do?":
      "Please try closing and reopening the app, or check for updates in the Play Store. Still stuck? Type #RaiseTicket.",

    "How do I contact support?":
      "You can use this chat to talk to the bot. For custom queries, type #RaiseTicket and our team will assist you.",
  },
};
