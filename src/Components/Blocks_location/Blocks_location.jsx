/* eslint-disable react/no-unescaped-entities */
import blocks_location1 from "../../assets/images/about1.png";
// import blocks_location2 from "../../assets/images/about2.png";
// import blocks_location3 from "../../assets/images/about3.png";
// import blocks_location4 from "../../assets/images/about4.png";
import universal from "../../assets/images/universal.png";
import house from "../../assets/images/house.png";

const Blocks_location = () => {
  return (
    <div className="blocks_location">
      <div className="container">
        <div className="blocks_location_box">
          <div className="blocks_location_card_left">
            <img
              className="blocks_location_card_left_img"
              src={universal}
              alt=""
            />
            <div className="blocks_location_map_text">
              <img src={house} alt="" />
              <p className="blocks_location_map_text_text">
              NRG Qorasuv - bu Yevropa va Sharq uslublarini birgalikda qollash orqali ishlab chigilgan eksklyuziv mualliflik dizayni.
              </p>
              {/* <p className="blocks_location_map_text_text2">Xaritada ko‘rish</p> */}
            </div>
          </div>

          <div className="blocks_location_card_text">
            <h2 className="blocks_location_title">Majmua arxitekturasi</h2>
            <p className="blocks_location_text">
              Majmua mutlaq xavfsiz va erkin hudud sifatida chuqur o'ylangan.
              Hech ganday begona kishilar va chagirilmagan mehmonlar.
            </p>
            <p className="blocks_location_text">
              Hovlilarda avtomashina bo'lmaydi. Ishga mahorat ila yondashuv,
              barcha tafsilotlarga e tiborli bo'lish va qurilish
              materiallarining maxsus tanlovi mualliflar g'oyalarining amalga
              oshishi uchun ishonchli kafolatdir.
            </p>
          </div>

          <div className="blocks_location_card_icons">
            <div className="blocks_location_card_icon">
              <div className="blocks_location_icon_text">
                <img src={blocks_location1} alt="" />
                Ventilyatsiya qurilmasiga ega fasad
              </div>
              <div className="blocks_location_icon_text">
                <img src={blocks_location1} alt="" />
                Manolit karkas va xonalararo g‘isht devorlar
              </div>
              <div className="blocks_location_icon_text">
                <img src={blocks_location1} alt="" />
                Sovuq o‘tkazmaydigan metalloplastik profil
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocks_location;
