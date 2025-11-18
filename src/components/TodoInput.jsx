import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

function TodoInput({ onAdd }) {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [priority, setPriority] = useState('normal')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    onAdd({ title: trimmed, notes: notes.trim() || undefined, priority })
    setTitle('')
    setNotes('')
    setPriority('normal')
  }

  return (
    <motion.form
      layout
      onSubmit={handleSubmit}
      className="relative rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md shadow-xl"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs doing?"
          className="flex-1 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:border-cyan-400/40 focus:outline-none"
        />
        <input
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes (optional)"
          className="flex-1 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:border-cyan-400/40 focus:outline-none"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white focus:border-cyan-400/40 focus:outline-none"
        >
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-500/20 px-4 py-2 font-semibold text-cyan-100 shadow-inner hover:bg-cyan-400/30"
        >
          <Plus className="h-4 w-4" />
          Add
        </motion.button>
      </div>
    </motion.form>
  )
}

export default TodoInput
