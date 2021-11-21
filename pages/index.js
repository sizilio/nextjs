import Head from '../src/patterns/head'
import Header from '../src/patterns/header'
import Footer from '../src/patterns/footer'
import Content from '../src/components/content'

function Home() {
  return (
    <div>
      <Head title="Vinícius Sizílio" description="Desenvolvedor FullStack." />

      <Content />
    </div>
  )
}

export default Home