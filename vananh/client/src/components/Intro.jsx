import React from "react";
import Carousel from "./Carousel";
import { Container } from "reactstrap";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Intro (){
    return(
        <div>
            <Carousel/>
            <div className="subComponent" id="aboutBody">
          <Container>
            <header className="headerTitle text-center">
              <h1>Giới thiệu</h1>
              <p>Vân Anh tourism là một website cung cấp thông tin dịch vụ bán vé tàu cao tốc trực tuyến. Với giá cả hợp lí, tư vấn nhiệt tình, chất lượng cao thì Vân Anh tourism thực sự là 1 lựa chọn đúng đắn cho khách hàng có nhu cầu đi du lịch mà chi phí hơi hạn hẹp. Chúng tôi cam kết đảm bảo an toàn và sẽ mang đến cho bạn những trải nghiệm thú vị. Vân Anh tourism luôn đồng hành giúp bạn có chuyến đi tiết kiệm và đáng nhớ. </p>
            </header>
            </Container>
            </div>
            <Contact/>
            <Footer/>    
        </div>
    )
}