import { useRouter } from 'next/router'
import Link from 'next/link'

const Posts = () => {
  const router = useRouter()
  const { pid } = router.query

  return <><p>Edit Post: {pid}</p><Link href="/"><a>Go home</a></Link></>
}

export default Posts