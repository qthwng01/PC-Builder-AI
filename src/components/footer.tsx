import Link from 'next/link'

function Footer() {
  return (
    <div className="container footer">
      <p className="p__footer">
        Developer by <Link href="https://github.com/qthwng01">qthwngg_</Link>
      </p>
      <p className="f__footer">Built with OpenAI, NextJS, Typescript, Chakra UI. Deloy in Render.</p>
    </div>
  )
}

export default Footer
