import { MetaHeader } from '~~/components/header'
import { Address } from '~~/components/scaffold-eth'
import { Spinner } from '~~/components/spinner/spinner.component'
import { useScaffoldEventHistory } from '~~/hooks/scaffold-eth'

export default function Activity() {
  const { data: transferEvents, isLoading } = useScaffoldEventHistory({
    contractName: 'ModeMasterMind',
    eventName: 'Transfer',
    // Specify the starting block number from which to read events, this is a bigint.
    fromBlock: 0n,
  })

  if (isLoading)
    return (
      <div className="flex items-center justify-center mt-10">
        <Spinner />
      </div>
    )

  return (
    <>
      <MetaHeader />
      <div className="flex flex-col items-center flex-grow pt-10">
        <div className="px-5">
          <h1 className="flex flex-col w-full mb-6 text-center">
            <span className="text-6xl font-VT323">Degen Master Activity</span>
          </h1>
        </div>
        <div className="overflow-x-auto shadow-lg">
          <table className="table w-full table-zebra">
            <thead>
              <tr>
                <th className="bg-primary">Token Id</th>
                <th className="bg-primary">From</th>
                <th className="bg-primary">To</th>
              </tr>
            </thead>
            <tbody>
              {!transferEvents || transferEvents.length === 0 ? (
                <tr>
                  <td colSpan={3} className="text-center">
                    No events found
                  </td>
                </tr>
              ) : (
                transferEvents?.map((event, index) => {
                  return (
                    <tr key={index}>
                      <th className="text-center">{event.args.tokenId?.toString()}</th>
                      <td>
                        <Address address={event.args.from} />
                      </td>
                      <td>
                        <Address address={event.args.to} />
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
