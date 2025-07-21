import axios from "../axios"

const BASE_URL = '/notes'; // Update if different

// Create a new note
export async function createNote(note) {
  try {
    const {data} = await axios.post(`${BASE_URL}`, note);
    return data;
  } catch (error) {
    console.error('Error creating note:', error.response?.data || error.message);
  }
}

// Get a note by link
export async function getNoteByLink(link) {
  try {
    const {data} = await axios.get(`${BASE_URL}/${link}`);
    return data;
  } catch (error) {
    console.error('Error fetching note:', error.response?.data || error.message);
  }
}

// Update note content
export async function updateNoteContent(payload) {
  try {
    const {data} = await axios.put(`${BASE_URL}`, payload);
    return data;
  } catch (error) {
    console.error('Error updating note:', error.response?.data || error.message);
  }
}
