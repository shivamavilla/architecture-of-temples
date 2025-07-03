// temple-suggestions.js

const templeNames = [
    "meenakshi amman",
    "ramanathaswamy temple",
    "brihadeeswarar temple",
    "kashi vishwanath temple",
    "somnath temple",
    "sun temple konark",
    "ram janmabhoomi mandir"
    // Add more temple names
  ];
  
  const suggestionList = document.getElementById("templeSuggestions");
  templeNames.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    suggestionList.appendChild(option);
  });
  