/* eslint-disable react/no-unescaped-entities */
import universal from "../../assets/images/universal.png";

const Location = () => {
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">
          <div className="location_card_left">
            <img src={universal} alt="" className="location_img" />
          </div>
          <div className="location_card_right">
            <div className="location_card1">
              <h3 className="location_title">Joylashgan o`rni</h3>
              <p className="location_text">
                Qorasuv dahasi - Toshkentdagi tarixiy qaror topgan ko'rkam
                hudud. Bu yerda bir maromdagi hayot surati va poytaxtning
                dinamik maromi muvaffagiyatli tarzda uyg'unlashadi.
              </p>
              <p className="location_text">
                Bu yerda yashash ajoyib, biznes bilan shug'ullanish esa qulay
                Transport infratuzilmasi shaharning istalgan nuqtasiga oson
                yetib borish imkonini beradi: Siz faqat istagan va zarur
                yo'nalishingizni tanlashingiz kifoya.
              </p>
            </div>
            <div className="location_card2">
              <p className="location_text2">
                NRG Qorasuv - Siz va yaginlaringiz uchun zarur bolgan barcha
                qulayliklarni o'zida jamlagan, shahar xaritasidagi yangi nuqta
                va o'ziga tortuvchi joyga aylanadi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
