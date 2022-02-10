/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div
      className="relative flex flex-col bg-[url('/images/background-bottomshape.svg')] md:bg-[url('/images/background-bottomshape-invert.svg')] bg-no-repeat min-h-screen mx-auto bg-contain"
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <title>Kepsek Report</title>
      </Head>

      <header className="flex items-center justify-around pt-10 mx-8 lg:pt-16 lg:mx-28">
        <span className="absolute top-0 right-0 hidden w-24 md:block">
          <Image
            src="/images/banner-jaringan-idn-white.svg"
            alt="Logo of Jaringan IDN"
            width={195}
            height={111}
          />
        </span>

        {/* School Logo */}
        <section className="flex items-center justify-start space-x-2">
          <span className="w-14 h-14">
            <Image src="/images/image-3.svg" width={100} height={100} alt="logo-school" />
          </span>
          <div className="text-[#F1FFF8] flex flex-col justify-center items-start">
            <h1 className="font-semibold leading-4 lg:font-bold text-md lg:text-3xl">Laporan Kepala Sekolah</h1>
            <h3 className="text-sm lg:text-2xl">SMK Bakti Karya Parigi</h3>
          </div>
        </section>

        {/* Trophy */}
        <section className="bg-[#FFFFF4] font-primary rounded-lg px-3 lg:px-4 py-1 flex justify-center items-center space-x-3 lg:space-x-6">
          <div className="h-10 w-9">
            <Image src="/images/layer-1.svg" alt="trophy" width={51.25} height={60.85} />
          </div>
          <div>
            <h4 className="text-xs lg:text-base text-[#F2994A]">Points</h4>
            <p className="font-bold leading-4 text-md lg:text-3xl text-meteorite">120.000</p>
          </div>
          <div className="w-4 h-4">
            <Image src="/images/icon_btn-next_yellow.svg" alt="trophy" width={30} height={30} />
          </div>
        </section>

        <nav className="fixed flex flex-col left-[450px] z-90 inset-y-64">
          <a href="#home" className="w-60 -ml-60 p-4 rounded-l-2xl bg-white drop-shadow-2xl shadow-2xl text-[#008169]">
            Home
          </a>
          <a href="#data-digital" className="p-4 active:bg-white rounded-l-2xl shadow-inner bg-[#FAFAFA] text-[#A4A4A4] w-60 -ml-60">
            Data Digital
          </a>
          <a href="#keuangan-digital" className="p-4 rounded-l-2xl shadow-inner bg-[#FAFAFA] text-[#A4A4A4] w-60 -ml-60">
            Keuangan Digital
          </a>
          <a href="#absensi-digital" className="p-4 rounded-l-2xl shadow-inner bg-[#FAFAFA] text-[#A4A4A4] w-60 -ml-60">
            Absensi Digital
          </a>
          <a href="#toko-pelajar" className="p-4 rounded-l-2xl shadow-inner bg-[#FAFAFA] text-[#A4A4A4] w-60 -ml-60">
            Toko Pelajar
          </a>
          <a href="#sign-out" className="p-4 rounded-l-2xl shadow-inner bg-[#FAFAFA] text-[#A4A4A4] w-60 -ml-60">
            Sign Out
          </a>
        </nav>
      </header>

      <section className="relative mt-6 bg-white shadow-xl drop-shadow-xl rounded-2xl">
        <main className="px-10 py-14">

          <section id="home">
            <h2 className="text-2xl font-semibold text-rose-400">HOME</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          </section>
          <section id="data-digital">
            <h2 className="text-2xl font-semibold text-rose-400">Data Digital</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          </section>
          <section id="keuangan-digital">
            <h2 className="text-2xl font-semibold text-rose-400">Keuangan Digital</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          </section>
          <section id="absensi-digital">
            <h2 className="text-2xl font-semibold text-rose-400">Absensi Digital</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          </section>
          <section id="toko-pelajar">
            <h2 className="text-2xl font-semibold text-rose-400">Toko Pelajar</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          </section>
          <section id="sign-out">
            <h2 className="text-2xl font-semibold text-rose-400">Sign Out</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          </section>
        </main>
      </section>

      {/* MAIN */}
      {/* <main className="container max-w-4xl mx-auto mt-6 bg-white">{children}</main> */}

      {/* FOOTER */}
      <footer className="font-primary mt-[38px] mb-[54px] max-w-3xl mx-auto mr-48 container">
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