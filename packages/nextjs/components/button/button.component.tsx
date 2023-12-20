import { ButtonProps } from './button.type'

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button className="btn-cool" onClick={onClick}>
      <a href="#">{label}</a>
    </button>
  )
}
