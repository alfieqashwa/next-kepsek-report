/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div
      className="relative container flex flex-col bg-[url('/images/background-bottomshape.svg')] md:bg-[url('/images/background-bottomshape-invert.svg')] bg-no-repeat min-h-screen mx-auto bg-contain"
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <title>Kepsek Report</title>
      </Head>

      <header className="flex items-center justify-around pt-[72px] mx-28">
        <span className="absolute top-0 right-0 hidden md:block">
          <Image
            src="/images/banner-jaringan-idn-white.svg"
            alt="Logo of Jaringan IDN"
            width={195}
            height={111}
          />
        </span>

        {/* School Logo */}
        <section className="flex items-center justify-start space-x-4">
          <div>
            <Image src="/images/image-3.svg" width={100} height={100} alt="logo-school" />
          </div>
          <div className="text-[#F1FFF8] flex flex-col justify-center items-start">
            <h1 className="text-3xl font-bold">Laporan Kepala Sekolah</h1>
            <h3 className="text-2xl">SMK Bakti Karya Parigi</h3>
          </div>
        </section>

        {/* Trophy */}
        <section className="bg-[#FFFFF4] font-primary rounded-2xl px-4 py-2 flex justify-between items-center space-x-6">
          <div>
            <Image src="/images/layer-1.svg" alt="trophy" width={51.25} height={60.85} />
          </div>
          <div>
            <h4 className="text-[#F2994A]">Points</h4>
            <p className="text-3xl font-bold text-meteorite">120.000</p>
          </div>
          <div>
            <Image src="/images/icon_btn-next_yellow.svg" alt="trophy" width={30} height={30} />
          </div>
        </section>

      </header>

      {/* MAIN */}
      <main className="container max-w-4xl mx-auto mt-6 bg-white">{children}</main>

      {/* FOOTER */}
      <footer className="absolute inset-x-0 bottom-0 font-primary mt-[38px] mb-[54px] max-w-3xl mx-auto container">
        <p className="text-black">Terdapat pertanyaan atau kendala ?</p>
        <section className="flex items-center justify-between mt-2">
          <button className="flex space-x-2 justify-center items-center bg-[#008169] rounded-full pl-3 pr-6 py-1 hover:opacity-90 transition-all duration-150 ease-in-out shadow-md shrink-0">
            <Image src="/images/img_whatsapp.svg" width={23} height={23} alt="Contact logo" />
            <p className="text-xs font-bold text-white">Hubungi tim CS Kami</p>
          </button>
          <div>
            <Image src="/images/powered-by-idn.svg" width={208} height={36.06} alt="Contact logo" />
          </div>
        </section>
      </footer>
    </div>
  )
}