import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Notes API
export const notesAPI = {
  getNotes: (email: string) => api.get(`/notes/${encodeURIComponent(email)}`),
  createNote: (note: any) => api.post('/notes', note),
  updateNote: (id: number, note: any) => api.put(`/notes/${id}`, note),
  deleteNote: (id: number) => api.delete(`/notes/${id}`),
};

// Issues API
export const issuesAPI = {
  getIssues: (params: any) => api.get('/issues', { params }),
  createIssue: (issue: any) => api.post('/issues', issue),
  getIssueById: (id: number) => api.get(`/issues/${id}`),
  deleteIssue: (id: number) => api.delete(`/issues/${id}`),
};

// Residents API
export const residentsAPI = {
  getResidents: (params: any) => api.get('/residents', { params }),
  createResident: (resident: any) => api.post('/residents', resident),
  getResidentById: (id: number) => api.get(`/residents/${id}`),
  updateResident: (id: number, resident: any) => api.put(`/residents/${id}`, resident),
  deleteResident: (id: number) => api.delete(`/residents/${id}`),
};

export default api;

