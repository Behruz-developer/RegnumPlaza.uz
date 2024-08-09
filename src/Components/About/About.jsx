import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";
import about4 from "../../assets/images/about4.png";
import universal from "../../assets/images/universal.png";
import house from "../../assets/images/house.png";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about_box">
          <div className="about_card_text">
            <h2 className="about_title">Loyiha haqida</h2>
            <p className="about_text">
              NRG Qorasuvda hammasi ajoyib! Joylashgan o`rnidan boshlab,
              xonadonlarni joylashtirish tartibi, xavfsiz hudud va turarjoy
              majmuasining bolg`usi aholisi uchun parkovkalarning
              mavjudligigacha puxta o`ylangan.
            </p>
            <p className="about_text">
              Yangi turarjoy majmuasining konseptini ishlab chigish davomida,
              NRG Uzbekistan rivojlantirish jamoasi, binolar, landshaft va
              xollning zamonaviy dizaynini, majmua ichidagi yashash uchun qulay
              bo`ladigan shart-sharoitlar bilan uyg`unlashtirishga muvaffaq
              bo`ldi.
            </p>
          </div>

          <div className="about_card_left">
            <img className="about_card_left_img" src={universal} alt="" />
              <div className="about_map_text">
                <img src={house} alt="" />
                <p className="about_map_text_text">
                  Hududning o`zgacha bir muhiti, uning tarixiga hurmat bilan
                  munosabatda bolish loyihaning nomini va uning konseptsiyasini
                  belgilab berdi
                </p>
                <p className="about_map_text_text2">Xaritada ko‘rish</p>
              </div>
          </div>
          <div className="about_card_icons">
            <div className="about_card_icon">
              <div className="about_icon_text">
                <img src={about1} alt="" />
                Rivojlangan infratuzilma
              </div>
              <div className="about_icon_text">
                <img src={about2} alt="" />
                Rivojlangan infratuzilma
              </div>
              <div className="about_icon_text">
                <img src={about2} alt="" />
                So‘nggi qavatlardagi terrasalar
              </div>
              <div className="about_icon_text">
                <img src={about3} alt="" />
                Qulay transport o‘tkazgichi
              </div>
              <div className="about_icon_text">
                <img src={about4} alt="" />
                Ko‘p funksiyali hovli
              </div>
              <div className="about_icon_text">
                <img src={about4} alt="" />
                Zamonaviy mualliflik landshafti
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
