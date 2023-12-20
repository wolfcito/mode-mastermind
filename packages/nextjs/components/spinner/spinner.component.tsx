import clsx from 'clsx'

export function Spinner({ classname = 'w-14 h-14' }: { classname?: string }) {
  return <div className={clsx('loader', classname)}></div>
}
