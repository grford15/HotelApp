import React, { Component } from 'react';
import Title from './Title';
import {
  FaCocktail,
  FaHiking,
  FaShuttleVan,
  FaBeer,
} from 'react-icons/fa';

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: 'Free Cocktails',
          info:
            'Dicta est nobis est sapiente nihil qui aut deserunt.',
        },
        {
          icon: <FaHiking />,
          title: 'Great hiking routes nearby',
          info:
            'Consequatur ducimus inventore voluptatem iusto beatae labore laborum aliquam. Ad ea omnis in omnis. Nihil qui quis possimus. Ut doloribus sit.',
        },
        {
          icon: <FaShuttleVan />,
          title: 'Airport shuttle available',
          info:
            'Ad ea omnis in omnis. Nihil qui quis possimus. Ut doloribus sit.',
        },
        {
          icon: <FaBeer />,
          title: 'All inclusive drinks',
          info:
            'Qui molestiae eum. Et dolorem velit consequuntur non. Earum totam hic facilis sequi fuga qui similique qui quia.',
        },
      ],
    };
  }
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
