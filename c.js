function enterBuilding(hasBadge, clearanceLevel) {
  if (hasBadge) {
    console.log("Badge accepted.");
    
    // This is the "Nested If"
    if (clearanceLevel === "ADMIN") {
      console.log("Welcome, Administrator. All doors unlocked.");
    } else {
      console.log("Welcome, Staff. Standard doors unlocked.");
    }

  } else {
    console.log("Access Denied. No badge detected.");
  }
}

enterBuilding(true, "ADMIN");