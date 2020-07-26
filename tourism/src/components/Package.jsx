import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import bali_1 from "../img/bali-1.jpg";
import condao_1 from "../img/condao-1.jpg";
import singapore_1 from "../img/singapore-1.jpg";
import dltc_1 from "../img/dltc-1.jpg";
import hongkong_1 from "../img/hongkong-1.jpg";
import thailan_1 from "../img/thailan-1.jpg";
import phuket_1 from "../img/phuket-1.jpg";
import kinabalu_1 from "../img/kinabalu-1.jpg";
import dailoan_1 from "../img/dailoan-1.jpg";
const tours = [
  {
    id: 1,
    category: ["resort", "trăng mật", "thành phố", "ngoài nước"],
    img: bali_1,
    alt: "blah blah",
    title: "Bali - Brunei",
    subtitle: " 6 ngày, 5 đêm"
  },
  {
    id: 2,
    category: ["resort", "biển", "trong nước"],
    img: condao_1,
    alt: "blah blah",
    title: "Côn Đảo",
    subtitle: " 3 ngày, 2 đêm"
  },
  {
    id: 3,
    category: ["resort", "thành phố", "ngoài nước"],
    img: singapore_1,
    alt: "blah blah",
    title: "Malaysia - Singapore",
    subtitle: " 6 ngày, 5 đêm"
  },
  {
    id: 4,
    category: ["resort", "biển", "núi", "trăng mật", "trong nước"],
    img: dltc_1,
    alt: "blah blah",
    title: "Danh lam thắng cảnh miền Bắc",
    subtitle: " 7 ngày, 6 đêm"
  },
  {
    id: 5,
    category: ["thành phố", "trăng mật", "ngoài nước"],
    img: hongkong_1,
    alt: "blah blah",
    title: "Hồng Kông - Thâm Quyến - Quảng Châu",
    subtitle: " 5 ngày, 4 đêm"
  },
  {
    id: 6,
    category: ["trăng mật", "ngoài nước"],
    img: thailan_1,
    alt: "blah blah",
    title: "Thái Lan",
    subtitle: " 4 ngày, 3 đêm"
  },
  {
    id: 7,
    category: ["resort", "biển", "ngoài nước"],
    img: kinabalu_1,
    alt: "blah blah",
    title: "Brunei - Kota Kinabalu",
    subtitle: " 4 ngày, 3 đêm"
  },
  {
    id: 8,
    category: ["resort", "biển", "ngoài nước"],
    img: phuket_1,
    alt: "blah blah",
    title: "Thái Lan - Phuket",
    subtitle: " 4 ngày, 3 đêm"
  },
  {
    id: 9,
    category: ["resort", "thành phố", "ngoài nước"],
    img: dailoan_1,
    alt: "blah blah",
    title: "Đài Loan (Cao Hùng - Đài Trung - Nam Đầu - Đài Bắc)",
    subtitle: " Liên hệ"
  },
];

const itemCategories = [
  "tất cả",
  "biển",
  "resort",
  "leo núi",
  "cắm trại",
  "trăng mật",
  "thành phố",
  "trong nước",
  "ngoài nước"
];

class Package extends Component {
  state = {
    cards: [],
    category: "tất cả"
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Gói Du Lịch</h1>
            <p>Tổng hợp các gói du lịch của chúng tôi</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "tất cả"
                  ? cards.map(tourcard => {
                      return tourcard.category.map(catItem => {
                        return catItem === category ? (
                          <TourCard key={tourcard.id} tourcard={tourcard} />
                        ) : null;
                      });
                    })
                  : cards.map(tourcard => (
                      <TourCard key={tourcard.id} tourcard={tourcard} />
                    ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
