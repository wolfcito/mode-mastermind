import { ButtonProps } from './button.type'

export function BadgeButton({ label, onClick }: ButtonProps) {
  return (
    <button
      className="px-6 py-1 text-sm normal-case border-t border-l rounded-full bg-gradient-to-tl from-black to-secondary-content/50 border-secondary-content/50"
      onClick={onClick}
    >
      <a href="#">{label}</a>
    </button>
  )
}
