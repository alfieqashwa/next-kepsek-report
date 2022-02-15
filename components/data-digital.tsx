import Image from "next/image";

export const DataDigital = () => (
    <div id="data-digital">
        <section className="flex items-center justify-center space-x-6">
            <span className='w-1/4 shadow-md rounded-xl'>
                <Image src="/images/data.svg" width={200} height={200} alt="data-digital" className="object-cover" />
            </span>
            <div className="w-3/4">
                <h2 className="font-bold text-[#169859] text-2xl capitalize">Data Digital</h2>
                <div className="mt-2 space-y-2 text-xs">
                    <p>Digitalisasikan sekolahmu bersama Jaringan IDN dimulai dari PorDi (Portal Digital). PorDi adalah platform digitalisasi data lembaga pendidikan mulai dari data Siswa / Santri, Staff, hingga Lembaga Pendidikan. Sudah mendukung format data dari Pemerintah seperti EMIS & DAPODIK, sehingga memudahkan Lembaga Pendidikan untuk pelaporan dan penginputan. Serta menjadi gerbang dari langkah-langkah besar dalam proses digitalisasi Lembaga Pendidikan.</p>
                    <p>Ayo, segera mulai perjalanan digitalmu untuk menikmati berbagai fitur-fitur lainnya.</p>
                </div>
            </div>
        </section>

        <section className="pl-12">
            <h2 className="space-x-2 text-2xl font-bold capitalize mt-9">
                <span>tahap:</span><span className="text-green-600">training</span>
            </h2>
            <div className="my-5 py-8 -ml-[88px] -mr-6 md:-ml-20 md:-mr-8 px-24 bg-[#F9FFFF]">
                <div className="flex items-center text-xs">
                    <button className="bg-[#42AF7A] text-white whitespace-nowrap rounded-full py-1.5 px-4">Langkah 1</button>
                    <hr className="bg-[#D5EEE2] w-32 border"></hr>
                    <button className="bg-[#D5EEE2] py-2 px-3  rounded-full text-[#2A2A2A]">2</button>
                    <hr className="bg-[#D5EEE2] w-32 border"></hr>
                    <button className="bg-[#D5EEE2] py-2 px-3  rounded-full text-[#2A2A2A]">3</button>
                    <hr className="bg-[#D5EEE2] w-32 h-0.5 border"></hr>
                    <button className="bg-[#D5EEE2] py-2 px-3  rounded-full text-[#2A2A2A]">4</button>
                </div>
                <div className="flex items-center pl-12 mt-8 -mx-8">
                    <span className="bg-[#169859] p-4 text-center flex justify-center items-center w-16 h-16 rounded-lg -rotate-45">
                        <Image src="/images/tilda-icons-group.svg" width={90} height={90} alt="tilda-icons-group" className="text-white rotate-45" />
                    </span>
                    <span className="px-6">
                        <Image src="/images/arrow-with-0.svg" width={50} height={50} alt="tilda-icons-group" />
                    </span>
                    <div className="bg-[#D7D7D7] text-center flex justify-center items-center w-12 h-12 rounded-lg -rotate-45"></div>
                    <span className="px-4">
                        <Image src="/images/arrow-with-0.svg" width={50} height={50} alt="tilda-icons-group" />
                    </span>
                    <div className="bg-[#D7D7D7] text-center flex justify-center items-center w-12 h-12 rounded-lg -rotate-45"> </div>
                    <span className="px-4">
                        <Image src="/images/arrow-with-0.svg" width={50} height={50} alt="tilda-icons-group" />
                    </span>
                    <div className="bg-[#D7D7D7] text-center flex justify-center items-center w-12 h-12 rounded-lg -rotate-45"> </div>
                </div>
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