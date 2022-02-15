import Image from "next/image";

export const DataDigital = () => (
    <div id="data-digital">
        <section className="flex items-center justify-center space-x-6">
            <span className='w-1/4 shadow-md rounded-xl'>
                <Image src="/images/data.svg" width={200} height={200} alt="data-digital" className="object-cover" />
            </span>
            <div className="w-3/4">
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-[#169859] text-2xl capitalize">Data Digital</h2>
                    <div className="bg-[#FFFFF4] space-x-1 font-primary rounded-lg shadow flex justify-items-center items-center py-1 px-2.5 border border-[#FFE4CC]">
                        <Image src="/images/layer-1.svg" alt="trophy" width={20} height={20} />
                        <p className='text-xs font-bold text-meteorite'>300.000</p>
                    </div>
                </div>
                <div className="mt-4 space-y-2 text-xs">
                    <p>Digitalisasikan sekolahmu bersama Jaringan IDN dimulai dari PorDi (Portal Digital). PorDi adalah platform digitalisasi data lembaga pendidikan mulai dari data Siswa / Santri, Staff, hingga Lembaga Pendidikan. Sudah mendukung format data dari Pemerintah seperti EMIS & DAPODIK, sehingga memudahkan Lembaga Pendidikan untuk pelaporan dan penginputan. Serta menjadi gerbang dari langkah-langkah besar dalam proses digitalisasi Lembaga Pendidikan.</p>
                    <p>Ayo, segera mulai perjalanan digitalmu untuk menikmati berbagai fitur-fitur lainnya.</p>
                </div>
            </div>
        </section>

        <section className="pl-12">
            <h2 className="space-x-2 text-2xl font-bold capitalize mt-9">
                <span>tahap:</span><span className="text-green-600">training</span>
            </h2>
            {/* Tahap-Tahap / Steps */}
            <div className="my-5 py-8 -ml-[72px] -mr-6 md:-ml-20 md:-mr-8 px-24 bg-[#F9FFFF]">
                <section className="flex items-start justify-around">
                    <div className="flex flex-col items-center">
                        <button className="bg-[#42AF7A] shadow-[#42AF7A]/50 text-white whitespace-nowrap font-bold text-xs shrink-0 rounded-full py-1.5 px-3 shadow-xl">Langkah 1</button>
                        <span className="relative bg-[#169859] shadow-lg shadow-[#169859]/50 text-center shrink-0 flex justify-center items-center w-14 h-14 rounded-lg mt-8 -rotate-45">
                            <Image src="/images/tilda-icons-group.svg" width={30} height={30} alt="tilda-icons-group" className="text-white rotate-45" />
                        </span>
                        <h4 className="text-sm font-bold text-[#2A2A2A] capitalize mt-6">training</h4>
                    </div>
                    {/* <div className="flex flex-col items-center space-y-10">
                        <hr className="bg-[#D5EEE2] w-20 border"></hr>
                        <span className="">
                            <Image src="/images/arrow-with-0.svg" width={60} height={60} alt="tilda-icons-group" />
                        </span>
                    </div> */}
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
                <p>Sekolah Anda sudah berada di Langkah Pertama digitalisasi. Pastikan Anda merangkul seluruh tim Anda untuk bergerak dan terlatih dalam program ini. Kesuksesan sebuah program hanya bisa terwujud jika seluruh organisasi bergerak menuju perubahan. Segera jadwalkan tim Anda (Staff TU / Operator) untuk menghadiri training PorDi (Portal Digital). Selamat berjuang.</p>
            </div>
        </section>
        <section className="pl-12 mt-20 mr-16">
            <h2 className="capitalize text-[#2A2A2A] text-2xl font-bold">Penggunaan Aplikasi Pelajar</h2>
            <div className="w-full h-4 mt-5 bg-white border rounded-full shadow-lg md:h-6">
                <div className="h-4 border-2 rounded-full shadow-xl md:h-6 bg-gradient-to-r from-green-500 to-green-400" style={{ width: "75%" }}></div>
            </div>
            <p className="text-[#169859] font-bold text-xl md:text-2xl mt-5">75%</p>
        </section>
        <section className="pb-16 pl-12 mr-16 mt-14">
            <h2 className="capitalize text-[#2A2A2A] text-2xl font-bold">Laporan Data Digital</h2>
            {/* <div className="mt-6 bg-[#F9FFFF] w-full"> */}
            <div className="w-full mt-6 rounded-lg shadow-lg h-96 bg-[#F9FFFF]"></div>
        </section>
    </div>
)