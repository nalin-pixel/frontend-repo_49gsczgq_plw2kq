import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

async function api(path, opts = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opts,
  })
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  if (res.status === 204) return null
  return res.json()
}

function TodoList() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await api('/api/tasks')
      setItems(data)
    } catch (e) {
      setError('Could not load tasks.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const add = async (payload) => {
    try {
      const created = await api('/api/tasks', {
        method: 'POST',
        body: JSON.stringify(payload),
      })
      setItems((prev) => [created, ...prev])
    } catch (e) {
      setError('Failed to add task')
    }
  }

  const toggle = async (id) => {
    try {
      const updated = await api(`/api/tasks/${id}/toggle`, { method: 'POST' })
      setItems((prev) => prev.map((it) => (it.id === id ? updated : it)))
    } catch (e) {
      setError('Failed to toggle task')
    }
  }

  const remove = async (id) => {
    try {
      await api(`/api/tasks/${id}`, { method: 'DELETE' })
      setItems((prev) => prev.filter((it) => it.id !== id))
    } catch (e) {
      setError('Failed to delete task')
    }
  }

  return (
    <div className="space-y-4">
      <TodoInput onAdd={add} />

      {error && (
        <div className="rounded-lg border border-rose-400/40 bg-rose-500/10 p-3 text-rose-200">
          {error}
        </div>
      )}
      <TodoItemSkeleton visible={loading} />
      {!loading && items.length === 0 && (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center text-white/70">
          Nothing here yet — add your first task!
        </div>
      )}
      <AnimatePresence initial={false}>
        {items.map((item) => (
          <TodoItem key={item.id} item={item} onToggle={toggle} onDelete={remove} />
        ))}
      </AnimatePresence>
    </div>
  )
}

function TodoItemSkeleton({ visible }) {
  if (!visible) return null
  return (
    <div className="space-y-3">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          className="h-16 rounded-xl border border-white/10 bg-white/5"
        />
      ))}
    </div>
  )
}

export default TodoList
