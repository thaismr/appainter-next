import Link from 'next/link'

export default function About() {
  return (
    <>
      <h1>About Appainter Net</h1>
      <h2>
        <p>Minimalistic Nextjs frontend.</p>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}