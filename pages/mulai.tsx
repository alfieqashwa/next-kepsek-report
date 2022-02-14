/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next'
import Layout from 'components/layout'
import Image from 'next/image'

const MulaiPage: NextPage = () => {
  return (
    <Layout>

      <div>
        <h2 className="text-3xl font-bold text-black md:text-xl">Progres Digitalisasi</h2>

        {/* Data Digital Card */}
        <section className="relative pr-4 mt-4 border shadow rounded-2xl" id="home">
          <div className="absolute right-5 top-5">
            <div className="bg-[#FFFFF4] space-x-1 font-primary rounded-lg shadow flex justify-items-center items-center py-1 px-2.5 border border-[#FFE4CC]">
              <Image src="/images/layer-1.svg" alt="trophy" width={20} height={20} />
              <p className='text-xs font-bold text-meteorite'>120.000</p>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <span className='w-4/6'>
              <Image src="/images/data.svg" width={200} height={200} alt="data-digital" />
            </span>
            <div className='py-6 ml-5'>
              <h3 className="text-[#169859] font-bold text-2xl">Data Digital</h3>
              <p className='mt-2 text-xs text-meteorite'>Anda sudah ada di Stage Sosialisasi, segera jadwalkan Wali Kelas Anda untuk mengikuti sosialisasi. Keberhasilan digitalisasi juga berasal dari peran aktif Wali Kelas</p>
              <div className='flex flex-row items-center mt-6'>
                <button className="bg-[#D5EEE2] text-[#169859] px-3 py-1.5 rounded-full text-xs whitespace-nowrap">Training</button>
                <span className='px-0.5'>
                  <Image src="/images/arrow.svg" width={25} height={10} alt="arrow" />
                </span>
                <button className="bg-[#D5EEE2] text-[#169859] px-3 py-1.5 rounded-full text-xs whitespace-nowrap">Data Upload</button>
                <span className='px-0.5'>
                  <Image src="/images/arrow.svg" width={25} height={10} alt="arrow" />
                </span>
                <button className="bg-[#169859] text-white px-3 py-1.5 rounded-full text-xs whitespace-nowrap">Sosialisasi</button>
                <span className='px-0.5'>
                  <Image src="/images/arrow.svg" width={25} height={10} alt="arrow" />
                </span>
                <button className="text-[#A4A4A4] bg-[#EBF0EE] px-3 py-1.5 rounded-full text-xs whitespace-nowrap">Aktif</button>
              </div>
            </div>
            <span>
              <Image src="/images/icon-btn-next-green.png" width={80} height={80} alt="green-btn-next" />
            </span>
          </div>
        </section>
      </div>

      <section id="data-digital">
        <h2 className="text-base font-semibold text-black md:text-xl">Data Digital</h2>
        <div className='my-4'>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
        </div>
      </section>
      <section id="keuangan-digital">
        <h2 className="text-base font-semibold text-black md:text-xl">Keuangan Digital</h2>
        <div className='my-4'>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
        </div>
      </section>
      <section id="absensi-digital">
        <h2 className="text-base font-semibold text-black md:text-xl">Absensi Digital</h2>
        <div className='my-4'>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
        </div>
      </section>
      <section id="toko-pelajar">
        <h2 className="text-base font-semibold text-black md:text-xl">Toko Pelajar</h2>
        <div className='my-4'>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
        </div>
      </section>
      <section id="sign-out">
        <h2 className="text-base font-semibold text-black md:text-xl">Sign Out</h2>
        <div className='my-4'>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
          <p className="text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, enim totam molestias, quidem eius labore perspiciatis excepturi qui corrupti incidunt cupiditate, nostrum quaerat! Ratione maxime itaque cum obcaecati? Aliquam, tempore.</p>
        </div>
      </section>
    </Layout >
  )
}

export default MulaiPage
