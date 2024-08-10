import universal from '../../assets/images/universal.png'


const Company = () => {
  return (
    <div className="company">
      <div className="container">
        <div className="company_box">
          <div className="company_card">
            <div className="company_card_top">
              <h2 className="company_title">Quruvchi kompaniya to‘g‘risida</h2>
              <p className="company_text">
                Sizning uyingizda hozirdan baxtli oilalar yashamogdalar,
                bolajonlar birinchi do'stlarini topmoqdalar va do stona
                qo'shnichilik madaniyati gullab-yashnamoqda.
              </p>
              <p className="company_text">
                NRG - O'zbekiston va Qozog'iston qardosh xalqlarining do'stligi
                va madaniy birligining, hamfikrlilik ittifogining yaggol
                tasdig'idir. Biz o'zbek xalgining ko'p asrlik eng zo'r me'moriy
                ananalari bilan Qozog'istonning ilg'or qurilish tajribasini
                mujassamlashtirmoqdamiz.
              </p>
              <p className="company_text">
                Biz hayot uchun qulay makon barpo etmoqdamiz, 24/7 sifatli
                servis va maishiy masalalarda kafolatlangan yordam taqdim etamiz
              </p>
            </div>
            <div className="company_card_bottom">
              <div className="company_card_bottom_numbers">
                <h3>1684+</h3>
                <p>Oila bizning uylarda yashamoqda</p>
              </div>
              <div className="company_card_bottom_numbers">
                <h3>188 430+ m2</h3>
                <p>Xonadonlar qurib bitkazilib o‘z egalariga topshirildi</p>
              </div>
            </div>
          </div>
          <img src={universal} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Company;
