import { ButtonProps } from './button.type'

export function AchievementButton({ label = 'Claim Epic Achievment Badge', onClick }: ButtonProps) {
  return (
    <button
      className="px-6 py-1 text-sm text-black normal-case border-t border-l rounded-full bg-neutral-content"
      onClick={onClick}
    >
      <a href="#">{label}</a>
    </button>
  )
}
