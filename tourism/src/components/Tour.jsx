import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
import tours from "./Package";
import imgCard1 from "../img/bali-1.jpg";
import imgCard2 from "../img/bali-2.jpg";
import imgCard3 from "../img/brunei-1.jpg";
import imgCard4 from "../img/brunei-2.jpg";
import imgCard15 from "../img/bali-1.jpg";

const Tour = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={imgCard15} alt="" />
        <h1>Bali-Brunei</h1>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
              Amanoi Resort nằm trong khuôn viên vườn Quốc gia Núi Chúa (Ninh Thuận) với diện tích hơn 29.000ha bao bọc bờ vịnh Vĩnh Hy. Amanoi Resort cách sân bay Cam Ranh khoảng 62km, cách thành phố Phan Rang tầm 35,8km, cách thành phố Hồ Chí Minh khoảng 373km.
              Amanoi Resort là khu nghỉ dưỡng kết hợp Spa đầu tiên của Tập đoàn khách sạn nghỉ dưỡng Aman tại Việt Nam. Khu nghỉ dưỡng do Công ty cổ phần Nam Núi Chúa làm chủ đầu tư và chính thức khai trương vào 2013.
              Resort gồm 36 căn với 04 hạng Pavilions, Villas, Residences và Spa House. Các hạng phòng ở Amanoi Resort có lối thiết kế mở hài hòa với thiên nhiên, đảm bảo không gian nghỉ dưỡng của du khách luôn ngập tràn trong không khí trong lành và ánh nắng, mang đến giá trị cốt lõi của thương hiệu Aman, đó là sự thanh bình, riêng tư, thân thuộc, ấm cúng, tất cả khách hàng như người bạn đến chơi nhà. Các hạng phòng đều có lối kiến trúc giống nhau, bài trí tối giản theo phong cách truyền thống Việt Nam.
              </p>
              <p>
                * Hồ bơi: Resort sở hữu 02 hồ bơi:
                - Hồ bơi Cliff Pool diện tích 140m2 nằm trên núi rộng 140m2. Độ sâu khoảng 1m4. Hồ bơi này không có khu vực dành cho trẻ em.
                - Hồ bơi Beach Pool nằm cạnh biển diện tích 400m2. Độ sâu khoảng 1m4. Hồ bơi này có khu vực nước nông dành cho trẻ em nhưng không có vách ngăn, trẻ em tắm cần có sự giám sát của phụ huynh.
                Giờ hoạt động của hồ bơi: 07:00-17:00.
                * Khu vui chơi trẻ em: Resort không có khu vui chơi cho trẻ em nhưng có tổ chức các hoạt động cho trẻ em. Phụ huynh có thể đến quầy Lễ tân để đăng ký cho các bé tham gia. Các hoạt động miễn phí có thể kể như câu cá, làm đồ thủ công mĩ nghệ, xem phim tối...
                * Các giải thưởng đã đạt được: Với những tiện nghi và dịch vụ đẳng cấp mang đến khách hàng, Amanoi Resort đã đạt được một số giải thưởng nghỉ dưỡng sau:
                - Top 33 khách sạn mới tốt nhất thế giới năm 2014 do tạp chí Condé Nast Traveler bình chọn.
                - Giả Sen Xanh 2017 về bảo vệ môi trường, bảo tồn và phát triển hài hòa với cảnh quan do The Guide Awards tổ chức.
                - Resort Spa của năm khu vực châu Á và châu Đại Dương 2018.
                - Top 25 khách sạn hàng đầu Việt Nam 2018 do Tripadvisor bình chọn.
                * Danh tiếng: Amanoi resort được nhiều sao Hollywood và sao Việt lựa chọn làm điểm nghỉ dưỡng "bí mật" của mình như sao Hollywood Drew Barrymoore, diễn viên Edward Norton, người mẫu Toni Garrn, gia đình Lý Hải - Minh Hà, Tăng Thanh Hà, Thu Thảo...
                * Đối tượng thích hợp nghỉ dưỡng: Resort thiết kế hướng đến thiên nhiên, con người, đảm bảo sự riêng tư, gần gũi như ở chính căn nhà của mình. Vì vậy, đối tượng cặp đôi, gia đình, nhóm đoàn luôn ưa chuộng lựa chọn Amanoi làm điểm nghỉ dưỡng cho kỳ nghỉ của mình.
                * Đánh giá của khách hàng Chudu24
                "Amanoi resort đẹp, cảnh quan đẹp, yên tĩnh"
                "Đội ngũ nhân viên chuyên nghiệp, thân thiện và tận tâm"
                "Nghỉ dưỡng tại Amanoi resort, khách hàng được quan tâm từ chi tiết nhỏ nhất"
              </p>
            </div>
          </Col>
          <Col sm="4">
            <div className="tour-gallery">
              <a href={imgCard1}>
                <img src={imgCard1} alt="" />
              </a>
              <a href={imgCard2}>
                <img src={imgCard2} alt="" />
              </a>
              <a href={imgCard3}>
                <img src={imgCard3} alt="" />
              </a>
              <a href={imgCard4}>
                <img src={imgCard4} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
    <section className="reviews">
      <Container>
        <section className="tour-msg text-center">
          <h1>Đánh giá và Gợi ý</h1>
          <p>Chúng tôi rất vui khi được nghe ý kiến từ bạn.</p>
          <form action="">
            <Row>
              <Col sm="6">
                <input
                  type="text"
                  name="Name"
                  id="reviewer-name"
                  placeholder="Your Name"
                  required
                />
                <br />
                <input
                  type="email"
                  name="Email"
                  id="reviewer-email"
                  placeholder="Your email"
                  required
                />
              </Col>
              <Col>
                <textarea
                  name="Message"
                  id="reviewer-message"
                  rows="4"
                  placeholder="Your Message"
                />
              </Col>
            </Row>
            <Button outline color="secondary" className="float-right">
              Gửi
            </Button>
          </form>
        </section>
      </Container>
    </section>
  </div>
);

export default Tour;
