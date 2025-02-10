// Emoji dictionary to map words to emojis
const emojiDictionary = {
    happy: "😊",
    sad: "😢",
    love: "❤️",
    hello: "👋",
    thanks: "🙏",
    yes: "👍",
    no: "👎",
    star: "⭐",
    angry: "😡",
    cry: "😭",
    cat: "🐱",
    dog: "🐶",
    sun: "☀️",
    moon: "🌕",
    party: "🎉",
    food: "🍔",
    drink: "🍹",
    astonish : "😲",
    hug : "🤗",
    skull : "💀",
    Fire : "🔥",
    devil : "👿",
    right : "💯",
    flower : "🌸",
    Bouquet : "💐",
    rose : "🌹",
    cake : "🍰",	
    Explosion : "💥",
    gun : "🔫",
    super : "👌",
    umbrella : "⛱️",
    rain : "⛈️",
    sparkle : "✨",
    star : "🌟",
    clock : "⏱️",
    swag : "😎",
    laugh : "😂🤣😄😃😁😆",
    hearts : "💟 💝 💘 💖 💗 💜 🖤 💚",
    heart : "💗",
    funny : "😂"

  };
  
  // Function to translate text into emojis
  function translateToEmoji(text) {
    // Split the input text into words
    const words = text.split(" ");
    
    // Map each word to its emoji if it exists in the dictionary
    const translatedWords = words.map(word => {
      // Check if the lowercase version of the word exists in emojiDictionary
      const lowercaseWord = word.toLowerCase();
      return emojiDictionary[lowercaseWord] || word; // If no emoji, keep the original word
    });
    
    // Join the translated words back into a single string
    return translatedWords.join(" ");
  }
  
  // Event listener for the button
  document.getElementById("translateButton").addEventListener("click", () => {
    // Get the user's input
    const inputText = document.getElementById("inputText").value;
    
    // Translate the input to emoji
    const translatedText = translateToEmoji(inputText);
    
    // Display the translated text
    document.getElementById("outputText").innerText = translatedText;
  });
  