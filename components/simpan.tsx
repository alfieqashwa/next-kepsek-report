import Image from "next/image";

const SimpanComponent = () => (
    <div className="my-5 py-8 -ml-[72px] -mr-6 md:-ml-20 md:-mr-8 px-24 bg-rose-100">
        <section className="relative">
            <div className="flex items-center text-xs shrink-0">
                <button className="bg-[#42AF7A] text-white whitespace-nowrap rounded-full py-1.5 px-4">Langkah 1</button>
                <hr className="bg-[#D5EEE2] w-32 border"></hr>
                <button className="bg-[#D5EEE2] py-2 px-3  rounded-full text-[#2A2A2A]">2</button>
                <hr className="bg-[#D5EEE2] w-32 border"></hr>
                <button className="bg-[#D5EEE2] py-2 px-3  rounded-full text-[#2A2A2A]">3</button>
                <hr className="bg-[#D5EEE2] w-32 h-0.5 border"></hr>
                <button className="bg-[#D5EEE2] py-2 px-3  rounded-full text-[#2A2A2A]">4</button>
            </div>
            {/* <div className="flex items-center pl-12 mt-8 -mx-8"> */}
            <div className="flex items-center mt-8 ml-3 -mr-1">
                <span className="reltive bg-[#169859] text-center shrink-0 flex justify-center items-center w-16 h-16 rounded-lg -rotate-45">
                    <Image src="/images/tilda-icons-group.svg" width={40} height={40} alt="tilda-icons-group" className="text-white rotate-45" />
                </span>
                <span className="px-4">
                    <Image src="/images/arrow-with-0.svg" width={60} height={60} alt="tilda-icons-group" />
                </span>
                <div className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-12 h-12 rounded-lg -rotate-45"></div>
                <span className="px-4">
                    <Image src="/images/arrow-with-0.svg" width={60} height={60} alt="tilda-icons-group" />
                </span>
                <div className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-12 h-12 rounded-lg -rotate-45"> </div>
                <span className="px-4">
                    <Image src="/images/arrow-with-0.svg" width={60} height={60} alt="tilda-icons-group" />
                </span>
                <div className="bg-[#D7D7D7] shrink-0 text-center flex justify-center items-center w-12 h-12 rounded-lg -rotate-45"> </div>
            </div>
        </section>
    </div>
)