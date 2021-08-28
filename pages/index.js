import Head from 'next/head'
// import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Eigozilla</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col min-h-screen">
        <div className="flex flex-grow px-10 md:px-20">
          <div className="w-full my-auto text-center">
            <h1 className="text-blue-700 text-4xl sm:text-6xl md:text-8xl font-bold pb-8">
              Eigozilla.org
            </h1>
            <p className="text-gray-400 text-xl md:text-3xl font-light pb-20">
              Opportunities for Everyone.
            </p>
            <a className="bg-blue-700 hover:bg-blue-600 text-white text-center text-lg md:text-2xl py-3 px-6 rounded-full" href="https://docs.eigozilla.org">
              文法書にアクセス
            </a>
          </div>
        </div>

        <Footer className="bottom-0" />
      </main>
    </div>
  )
}
