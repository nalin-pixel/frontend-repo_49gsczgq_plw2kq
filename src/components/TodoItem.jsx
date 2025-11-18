import { motion } from 'framer-motion'
import { Check, Trash2, Circle } from 'lucide-react'

function PriorityPill({ level }) {
  const map = {
    low: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
    normal: 'bg-cyan-500/15 text-cyan-300 border-cyan-400/30',
    high: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-400/30',
  }
  return (
    <span className={`px-2.5 py-1 text-xs rounded-full border ${map[level] || map.normal}`}>
      {level || 'normal'}
    </span>
  )
}

function TodoItem({ item, onToggle, onDelete }) {
  return (
    <motion.div
      layout
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.98, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 shadow-lg hover:border-cyan-400/30 hover:bg-white/10"
    >
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(item.id)}
          className="relative mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/70 transition-colors hover:border-cyan-300/50 hover:text-white"
        >
          {item.completed ? (
            <Check className="h-4 w-4" />
          ) : (
            <Circle className="h-4 w-4" />
          )}
        </button>

        <div className="flex-1">
          <p className={`font-semibold tracking-tight ${item.completed ? 'text-white/50 line-through' : 'text-white'}`}>
            {item.title}
          </p>
          {item.notes && (
            <p className={`mt-0.5 text-sm ${item.completed ? 'text-white/30 line-through' : 'text-white/70'}`}>{item.notes}</p>
          )}
          <div className="mt-2 flex items-center gap-2">
            <PriorityPill level={item.priority} />
            {item.due_date && (
              <span className="text-xs text-white/60">Due {new Date(item.due_date).toLocaleDateString()}</span>
            )}
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => onDelete(item.id)}
          className="invisible ml-2 rounded-lg border border-white/10 bg-white/10 p-2 text-white/70 shadow-sm transition-all hover:border-rose-400/40 hover:bg-rose-500/10 hover:text-white group-hover:visible"
        >
          <Trash2 className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default TodoItem
