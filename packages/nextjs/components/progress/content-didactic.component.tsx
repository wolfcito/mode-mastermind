import { useContext } from 'react'
import { ContentDidacticByIdContext } from '~~/contexts/ContentDidacticById'

export function ContentDidacticProgressBar() {
  const pageContext = useContext(ContentDidacticByIdContext)

  return (
    <div className="w-[95%] bg-neutral-200 dark:bg-neutral-600 flex h-2 mx-10 mt-2">
      {pageContext.value.progress <= 20 && (
        <div className="bg-neutral-content p-0.5 text-center  font-medium leading-none " style={{ width: '10%' }}></div>
      )}
      {pageContext.value.progress <= 25 && pageContext.value.progress > 20 && (
        <>
          <div
            className="bg-neutral-content p-0.5 text-center  font-medium leading-none "
            style={{ width: '10%' }}
          ></div>
          <div
            className="bg-neutral p-0.5 text-center text-xs font-medium leading-none text-primary-100"
            style={{ width: '5%' }}
          ></div>
        </>
      )}
      {pageContext.value.progress > 25 && pageContext.value.progress <= 45 && (
        <>
          <div
            className="bg-neutral-content p-0.5 text-center  font-medium leading-none "
            style={{ width: '25%' }}
          ></div>
          <div
            className="bg-neutral p-0.5 text-center text-xs font-medium leading-none text-primary-100"
            style={{ width: '5%' }}
          ></div>
        </>
      )}

      {pageContext.value.progress > 45 && pageContext.value.progress <= 50 && (
        <>
          <div
            className="bg-neutral-content p-0.5 text-center  font-medium leading-none "
            style={{ width: '40%' }}
          ></div>
          <div
            className="bg-neutral p-0.5 text-center text-xs font-medium leading-none text-primary-100"
            style={{ width: '5%' }}
          ></div>
        </>
      )}

      {pageContext.value.progress > 50 && pageContext.value.progress <= 70 && (
        <>
          <div
            className="bg-neutral-content p-0.5 text-center  font-medium leading-none "
            style={{ width: '55%' }}
          ></div>
          <div
            className="bg-neutral p-0.5 text-center text-xs font-medium leading-none text-primary-100"
            style={{ width: '5%' }}
          ></div>
        </>
      )}
      {pageContext.value.progress > 70 && pageContext.value.progress <= 90 && (
        <>
          <div
            className="bg-neutral-content p-0.5 text-center  font-medium leading-none "
            style={{ width: '70%' }}
          ></div>
          <div
            className="bg-neutral p-0.5 text-center text-xs font-medium leading-none text-primary-100"
            style={{ width: '5%' }}
          ></div>
        </>
      )}
      {pageContext.value.progress > 90 && (
        <>
          <div
            className="bg-neutral-content p-0.5 text-center  font-medium leading-none "
            style={{ width: '95%' }}
          ></div>

          <div
            className="bg-neutral p-0.5 text-center text-xs font-medium leading-none text-primary-100 rounded"
            style={{ width: '5%' }}
          ></div>
        </>
      )}
    </div>
  )
}
