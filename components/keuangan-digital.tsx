import Image from "next/image";

export const KeuanganDigital = () => (
    <div id="keuangan-digital">
        <section className="flex items-center justify-center space-x-6">
            <span className='w-1/4 shadow-md rounded-xl'>
                <Image src="/images/keuangan.svg" width={200} height={200} alt="keuangan-digital" className="object-cover" />
            </span>
            <div className="w-3/4">
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-[#169859] text-2xl capitalize">Keuangan Digital</h2>
                    <div className="bg-[#FFFFF4] space-x-1 font-primary rounded-lg shadow flex justify-center items-center py-1 px-2.5 border border-[#FFE4CC]">
                        <Image src="/images/trophy.svg" alt="trophy" width={20} height={20} />
                        <p className='text-xs font-bold text-meteorite'>300.000</p>
                    </div>
                </div>
                <div className="mt-4 space-y-2 text-xs">
                    <p>Program Keuangan Digital dari Jaringan IDN merupakan salah satu langkah untuk menuju digitalisasi pengelolaan keuangan dan pembayaran di bidang pendidikan untuk meningkatkan inklusi keuangan, transparansi dan akuntabilitas lembaga pendidikan.
                        Berikan kemudahan bagi wali murid untuk melakukan pembayaran pendidikan melalui lebih dari 22 channel pembayaran (Alfamart, Indomaret, Shopee, Gopay, BCA, BNI, BSI, Virtual Akun dan Lainnya).</p>
                    <p>Dapatkan juga reward berupa Sharing Revenue / Bagi Hasil dari program Keuangan Digital. Ayo, segera digitalisasikan keuangan Lembaga Pendidikan Anda, demi kemudahan di masa yang akan datang.</p>
                </div>
            </div>
        </section>

        <section className="pl-12">
            <h2 className="space-x-2 text-2xl font-bold capitalize mt-9">
                <span>tahap:</span><span className="text-green-600">mulai</span>
            </h2>
            {/* Tahap-Tahap / Steps */}
            <div className="my-5 py-8 -ml-[72px] -mr-6 md:-ml-20 md:-mr-8 px-24 bg-[#F9FFFF]">
                <section className="flex items-start justify-around">
                    <div className="flex flex-col items-center">
                        <button className="bg-[#D5EEE2] py-1.5 px-3 font-bold rounded-full text-sm text-[#2A2A2A]">1</button>
                        <span className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9"></span>
                        <h4 className="text-xs font-bold text-[#A4A4A4] capitalize mt-5">training</h4>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="bg-[#D5EEE2] py-1.5 px-3 font-bold rounded-full text-sm text-[#2A2A2A]">2</button>
                        <span className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9"></span>
                        <h4 className="text-xs font-bold text-[#A4A4A4] capitalize mt-5">data upload</h4>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="bg-[#D5EEE2] py-1.5 px-3 rounded-full font-bold text-sm text-[#2A2A2A]">3</button>
                        <span className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9"></span>
                        <h4 className="text-xs font-bold text-[#A4A4A4] capitalize mt-5">sosialisasi</h4>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="bg-[#D5EEE2] py-1.5 px-3 rounded-full font-bold text-sm text-[#2A2A2A]">4</button>
                        <span className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9"></span>
                        <h4 className="text-xs font-bold text-[#A4A4A4] capitalize mt-5">aktif</h4>
                    </div>
                </section>
            </div>
            <div className="pr-10 leading-5">
                <p>Ayo, segera mulai program Keuangan Digital, mulai dari jadwalkan staff keuangan / bendahara Anda untuk mengikuti training bersama jaringan IDN. Persiapkan staff keuangan / bendahara Anda dalam perkembangan teknologi digital.</p>
            </div>
        </section>
        <section className="pl-12 my-20 mr-16">
            <div className="flex shadow items-center justify-between px-5 py-2 rounded-2xl bg-[#F9FFFF]">
                <div>
                    <Image src="/images/wa-large.svg" width={100} height={100} alt="wa-icon" />
                </div>
                <div className="w-2/5">
                    <h2 className="capitalize text-[#2A2A2A] text-2xl font-bold">action kepsek</h2>
                    <p className="mt-1 capitalize text-[#2A2A2A] text-sm">Menjadwalkan Training Staff Keuangan / Bendahara</p>
                </div>
                <div className="bg-[#FFFFF4] space-x-1 font-primary rounded-xl shadow flex justify-center items-center py-1.5 px-4 border border-[#FFE4CC]">
                    <Image src="/images/trophy.svg" alt="trophy" width={20} height={20} />
                    <p className='text-xs font-bold whitespace-nowrap text-meteorite'>300.000</p>
                </div>
            </div>
        </section>
    </div>
)