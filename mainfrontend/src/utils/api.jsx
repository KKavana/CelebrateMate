// src/utils/api.jsx

// Function to get the user's profile data
export const getUserProfile = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("/api/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user profile");
  }

  return response.json();
};

// Function to update the user's profile data
export const updateUserProfile = async (data) => {
  const token = localStorage.getItem("token");
  const response = await fetch("/api/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update user profile");
  }
};

export const addReminder = async (data) => {
  console.log("add reminder");
};
