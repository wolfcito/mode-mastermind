export function Button({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button className="btn-cool" onClick={onClick}>
      <a href="#">{label}</a>
    </button>
  )
}
