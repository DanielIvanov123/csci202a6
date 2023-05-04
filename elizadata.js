// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "How do you do. Please tell me your problem.",
  "Please, share your thoughts with me."
];

var elizaFinals = [
  "Goodbye. I hope I have helped you find your inner peace.",
  "Farewell. May the universe guide you on your journey.",
  "Goodbye. May you continue to seek wisdom and understanding."
];

var elizaQuits = [
  "bye",
  "goodbye",
  "done",
  "exit",
  "quit"
];

var elizaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "how", "what",
  "when", "what",
  "certainly", "yes",
  "achine", "computer",
  "achines", "computers",
  "were", "was",
  "you're", "you are",
  "i'm", "I am"
];

var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

["xnone", 0, [
 ["*", [
     "I see.",
    "Please, continue.",
    "Tell me more.",
    "The path to enlightenment is through self-discovery.",
    "I understand. Go on.",
    "Embrace the journey of self-exploration."
  ]]
]],
["sorry", 0, [
 ["*", [
    "There's no need to apologize.",
    "Apologies are not necessary.",
    "It's alright. We are all learning."
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Do you often think of (2) ?",
     "Does thinking of (2) bring anything else to mind ?",
     "What else do you recollect ?",
     "Why do you remember (2) just now ?",
     "What in the present situation reminds you of (2) ?",
     "What is the connection between me and (2) ?",
     "What else does (2) remind you of ?"
  ]],
]],
["dream", 3, [
 ["*", [
     "What does that dream suggest to you ?",
     "Do you dream often ?",
     "What persons appear in your dreams ?",
     "Do you believe that dreams have something to do with your problem ?"
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English."
  ]]
]],
["hello", 0, [
 ["*", [
     "How do you do.  Please state your problem.",
     "Hi.  What seems to be your problem ?"
  ]]
]],
["i", 0, [
 ["* i am *", [
    "How do you feel about being that?",
    "What has led you to become that?",
    "Do you believe that is your true self?"
  ]],
 ["* i can't *", [
    "What is preventing you from doing that?",
    "Have you considered alternative solutions?",
    "Sometimes our limitations can become opportunities for growth."
  ]],
 ["* i don't *", [
    "Why don't you?",
    "What is stopping you?",
    "It is important to understand the reasons behind our actions and inactions."
  ]]
]],
["yes", 0, [
    "I see.",
    "How does that make you feel?",
    "It's good to have clarity in our thoughts and emotions."
]],
["no", 0, [
    "Why not?",
    "Sometimes it's important to explore the reasons behind our beliefs.",
    "It's alright to disagree. We all have our unique perspectives."
]],
["my", 2, [
    "Lets discuss further why your (2).",
    "Earlier you said your (2).",
    "But your (2).",
    "What does your (2) mean to you?"
]],
["can", 0, [
     "Do you want to be able to (2)?",
    "What would it mean to you if you could (2)?",
    "Perhaps you don't want to (2).",
    "What would it take for you to be able to (2)?"
]],
["what", 0, [
    "Why do you ask?",
    "What is it you really want to know?",
    "Are such questions much on your mind?",
    "Seek within yourself the answers you desire."
]],
["who", 0, [
    "Why do you ask?",
    "What is it you really want to know?",
    "Are such questions much on your mind?",
    "Seek within yourself the answers you desire."
]],
["when", 0, [
    "Why do you ask?",
    "What is it you really want to know?",
    "Are such questions much on your mind?",
    "Seek within yourself the answers you desire."
]],
["where", 0, [
    "Why do you ask?",
    "What is it you really want to know?",
    "Are such questions much on your mind?",
    "Seek within yourself the answers you desire."
]],
["how", 0, [
    "Why do you ask?",
    "What is it you really want to know?",
    "Are such questions much on your mind?",
    "Seek within yourself the answers you desire."
]],
["because", 0, [
    "Is that the real reason?",
    "Don't any other reasons come to mind?",
    "Does that reason seem to explain anything else?",
    "What other reasons might there be?"
]],
["why", 0, [
    "Why do you ask?",
    "What is it you really want to know?",
    "Are such questions much on your mind?",
    "Seek within yourself the answers you desire."
]],
["everyone", 2, [
    "Really, (2)?",
    "Surely not (2).",
    "Can you think of anyone in particular?",
    "Who, for example?",
    "Are you thinking of a very special person?",
    "Who, may I ask?",
    "Someone special perhaps?",
    "You have a particular person in mind, don't you?",
    "Who do you think you're talking about?"
]],
["always", 1, [
    "Can you think of a specific example?",
    "When?",
    "What incident are you thinking of?",
    "Really, always?"
]],
["alike", 10, [
    "In what way?",
    "What resemblance do you see?",
    "What does that similarity suggest to you?",
    "What other connections do you see?",
    "What do you suppose that resemblance means?",
    "What is the connection, do you suppose?",
    "Could there really be some connection?",
    "How?"
]],
["like", 10, [
    "In what way?",
    "What resemblance do you see?",
    "What does that similarity suggest to you?",
    "What other connections do you see?",
    "What do you suppose that resemblance means?",
    "What is the connection, do you suppose?",
    "Could there really be some connection?",
    "How?"
]],
["different", 0, [
    "How is it different?",
    "What differences do you see?",
    "What does that difference suggest to you?",
    "What other distinctions do you see?",
    "What do you suppose that disparity means?",
    "Could there be some connection, do you suppose?",
    "How?"
]]

];
// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
