export default function Header() {
  const now = new Date()

  return (
    <header>
      <h3>Yurii Tsykvas</h3>
      <span>Time now: { now.toLocaleTimeString() }</span>
    </header>
  )
}
