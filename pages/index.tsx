/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kepsek Report</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>

      <main className="container mx-auto text-center lg:text-left">
        <div className="lg:ml-32 mt-28">
          <Image src="/images/kepsek-report.svg" width={337.5} height={100} alt="kepsek-report" />
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <Image src="/images/login-kepsek-report.svg" width={659} height={456.08} alt="login kepsek report" />
          </div>
          <div className="lg:mt-6 lg:w-1/2">
            <h1 className="lg:w-5/6 font-extrabold text-3xl lg:text-[40px] text-meteorite lg:leading-[50px]">Selamat bergabung ke dalam Jaringan Lembaga Pendidikan Digital!</h1>
            <p className="mt-6 text-xl lg:text-2xl lg:w-5/6 text-soft-gray">Sebanyak 5630 kepala sekolah dan ketua Yayasan telah memulai perjalanan digitalisasi pendidikan mereka.</p>
            <div className="my-8 lg:my-12">
              <button className="bg-[#007DC4] shadow-lg shadow-[#007DC4]/40 hover:bg-opacity-90 transition-all duration-300 ease-in-out py-4 px-6 rounded-full">
                <h4 className="text-xl font-bold text-slate-50">Login Sekarang</h4>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
