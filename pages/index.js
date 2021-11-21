import Head from '../src/patterns/head';
import Header from '../src/patterns/header';
import Footer from '../src/patterns/footer';

function Home() {
  return (
    <div>
      <Head title="Geclésia - Home" description="Gestão de igrejas." />

      <Header />

      <Footer />
    </div>
  )
}

export default Home