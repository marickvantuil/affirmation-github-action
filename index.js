const core = require('@actions/core');
const github = require('@actions/github');

try {
  const affirmations = [
    "I am the architect of my life; I build its foundation and choose its contents.",
    "Today, I am brimming with energy and overflowing with joy.",
    "My body is healthy; my mind is brilliant; my soul is tranquil.",
    "I am superior to negative thoughts and low actions.",
    "I have been given endless talents which I begin to utilize today.",
    "I forgive those who have harmed me in my past and peacefully detach from them.",
    "A river of compassion washes away my anger and replaces it with love.",
    "I am guided in my every step by Spirit who leads me towards what I must know and do.",
    "(If you're married) My marriage is becoming stronger, deeper, and more stable each day.",
    "I possess the qualities needed to be extremely successful.",
    "(For business owners) My business is growing, expanding, and thriving.",
    "Creative energy surges through me and leads me to new and brilliant ideas.",
    "Happiness is a choice. I base my happiness on my own accomplishments and the blessings I've been given.",
    "My ability to conquer my challenges is limitless; my potential to succeed is infinite.",
    "(For those who are unemployed) I deserve to be employed and paid well for my time, efforts, and ideas. Each day, I am closer to finding the perfect job for me.",
    "I am courageous and I stand up for myself.",
    "My thoughts are filled with positivity and my life is plentiful with prosperity.",
    "Today, I abandon my old habits and take up new, more positive ones.",
    "Many people look up to me and recognize my worth; I am admired.",
    "I am blessed with an incredible family and wonderful friends.",
    "I acknowledge my own self-worth; my confidence is soaring.",
    "Everything that is happening now is happening for my ultimate good.",
    "I am a powerhouse; I am indestructible.",
    "Though these times are difficult, they are only a short phase of life.",
    "My future is an ideal projection of what I envision now.",
    "My efforts are being supported by the universe; my dreams manifest into reality before my eyes.",
    "(For those who are single) The perfect partner for me is coming into my life sooner than I expect.",
    "I radiate beauty, charm, and grace.",
    "I am conquering my illness; I am defeating it steadily each day.",
    "My obstacles are moving out of my way; my path is carved towards greatness.",
    "I wake up today with strength in my heart and clarity in my mind.",
    "My fears of tomorrow are simply melting away.",
    "I am at peace with all that has happened, is happening, and will happen.",
    "My nature is Divine; I am a spiritual being.",
    "My life is just beginning."
  ]
  core.setOutput("message", affirmations[Math.floor(Math.random() * affirmations.length)]);
} catch (error) {
  core.setFailed(error.message);
}
