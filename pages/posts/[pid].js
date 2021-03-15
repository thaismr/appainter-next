import Link from 'next/link'

export async function getStaticPaths() {
    return {
      paths: [{
          params: {
              pid: '1'
          }
      },{
          params: {
              pid: '2'
          }
      }],
      fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { pid } = context.params
    return {
        props: { pid },
    }
}

function Posts({ pid }) {
  return <><p>Post: { pid }</p><Link href="/"><a className="classes-here">Go home</a></Link></>
}

export default Posts