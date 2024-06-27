import Transition from "@components/userClient/elements/Transition";
import "@styles/about-page.css"
import React from "react";

const page = () => {
  return (
    <div className="about-page-container">
      <div className="about-page-div">
        <Transition duration={0.2}>
          <h1>
            Uzun Dönem Kirala olarak, 2024 yılında uzun dönem araç kiralama
            sektörüne adım attık. Misyonumuz, uzun vadeli araç kiralama
            ihtiyaçlarına sahip firma ve bireylere, yüksek vizyon ve kalite
            standartları çerçevesinde hizmet sunmaktır. Sektördeki deneyimimiz
            ve profesyonel yaklaşımımızla, müşterilerimizin beklentilerini
            karşılamayı ve aşmayı hedefliyoruz.
          </h1>
        </Transition>
        <Transition duration={0.4}>
          <h1>
            Kuruluşumuzun temel prensiplerinden biri, müşterilerimize en uygun
            kiralama çözümlerini sunarak, onların iş süreçlerini ve günlük
            yaşamlarını kolaylaştırmaktır. Bu doğrultuda, geniş araç filomuz ve
            esnek kiralama seçeneklerimiz ile her türlü ihtiyaca cevap
            verebilecek kapasitedeyiz. İş ortaklarımızın ve bireysel
            müşterilerimizin memnuniyeti, bizim için en önemli önceliktir.
          </h1>
        </Transition>
        <Transition duration={0.6}>
          <h1>
            Hizmet verdiğimiz süreç boyunca, müşterilerimize her adımda destek
            olmayı ve onların memnuniyetini en üst düzeyde tutmayı amaçlıyoruz.
            Profesyonel ekibimiz, her türlü sorunu hızlı ve etkili bir şekilde
            çözebilme yeteneğine sahip olup, müşteri odaklı hizmet anlayışını
            benimsemektedir.
          </h1>
        </Transition>
        <Transition duration={0.8}>
          <h1>
            Uzun Dönem Kirala olarak, yalnızca araç kiralama hizmeti sunmakla
            kalmıyor, aynı zamanda müşterilerimizin iş verimliliğini
            artırmalarına yardımcı olacak stratejik çözümler de sunuyoruz.
            Yenilikçi yaklaşımlarımız ve sürekli gelişim anlayışımız ile
            sektörde öncü olmayı sürdüreceğiz.
          </h1>
        </Transition>
        <Transition duration={1}>
          <h1>
            Bizi tercih eden firma ve bireylere, en iyi hizmeti sunmak için var
            gücümüzle çalışıyor, onların uzun dönem kiralama süreçlerini en iyi
            şekilde yönetmeleri için yanlarında oluyoruz.
          </h1>
        </Transition>
      </div>
    </div>
  );
};

export default page;
