import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LogOut, Search, Filter, Trash2, Edit, Check, X, Mail, Phone, User, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui";
import axios from "axios";

const API_URL = "http://localhost:8000/api";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [editNotes, setEditNotes] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("admin_token");
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
      fetchContacts(savedToken);
    }
  }, []);

  useEffect(() => {
    let filtered = contacts;
    
    if (searchTerm) {
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (statusFilter !== "all") {
      filtered = filtered.filter((c) => c.status === statusFilter);
    }
    
    setFilteredContacts(filtered);
  }, [contacts, searchTerm, statusFilter]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/admin/login`, {
        username,
        password,
      });
      
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("admin_token", response.data.token);
        setIsAuthenticated(true);
        fetchContacts(response.data.token);
      }
    } catch (error: any) {
      alert(error.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("admin_token");
    setIsAuthenticated(false);
    setContacts([]);
  };

  const fetchContacts = async (authToken: string) => {
    try {
      const response = await axios.get(`${API_URL}/admin/contacts`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      
      if (response.data.success) {
        setContacts(response.data.contacts);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const updateContactStatus = async (id: string, status: string) => {
    try {
      await axios.put(
        `${API_URL}/admin/contacts/${id}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchContacts(token);
    } catch (error) {
      console.error("Error updating contact:", error);
      alert("Failed to update contact");
    }
  };

  const updateContactNotes = async (id: string) => {
    try {
      await axios.put(
        `${API_URL}/admin/contacts/${id}`,
        { notes: editNotes },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSelectedContact(null);
      setEditNotes("");
      fetchContacts(token);
    } catch (error) {
      console.error("Error updating notes:", error);
      alert("Failed to update notes");
    }
  };

  const deleteContact = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    
    try {
      await axios.delete(`${API_URL}/admin/contacts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchContacts(token);
    } catch (error) {
      console.error("Error deleting contact:", error);
      alert("Failed to delete contact");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full"
        >
          <h1 className="text-3xl font-light text-gray-900 mb-8 text-center">
            Admin Login
          </h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full"
                placeholder="admin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full"
                placeholder="Enter password"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-light text-gray-900">Admin Dashboard</h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-light text-gray-900 mb-2">
              {contacts.length}
            </div>
            <div className="text-sm text-gray-600">Total Contacts</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-light text-gray-900 mb-2">
              {contacts.filter((c) => c.status === "new").length}
            </div>
            <div className="text-sm text-gray-600">New</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-light text-gray-900 mb-2">
              {contacts.filter((c) => c.status === "contacted").length}
            </div>
            <div className="text-sm text-gray-600">Contacted</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-light text-gray-900 mb-2">
              {contacts.filter((c) => c.status === "resolved").length}
            </div>
            <div className="text-sm text-gray-600">Resolved</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>

        {/* Contacts List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredContacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {contact.name}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                            <Mail className="w-3 h-3" />
                            {contact.email}
                          </div>
                          {contact.phone && (
                            <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                              <Phone className="w-3 h-3" />
                              {contact.phone}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-md truncate">
                        {contact.message}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={contact.status}
                        onChange={(e) => updateContactStatus(contact.id, e.target.value)}
                        className={`text-sm px-3 py-1 rounded-full border-0 ${
                          contact.status === "new"
                            ? "bg-blue-100 text-blue-800"
                            : contact.status === "contacted"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="resolved">Resolved</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedContact(contact);
                            setEditNotes(contact.notes || "");
                          }}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteContact(contact.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredContacts.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No contacts found
            </div>
          )}
        </div>
      </div>

      {/* Edit Notes Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-2xl w-full"
          >
            <h2 className="text-2xl font-light text-gray-900 mb-6">
              Contact Details
            </h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">Name</div>
                <div className="text-gray-900">{selectedContact.name}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Email</div>
                <div className="text-gray-900">{selectedContact.email}</div>
              </div>
              {selectedContact.phone && (
                <div>
                  <div className="text-sm text-gray-600 mb-1">Phone</div>
                  <div className="text-gray-900">{selectedContact.phone}</div>
                </div>
              )}
              <div>
                <div className="text-sm text-gray-600 mb-1">Message</div>
                <div className="text-gray-900">{selectedContact.message}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Add notes about this contact..."
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button
                onClick={() => updateContactNotes(selectedContact.id)}
                className="bg-gray-900 hover:bg-gray-800 text-white"
              >
                Save Notes
              </Button>
              <Button
                onClick={() => {
                  setSelectedContact(null);
                  setEditNotes("");
                }}
                variant="outline"
              >
                Cancel
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

