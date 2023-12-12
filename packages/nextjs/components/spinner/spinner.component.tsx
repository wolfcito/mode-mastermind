import clsx from 'clsx'

export function Spinner({ classname = 'w-20 h-20' }: { classname?: string }) {
  return <div className={clsx('loader', classname)}></div>
}
