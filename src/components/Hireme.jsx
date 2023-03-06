import React from "react";
import hireMe from "../assets/images/10.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get to know me again!</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          {/* <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2> */}
          <p className="text-justify leading-7 w-11/12 mx-auto">
                Hai, aku Grisel anak pertama dari 2 bersaudara. Lahir dari keluarga sederhana<br></br>
                 pada 7 Agustus 2005.
                Aku besar di Turen, kalian pasti tahu Turen kan?<br></br>
                Turen yang dirumorkan ada sebuah Masjid Besar yang dibangun oleh jin, itu loh!<br></br>
                EH KOK JADI BAHAS TUREN SIH
              </p>
              <br></br>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Seperti yang kalian tahu, aku sedang menempuh pendidikan di <br></br> SMK Telkom Malang. Sebelumnya aku ga punya dan bahkan ga kepikiran <br></br> untuk sekolah disini. Jarak Turen dengan Malang cukup jauh, tapi ini <br></br> tidak begitu jauh jika dibandingkan dengan jarak yang memisahkan <br></br> antara aku dengan nya (maaf sedikit curhat)
              </p>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
