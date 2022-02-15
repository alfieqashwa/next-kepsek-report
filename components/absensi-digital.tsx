import Image from "next/image";

export const AbsensiDigital = () => (
    <div id="absensi-digital">
        <section className="flex items-center justify-center space-x-6">
            <span className='w-1/4 shadow-md rounded-xl'>
                <Image src="/images/absensi.svg" width={200} height={200} alt="keuangan-digital" className="object-cover" />
            </span>
            <div className="w-3/4">
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-[#169859] text-2xl capitalize">Absensi Digital</h2>
                    <div className="bg-[#FFFFF4] space-x-1 rounded-lg shadow flex justify-center items-center py-1 px-2.5 border border-[#FFE4CC]">
                        <Image src="/images/trophy.svg" alt="trophy" width={20} height={20} />
                        <p className='text-xs font-bold text-meteorite'>300.000</p>
                    </div>
                </div>
                <div className="mt-4 space-y-2 text-xs">
                    <p>Program Absensi Digital dari Jaringan IDN merupakan langkah besar lembaga untuk menuju digitalisasi dalam segi Absensi Siswa / Santri. Dari Absensi Digital juga secara tidak langsung lembaga membantu wali murid untuk mengontrol kehadiran Anak nya melalui Aplikasi Pelajar secara real time.</p>
                    <p>Dengan program ini, permasalahan lembaga seperti pencatatan absen berantakan, guru bingung mencari siswa yang tidak masuk, guru lupa mengabari wali murid dan sebagainya tidak akan terjadi lagi.</p>
                    <p>Ayo, segera digitalisasikan absensi di Lembaga Pendidikan Anda, demi kemudahan di masa yang akan datang.</p>
                </div>
            </div>
        </section>

        <section className="pl-12">
            <h2 className="space-x-2 text-2xl font-bold capitalize mt-9">
                <span>tahap:</span><span className="text-green-600">mulai</span>
            </h2>
            {/* Tahap-Tahap / Steps */}
            <AbsensiSteps0 />
            <AbsensiSteps1 />
            <AbsensiSteps2 />
            <AbsensiSteps3 />
            <AbsensiSteps4 />
            <div className="pr-10 leading-5">
                <p>Ayo, segera mulai program Absensi Digital, Hubungi Jaringan IDN segera untuk menggunakan Absensi Digital dan Claim Kartu Pelajar Gratis dari kami.</p>
            </div>
        </section>
        <section className="pl-12 my-20 mr-16">
            <div className="flex shadow items-center justify-between px-5 py-2 rounded-2xl bg-[#F9FFFF]">
                <div>
                    <Image src="/images/wa-large.svg" width={100} height={100} alt="wa-icon" />
                </div>
                <div className="w-2/5">
                    <h2 className="capitalize text-[#2A2A2A] text-2xl font-bold">action kepsek</h2>
                    <p className="mt-1 capitalize text-[#2A2A2A] text-sm">Pesan & Claim Kartu Pelajar</p>
                </div>
                <div className="bg-[#FFFFF4] space-x-1 rounded-xl shadow flex justify-center items-center py-1.5 px-4 border border-[#FFE4CC]">
                    <Image src="/images/trophy.svg" alt="trophy" width={20} height={20} />
                    <p className='text-xs font-bold whitespace-nowrap text-meteorite'>300.000</p>
                </div>
            </div>
        </section>
    </div>
)

function AbsensiSteps0() {
    return (
        <div className="my-5 py-8 -ml-[72px] -mr-6 md:-ml-20 md:-mr-8 px-24 bg-[#F9FFFF]">
            <section className="flex items-start justify-around">
                <div className="flex flex-col items-center">
                    <span className="bg-[#D5EEE2] py-1.5 px-3 font-bold rounded-full text-sm text-[#2A2A2A]">1</span>
                    <span className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9"></span>
                    <h4 className="text-xs font-bold text-[#A4A4A4] capitalize mt-5">persiapan</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-[#D5EEE2] py-1.5 px-3 font-bold rounded-full text-sm text-[#2A2A2A]">2</span>
                    <span className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9"></span>
                    <h4 className="text-xs font-bold text-[#A4A4A4] capitalize mt-5">training</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-[#D5EEE2] py-1.5 px-3 rounded-full font-bold text-sm text-[#2A2A2A]">3</span>
                    <span className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9"></span>
                    <h4 className="text-xs font-bold text-[#A4A4A4] capitalize mt-5">implementasi</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-[#D5EEE2] py-1.5 px-3 rounded-full font-bold text-sm text-[#2A2A2A]">4</span>
                    <span className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9"></span>
                    <h4 className="text-xs font-bold text-[#A4A4A4] capitalize mt-5">aktif</h4>
                </div>
            </section>
        </div>
    )
}

function AbsensiSteps1() {
    return (
        <div className="my-5 py-8 -ml-[72px] -mr-6 md:-ml-20 md:-mr-8 px-24 bg-[#F9FFFF]">
            <section className="flex items-start justify-around">
                <div className="flex flex-col items-center">
                    <span className="bg-[#42AF7A] shadow-[#42AF7A]/50 text-white whitespace-nowrap font-bold text-xs shrink-0 rounded-full py-1.5 px-3 shadow-xl">Langkah 1</span>
                    <span className="relative bg-[#169859] shadow-lg shadow-[#169859]/50 text-center shrink-0 flex justify-center items-center w-14 h-14 rounded-lg mt-8 -rotate-45">
                        <Image src="/images/tilda-persiapan.svg" width={30} height={30} alt="tilda-persiapan" className="text-white rotate-45" />
                    </span>
                    <h4 className="text-sm font-bold text-[#2A2A2A] capitalize mt-6">persiapan</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-[#D5EEE2] py-1.5 px-3 font-bold rounded-full text-sm text-[#2A2A2A]">2</span>
                    <span className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9"></span>
                    <h4 className="text-xs font-bold text-[#A4A4A4] capitalize mt-5">training</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-[#D5EEE2] py-1.5 px-3 rounded-full font-bold text-sm text-[#2A2A2A]">3</span>
                    <span className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9"></span>
                    <h4 className="text-xs font-bold text-[#A4A4A4] capitalize mt-5">implementasi</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-[#D5EEE2] py-1.5 px-3 rounded-full font-bold text-sm text-[#2A2A2A]">4</span>
                    <span className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9"></span>
                    <h4 className="text-xs font-bold text-[#A4A4A4] capitalize mt-5">aktif</h4>
                </div>
            </section>
        </div>
    )
}

function AbsensiSteps2() {
    return (
        <div className="my-5 py-8 -ml-[72px] -mr-6 md:-ml-20 md:-mr-8 px-24 bg-[#F9FFFF]">
            <section className="flex items-start justify-around">
                <div className="flex flex-col items-center">
                    <span className="bg-[#D5EEE2] py-1.5 px-3 font-bold rounded-full text-sm text-[#2A2A2A]">1</span>
                    <span className="bg-[#9ADEBD] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9">
                        <Image src="/images/check-btn.svg" width={28} height={28} alt="check" className="rotate-45" />
                    </span>
                    <h4 className="text-xs font-bold text-[#169859] capitalize mt-5">persiapan</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-[#42AF7A] shadow-[#42AF7A]/50 text-white whitespace-nowrap font-bold text-xs shrink-0 rounded-full py-1.5 px-3 shadow-xl">Langkah 2</span>
                    <span className="relative bg-[#169859] shadow-lg shadow-[#169859]/50 text-center shrink-0 flex justify-center items-center w-14 h-14 rounded-lg mt-8 -rotate-45">
                        <Image src="/images/tilda-training.svg" width={30} height={30} alt="tilda-training" className="text-white rotate-45" />
                    </span>
                    <h4 className="text-sm font-bold text-[#2A2A2A] capitalize mt-6">training</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-[#D5EEE2] py-1.5 px-3 rounded-full font-bold text-sm text-[#2A2A2A]">3</span>
                    <span className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9"></span>
                    <h4 className="text-xs font-bold text-[#A4A4A4] capitalize mt-5">implementasi</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-[#D5EEE2] py-1.5 px-3 rounded-full font-bold text-sm text-[#2A2A2A]">4</span>
                    <span className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9"></span>
                    <h4 className="text-xs font-bold text-[#A4A4A4] capitalize mt-5">aktif</h4>
                </div>
            </section>
        </div>
    )
}

function AbsensiSteps3() {
    return (
        <div className="my-5 py-8 -ml-[72px] -mr-6 md:-ml-20 md:-mr-8 px-24 bg-[#F9FFFF]">
            <section className="flex items-start justify-around">
                <div className="flex flex-col items-center">
                    <span className="bg-[#D5EEE2] py-1.5 px-3 font-bold rounded-full text-sm text-[#2A2A2A]">1</span>
                    <span className="bg-[#9ADEBD] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9">
                        <Image src="/images/check-btn.svg" width={28} height={28} alt="check" className="rotate-45" />
                    </span>
                    <h4 className="text-xs font-bold text-[#169859] capitalize mt-5">persiapan</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-[#D5EEE2] py-1.5 px-3 font-bold rounded-full text-sm text-[#2A2A2A]">2</span>
                    <span className="bg-[#9ADEBD] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9">
                        <Image src="/images/check-btn.svg" width={28} height={28} alt="check" className="rotate-45" />
                    </span>
                    <h4 className="text-xs font-bold text-[#169859] capitalize mt-5">training</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-[#42AF7A] shadow-[#42AF7A]/50 text-white whitespace-nowrap font-bold text-xs shrink-0 rounded-full py-1.5 px-3 shadow-xl">Langkah 3</span>
                    <span className="relative bg-[#169859] shadow-lg shadow-[#169859]/50 text-center shrink-0 flex justify-center items-center w-14 h-14 rounded-lg mt-8 -rotate-45">
                        <Image src="/images/tilda-implementasi.svg" width={30} height={30} alt="tilda-implementasi" className="text-white rotate-45" />
                    </span>
                    <h4 className="text-sm font-bold text-[#2A2A2A] capitalize mt-6">implementasi</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-[#D5EEE2] py-1.5 px-3 rounded-full font-bold text-sm text-[#2A2A2A]">4</span>
                    <span className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9"></span>
                    <h4 className="text-xs font-bold text-[#A4A4A4] capitalize mt-5">aktif</h4>
                </div>
            </section>
        </div>
    )
}

function AbsensiSteps4() {
    return (
        <div className="my-5 py-8 -ml-[72px] -mr-6 md:-ml-20 md:-mr-8 px-24 bg-[#F9FFFF]">
            <section className="flex items-start justify-around">
                <div className="flex flex-col items-center">
                    <span className="bg-[#D5EEE2] py-1.5 px-3 font-bold rounded-full text-sm text-[#2A2A2A]">1</span>
                    <span className="bg-[#9ADEBD] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9">
                        <Image src="/images/check-btn.svg" width={28} height={28} alt="check" className="rotate-45" />
                    </span>
                    <h4 className="text-xs font-bold text-[#169859] capitalize mt-5">persiapan</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-[#D5EEE2] py-1.5 px-3 font-bold rounded-full text-sm text-[#2A2A2A]">2</span>
                    <span className="bg-[#9ADEBD] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9">
                        <Image src="/images/check-btn.svg" width={28} height={28} alt="check" className="rotate-45" />
                    </span>
                    <h4 className="text-xs font-bold text-[#169859] capitalize mt-5">training</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-[#D5EEE2] py-1.5 px-3 font-bold rounded-full text-sm text-[#2A2A2A]">3</span>
                    <span className="bg-[#9ADEBD] shrink-0 text-center flex justify-center items-center w-10 h-10 rounded-lg -rotate-45 mt-9">
                        <Image src="/images/check-btn.svg" width={28} height={28} alt="check" className="rotate-45" />
                    </span>
                    <h4 className="text-xs font-bold text-[#169859] capitalize mt-5">implementasi</h4>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-[#42AF7A] shadow-[#42AF7A]/50 text-white whitespace-nowrap font-bold text-xs shrink-0 rounded-full py-1.5 px-3 shadow-xl">Langkah 4</span>
                    <span className="relative bg-[#2D9CDB] shadow-lg shadow-[#2D9CDB]/50 text-center shrink-0 flex justify-center items-center w-14 h-14 rounded-lg mt-8 -rotate-45">
                        <Image src="/images/tilda-aktif.svg" width={30} height={30} alt="tilda-aktif" className="text-white rotate-45" />
                    </span>
                    <h4 className="text-sm font-bold text-[#2A2A2A] capitalize mt-6">aktif</h4>
                </div>
            </section>
        </div>
    )
}