import { useState } from 'react'
import Hero from './components/Hero'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [mounted, setMounted] = useState(true)
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070B1A] via-[#0B122A] to-[#070B1A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(56,189,248,0.12),transparent_40%)]" />

      <main className="relative mx-auto max-w-5xl px-4 py-6 md:py-10">
        <Hero />

        <section className="mt-8 md:mt-10 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-cyan-100/90">
            Your list
          </h2>
          <TodoInput onAdd={() => {}} />
        </section>

        <section className="mt-4 md:mt-6">
          <TodoList />
        </section>
      </main>
    </div>
  )
}

export default App
