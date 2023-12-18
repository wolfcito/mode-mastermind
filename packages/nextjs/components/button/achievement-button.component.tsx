import { ButtonProps } from './button.type'

export function AchievementButton({ label = 'Mint Achievement', onClick }: ButtonProps) {
  return (
    <button
      className="px-6 py-1 text-sm text-black normal-case border-t border-l rounded-full bg-gradient-to-tl from-neutral-content to-secondary-content/50 border-neutral-content/50"
      onClick={onClick}
    >
      <a href="#">{label}</a>
    </button>
  )
}
