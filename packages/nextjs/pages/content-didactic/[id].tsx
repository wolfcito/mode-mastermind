import { useRouter } from 'next/router'
import { RunwayContentDidactic } from '~~/components/carousel-didactic-content'
import { ContentDidacticProgressBar } from '~~/components/progress'
import { ContentDidacticByIdProvider } from '~~/contexts/ContentDidacticById'

export default function ContentDidacticById() {
  const router = useRouter()
  console.log('router.query.id', router)
  return (
    <ContentDidacticByIdProvider idContent={router.query.id}>
      <main>
        <ContentDidacticProgressBar />
        <RunwayContentDidactic />
      </main>
    </ContentDidacticByIdProvider>
  )
}
