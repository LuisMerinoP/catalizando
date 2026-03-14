import { useState, useMemo, useEffect, useCallback } from 'react';
import { Search, Plus, Trash2, ExternalLink, LogOut, Lock, Download, ArrowUp, ArrowDown, Pencil } from 'lucide-react';

interface Visit {
  id: number;
  taller: string;
  ubicacion: string;
  contacto: string;
  num: string;
  comentarios: string;
  todo: string;
}

const AUTH_KEY = 'panamacats_admin_auth';
const API = '/api/visits';

const ADMIN_USER = 'Catalizandoando';
const ADMIN_PASS = 'Catalizandoando';

type SortField = 'taller' | 'contacto';
type SortDir = 'asc' | 'desc';

function AuthModal({ onLogin }: { onLogin: () => void }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user.trim() || !pass.trim()) {
      setError('Please enter both fields');
      return;
    }
    if (user !== ADMIN_USER || pass !== ADMIN_PASS) {
      setError('Invalid credentials');
      return;
    }
    sessionStorage.setItem(AUTH_KEY, 'true');
    onLogin();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm mx-4"
      >
        <div className="flex items-center justify-center mb-6">
          <div className="bg-primary/10 p-3 rounded-full">
            <Lock className="text-primary" size={28} />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-primary mb-6">Admin Login</h2>

        {error && (
          <p className="text-red-600 text-sm text-center mb-4 bg-red-50 py-2 rounded-lg">
            {error}
          </p>
        )}

        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mb-4 focus:outline-none focus:ring-2 focus:ring-secondary"
          autoFocus
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mb-6 focus:outline-none focus:ring-2 focus:ring-secondary"
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-primary-light transition-colors cursor-pointer"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

function MobileCard({ v, onEdit, onDelete }: { v: Visit; onEdit: () => void; onDelete: () => void }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-2">
      <div className="flex items-start justify-between">
        <h3 className="font-semibold text-gray-900 text-base">{v.taller}</h3>
        <div className="flex items-center gap-3 shrink-0 ml-2">
          <button onClick={onEdit} className="text-secondary cursor-pointer"><Pencil size={16} /></button>
          <button onClick={onDelete} className="text-red-500 cursor-pointer"><Trash2 size={16} /></button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
        <span className="text-gray-500">Contacto</span>
        <span className="text-gray-900">{v.contacto}</span>
        <span className="text-gray-500">Num</span>
        <span className="text-gray-900">{v.num}</span>
        <span className="text-gray-500">Ubicacion</span>
        <span>
          {v.ubicacion.startsWith('http') ? (
            <a href={v.ubicacion} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline inline-flex items-center gap-1">
              Maps <ExternalLink size={12} />
            </a>
          ) : (
            <span className="text-gray-900">{v.ubicacion}</span>
          )}
        </span>
      </div>
      {v.comentarios && v.comentarios !== '-' && (
        <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-2">{v.comentarios}</p>
      )}
      {v.todo && v.todo !== '-' && (
        <p className="text-xs text-secondary font-medium">ToDo: {v.todo}</p>
      )}
    </div>
  );
}

export default function Admin() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(AUTH_KEY) === 'true');
  const [visits, setVisits] = useState<Visit[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>('asc');
  const [draft, setDraft] = useState<Omit<Visit, 'id'>>({
    taller: '',
    ubicacion: '',
    contacto: '',
    num: '',
    comentarios: '',
    todo: '',
  });

  const fetchVisits = useCallback(async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setVisits(data);
    } catch (err) {
      console.error('Failed to fetch visits', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authed) fetchVisits();
  }, [authed, fetchVisits]);

  const filtered = useMemo(() => {
    let result = visits;
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (v) =>
          v.taller.toLowerCase().includes(q) ||
          v.contacto.toLowerCase().includes(q) ||
          v.num.toLowerCase().includes(q) ||
          v.comentarios.toLowerCase().includes(q) ||
          v.todo.toLowerCase().includes(q)
      );
    }
    if (sortField) {
      result = [...result].sort((a, b) => {
        const cmp = a[sortField].localeCompare(b[sortField], 'es', { sensitivity: 'base' });
        return sortDir === 'asc' ? cmp : -cmp;
      });
    }
    return result;
  }, [visits, search, sortField, sortDir]);

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  };

  const addRow = async () => {
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(draft),
      });
      const created = await res.json();
      setVisits((prev) => [...prev, created]);
      setDraft({ taller: '', ubicacion: '', contacto: '', num: '', comentarios: '', todo: '' });
    } catch (err) {
      console.error('Failed to add', err);
    }
  };

  const confirmDelete = async () => {
    if (deleteId === null) return;
    try {
      await fetch(`${API}/${deleteId}`, { method: 'DELETE' });
      setVisits((prev) => prev.filter((v) => v.id !== deleteId));
      setDeleteId(null);
    } catch (err) {
      console.error('Failed to delete', err);
    }
  };

  const startEdit = (v: Visit) => {
    setEditingId(v.id);
    setDraft({
      taller: v.taller,
      ubicacion: v.ubicacion,
      contacto: v.contacto,
      num: v.num,
      comentarios: v.comentarios,
      todo: v.todo,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const saveEdit = async () => {
    if (editingId === null) return;
    try {
      const res = await fetch(`${API}/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(draft),
      });
      const updated = await res.json();
      setVisits((prev) => prev.map((v) => (v.id === editingId ? updated : v)));
      setEditingId(null);
      setDraft({ taller: '', ubicacion: '', contacto: '', num: '', comentarios: '', todo: '' });
    } catch (err) {
      console.error('Failed to update', err);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraft({ taller: '', ubicacion: '', contacto: '', num: '', comentarios: '', todo: '' });
  };

  const downloadCsv = () => {
    const header = 'Taller,Ubicacion,Contacto,Num,Comentarios,ToDo';
    const rows = filtered.map((v) =>
      [v.taller, v.ubicacion, v.contacto, v.num, v.comentarios, v.todo]
        .map((cell) => `"${(cell ?? '').replace(/"/g, '""')}"`)
        .join(',')
    );
    const csv = [header, ...rows].join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'visitas_talleres.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const logout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setAuthed(false);
  };

  if (!authed) return <AuthModal onLogin={() => setAuthed(true)} />;

  const fields: { key: keyof Omit<Visit, 'id'>; label: string; sortable?: boolean }[] = [
    { key: 'taller', label: 'Taller', sortable: true },
    { key: 'ubicacion', label: 'Ubicacion' },
    { key: 'contacto', label: 'Contacto', sortable: true },
    { key: 'num', label: 'Num' },
    { key: 'comentarios', label: 'Comentarios' },
    { key: 'todo', label: 'ToDo' },
  ];

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUp size={12} className="opacity-30" />;
    return sortDir === 'asc' ? <ArrowUp size={12} /> : <ArrowDown size={12} />;
  };

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Header bar */}
      <div className="bg-primary text-white px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold">Visitas Talleres</h1>
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={downloadCsv}
              className="flex items-center gap-1.5 text-sm hover:text-secondary transition-colors cursor-pointer"
            >
              <Download size={16} /> <span className="hidden sm:inline">CSV</span>
            </button>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 text-sm hover:text-secondary transition-colors cursor-pointer"
            >
              <LogOut size={16} /> <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Search + Sort (mobile) */}
        <div className="flex gap-2 mb-4 sm:mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white"
            />
          </div>
          {/* Mobile sort buttons */}
          <div className="flex gap-1 md:hidden">
            <button
              onClick={() => toggleSort('taller')}
              className={`px-3 py-2 rounded-lg text-xs font-medium border cursor-pointer ${
                sortField === 'taller' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-300'
              }`}
            >
              Taller {sortField === 'taller' && (sortDir === 'asc' ? '\u2191' : '\u2193')}
            </button>
            <button
              onClick={() => toggleSort('contacto')}
              className={`px-3 py-2 rounded-lg text-xs font-medium border cursor-pointer ${
                sortField === 'contacto' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-300'
              }`}
            >
              Contacto {sortField === 'contacto' && (sortDir === 'asc' ? '\u2191' : '\u2193')}
            </button>
          </div>
        </div>

        {/* Add / Edit row form */}
        <div className="bg-white rounded-xl shadow p-4 mb-4 sm:mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            {editingId ? 'Edit Entry' : 'Add New Entry'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {fields.map((f) => (
              <div key={f.key}>
                <label className="block text-xs font-medium text-gray-600 mb-1">{f.label}</label>
                <input
                  type="text"
                  value={draft[f.key]}
                  onChange={(e) => setDraft({ ...draft, [f.key]: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-4">
            {editingId ? (
              <>
                <button
                  onClick={saveEdit}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-secondary text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary/90 transition-colors cursor-pointer"
                >
                  Save Changes
                </button>
                <button
                  onClick={cancelEdit}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={addRow}
                className="w-full sm:w-auto flex items-center justify-center gap-1 bg-secondary text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary/90 transition-colors cursor-pointer"
              >
                <Plus size={16} /> Add Entry
              </button>
            )}
          </div>
        </div>

        {/* Loading / Empty */}
        {loading && (
          <p className="text-center py-12 text-gray-400">Loading...</p>
        )}
        {!loading && filtered.length === 0 && (
          <p className="text-center py-12 text-gray-400">No entries found.</p>
        )}

        {/* Mobile card view */}
        {!loading && filtered.length > 0 && (
          <div className="md:hidden space-y-3">
            {filtered.map((v) => (
              <MobileCard
                key={v.id}
                v={v}
                onEdit={() => startEdit(v)}
                onDelete={() => setDeleteId(v.id)}
              />
            ))}
          </div>
        )}

        {/* Desktop table view */}
        {!loading && filtered.length > 0 && (
          <div className="hidden md:block bg-white rounded-xl shadow overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white text-left">
                  {fields.map((f) => (
                    <th key={f.key} className="px-4 py-3 font-semibold whitespace-nowrap">
                      {f.sortable ? (
                        <button
                          onClick={() => toggleSort(f.key as SortField)}
                          className="inline-flex items-center gap-1 cursor-pointer hover:text-secondary transition-colors"
                        >
                          {f.label} <SortIcon field={f.key as SortField} />
                        </button>
                      ) : (
                        f.label
                      )}
                    </th>
                  ))}
                  <th className="px-4 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((v, i) => (
                  <tr
                    key={v.id}
                    className={`border-t border-gray-100 hover:bg-gray-50 transition-colors ${
                      i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">{v.taller}</td>
                    <td className="px-4 py-3">
                      {v.ubicacion.startsWith('http') ? (
                        <a
                          href={v.ubicacion}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:underline inline-flex items-center gap-1"
                        >
                          Maps <ExternalLink size={12} />
                        </a>
                      ) : (
                        v.ubicacion
                      )}
                    </td>
                    <td className="px-4 py-3">{v.contacto}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{v.num}</td>
                    <td className="px-4 py-3 max-w-xs">{v.comentarios}</td>
                    <td className="px-4 py-3 max-w-xs">{v.todo}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-6">
                        <button
                          onClick={() => startEdit(v)}
                          className="text-secondary hover:text-secondary/70 text-xs font-medium cursor-pointer"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => setDeleteId(v.id)}
                          className="text-red-500 hover:text-red-700 cursor-pointer"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="text-xs text-gray-400 mt-4 text-center">
          {filtered.length} of {visits.length} entries shown
        </p>
      </div>

      {/* Delete confirmation modal */}
      {deleteId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm mx-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Trash2 className="text-red-500" size={24} />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Delete Entry</h3>
            <p className="text-sm text-gray-500 mb-6">
              Are you sure you want to delete this record? This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setDeleteId(null)}
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
