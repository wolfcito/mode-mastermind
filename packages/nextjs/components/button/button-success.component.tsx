export function ButtonSuccess({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button className="btn-success" onClick={onClick}>
      <a href="#">{label}</a>
    </button>
  )
}
