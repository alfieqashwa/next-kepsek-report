/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div
      className="flex flex-col bg-[url('/images/background-bottomshape.svg')] md:bg-[url('/images/background-bottomshape-invert.svg')] bg-no-repeat min-h-screen mx-auto bg-contain"
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <title>Kepsek Report</title>
      </Head>

      <div className="container relative mx-auto">
        <header className="flex items-center justify-between mt-8 md:mt-16 lg:mt-20 mx:16 md:mx-20 lg:mx-32">
          <span className="absolute top-0 right-0 hidden sm:w-24 md:w-36 md:block">
            <Image
              src="/images/banner-jaringan-idn-white.svg"
              alt="Logo of Jaringan IDN"
              width={195}
              height={111}
            />
          </span>

          {/* School Logo */}
          <section className="flex items-center justify-start space-x-2">
            <span className="lg:h-20 w-14 h-14 lg:w-24">
              <Image src="/images/image-3.svg" width={100} height={100} alt="logo-school" />
            </span>
            <div className="text-[#F1FFF8] flex flex-col justify-center items-start">
              <h1 className="text-base font-semibold leading-4 md:leading-6 lg:font-bold md:text-lg lg:text-3xl whitespace-nowrap">Laporan Kepala Sekolah</h1>
              <h3 className="text-sm lg:text-2xl">SMK Bakti Karya Parigi</h3>
            </div>
          </section>

          {/* Trophy */}
          <section className="bg-[#FFFFF4] font-primary rounded-xl px-3 lg:px-4 py-1 md:py-2 flex justify-center items-center space-x-2 md:space-x-6">
            <div className="h-10 w-9 lg:w-12 lg:h-16">
              <Image src="/images/layer-1.svg" alt="trophy" width={51.25} height={60.85} />
            </div>
            <div>
              <h4 className="text-xs lg:text-base leading-4 lg:leading-3 text-[#F2994A]">Points</h4>
              <p className="font-bold leading-4 text-md lg:text-2xl text-meteorite">120.000</p>
            </div>
            <div className="w-4 h-4 md:w-6 md:h-6">
              <Image src="/images/icon_btn-next_yellow.svg" alt="trophy" width={30} height={30} />
            </div>
          </section>
        </header>

        <section className="relative mt-6 md:mt-8 sm:mx-auto sm:max-w-lg md:max-w-3xl lg:max-w-4xl">

          <nav className="fixed flex flex-col left-[400px] md:left-[340px] lg:left-[420px] xl:left-[550px] 2xl:left-[660px] z-90 inset-y-40 md:inset-y-52 space-y-0.5">
            <a href="#home" className="text-xs md:text-base w-96 -ml-80 p-2 md:py-3 md:px-4 rounded-l-lg md:rounded-l-2xl bg-white drop-shadow-2xl shadow-2xl text-[#008169]">
              Home
            </a>
            <a href="#data-digital" className="p-2 md:px-4 md:py-3 text-xs md:text-base active:bg-white rounded-l-lg md:rounded-l-2xl shadow-lg bg-[#FAFAFA] text-[#A4A4A4] w-96 -ml-80">
              Data Digital
            </a>
            <a href="#keuangan-digital" className="p-2 md:px-4 md:py-3 text-xs md:text-base active:bg-white rounded-l-lg md:rounded-l-2xl shadow-lg bg-[#FAFAFA] text-[#A4A4A4] w-96 -ml-80">
              Keuangan Digital
            </a>
            <a href="#absensi-digital" className="p-2 md:px-4 md:py-3 text-xs md:text-base active:bg-white rounded-l-lg md:rounded-l-2xl shadow-lg bg-[#FAFAFA] text-[#A4A4A4] w-96 -ml-80">
              Absensi Digital
            </a>
            <a href="#toko-pelajar" className="p-2 md:px-4 md:py-3 text-xs md:text-base active:bg-white rounded-l-lg md:rounded-l-2xl shadow-lg bg-[#FAFAFA] text-[#A4A4A4] w-96 -ml-80">
              Toko Pelajar
            </a>
            <a href="#sign-out" className="p-2 md:px-4 md:py-3 text-xs md:text-base active:bg-white rounded-l-lg md:rounded-l-2xl shadow-lg bg-[#FAFAFA] text-[#A4A4A4] w-96 -ml-80">
              Sign Out
            </a>
          </nav>

          <div className="flex justify-end">
            <main className="w-3/4 p-6 bg-white shadow-xl md:p-8 drop-shadow-xl rounded-2xl font-primary">{children}</main>
          </div>


          {/* FOOTER */}
          <footer className="flex justify-end mb-10 mt-7">
            <div className="w-3/4 font-primary">
              <p className="text-xs text-black md:text-base">Terdapat pertanyaan atau kendala ?</p>
              <section className="flex items-center justify-between mt-0.5 md:mt-2">
                <button className="flex space-x-2 justify-center items-center bg-[#008169] rounded-full pl-2 pr-4 py-1 hover:opacity-90 transition-all duration-150 ease-in-out shadow-md shrink-0">
                  <span className="w-4 h-4 md:w-6 md:h-6">
                    <Image src="/images/img_whatsapp.svg" width={23} height={23} alt="Contact logo" />
                  </span>
                  <p className="text-xs text-white md:text-sm font-md">Hubungi tim CS Kami</p>
                </button>
                <span className="w-32 md:w-60">
                  <Image src="/images/powered-by-idn.svg" width={208} height={36.06} alt="Contact logo" />
                </span>
              </section>
            </div>
          </footer>
        </section>

      </div>
    </div>
  )
}