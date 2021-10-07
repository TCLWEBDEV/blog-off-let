import React, { useEffect, useState } from 'react';
import ScrollComponent from 'react-infinite-scroller';
import api from '../../services/api';

interface IData {
  _id: string;
  asin: string;
  title: string;
  images: [string];
  full_link: string;
  description: string;
  current_price: number;
  current_price_formatted: string;
  previous_price: number;
  previous_price_formatted: string;
  discount: number;
  stars: number;
  amazon_prime: Boolean;
  site: string;
  amazon_choice: Boolean;
  offer_ends: Date;
  brand: string;
  category: string;
}

function App() {
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('hDiscount');
  const [filter, setFilter] = useState('');
  const [categories, setCategories] = useState<any>();
  const [load, setLoad] = useState(true);
  const [page, setPage] = useState(1);

  const [data, setData] = useState<IData[]>([]);

  const loadProducts = async () => {
    await api.get('/amazon-offers/categories').then(
      (response) => {
        setCategories(response.data);
      }
    ).catch((error) => {
      console.log('category error:', error)
    });

    console.log('pagina number: ', page);

    await api
    .get('/amazon-offers/products', {
      params: {
        category: category === 'All' ? undefined: category,
        sortBy: sortBy,
        filter: filter,
        page: page,
        limit: 6,
      },
      headers: {
        latestpageddocs: JSON.stringify([]),
      },
    })
    .then((response) => {
      const newData = [...data, ...response.data.data];
      setData(newData);
      setTimeout(() => setLoad(true), 1000);
    })
    .catch((error) => {
      console.log(error)
    });
  }

  const loadProductsToParams = async () => {
    setLoad(false);
    await api.get('/amazon-offers/categories').then(
      (response) => {
        setCategories(response.data);
      }
    ).catch((error) => {
      console.log('category error:', error)
    });

    await api
    .get('/amazon-offers/products', {
      params: {
        category: category === 'All' ? undefined: category,
        sortBy: sortBy,
        filter: filter,
        page: page,
        limit: 6,
      },
      headers: {
        latestpageddocs: JSON.stringify([]),
      },
    })
    .then((response) => {
      setData(response.data.data);
      setTimeout(() => setLoad(true), 1000);
    })
    .catch((error) => {
      console.log(error)
    });
  }


  useEffect( () => {
    setPage(1);
    loadProductsToParams();
  }, [sortBy, filter, category]);

  return (
    <>
  <header className="navbar">
    <div className="container">
        <div className="navba--section navbar--logo">
            <a href="/">
              <img src="/logo-navbar.svg" alt="Offlet" />
            </a>
        </div>

      <div className="navbar--section navbar--search">
        <div className="input input-withIcon input-fullWidth">
          <input
          id="test1"
          placeholder="Search product..."
          type="text"
          onChange={(event) => setFilter(event.target.value)}
          />
          <svg className="input-icon" width="26" height="26" viewBox="0 0 26 26" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8333 19.5C12.8331 19.5 14.6715 18.8121 16.1384 17.6713L20.9007 22.4337L22.4325 20.9018L17.6702 16.1395C18.812 14.6716 19.5 12.8332 19.5 10.8333C19.5 6.05475 15.6119 2.16666 10.8333 2.16666C6.05471 2.16666 2.16663 6.05475 2.16663 10.8333C2.16663 15.6119 6.05471 19.5 10.8333 19.5ZM10.8333 4.33333C14.418 4.33333 17.3333 7.24858 17.3333 10.8333C17.3333 14.4181 14.418 17.3333 10.8333 17.3333C7.24854 17.3333 4.33329 14.4181 4.33329 10.8333C4.33329 7.24858 7.24854 4.33333 10.8333 4.33333Z"
              fill="#212E63" />
          </svg>
        </div>
      </div>

      <div className="navbar--section navbar--menu">
        <div className="burger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="menu">
          <li className="menu-item">
            <a href="/contact" target="_blank">Support</a>
          </li>
          <li className="menu-item">
            <a href="/privacy" target="_blank">Privacy</a>
          </li>
        </ul>
      </div>
    </div>
  </header>


<main className="wrapper">

    <div className="s-hero">
        <div className="container">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to <span className="accent">Off-Let</span></h1>
                <h2 className="hero-subtitle">Home to the best offers and discounts!</h2>
            </div>
            <div className="hero-image">
                <img src="/hero-offlet.svg" alt="" />
            </div>
        </div>
    </div>

    <div className="container content">

        <div className="row">

            <div className="col mb-big">

                <div className="filters-bar">

                    <div className="select categories-filter">
                        <select onChange={(event) => setCategory(event.target.value)} >
                            {
                              categories && categories.map((cat: any) => (
                                <option key={cat._id}>{cat.name}</option>
                              ))
                            }

                        </select>
                    </div>

                    <div className="select order-filter">
                        <select onChange={(event) => setSortBy(event.target.value)} >
                            <option>Bigger Discount</option>
                            <option value='hDiscount'>Bigger Discount</option>
                            <option value='lDiscount'>Lower Discount</option>
                            <option value='expensive'>HigherPrice</option>
                            <option value='cheap'>Lower Price</option>
                        </select>
                    </div>

                </div>


        <ScrollComponent
        pageStart={0}
        loadMore={(num: number) => {
          setLoad(false);
          setTimeout(() => {
            if (load) {
              setPage(page + 1);
              loadProducts();
            } else {
              return;
            }
          }, 500);


        }}
        hasMore={true}
        loader={
        <div className="loading">
          <img className="loading-gif" src="/loadingif.gif" alt="Loading.." />
        </div>
        }
        >
        <div className="grid-articles">
          {
            data && data.map((product) => (
              <article key={product._id} className="cardnews">
                  <a href={product.full_link} target="_blank">
                      <div className="cardnews__image">
                          <img src={product.images[0]} alt="" />
                      </div>
                      <div className="cardnews__body">
                          <div className="cardnews__content">
                              <h4 className="cardnews__title">
                                  {product.title}
                              </h4>
                              <div className="cardnews__prices">
                                  <span className="promotionalprice">
                                      {product.previous_price_formatted}
                                  </span>
                                  <span className="price">
                                      {product.current_price_formatted}
                                  </span>
                                  <span className="badge-price">
                                      {product.discount}% OFF
                                  </span>
                              </div>
                              <p className="cardnews__expert">
                              {product.description}
                              </p>
                              <small className="site-offer">
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd"
                                          d="M1.19802 1.9387C1.04129 1.48014 1.47964 1.04151 1.9383 1.19794L10.5374 4.1307C10.9462 4.27011 11.067 4.7899 10.7616 5.09528L9.01979 6.83711L12.6625 10.4798C12.8903 10.7076 12.8903 11.077 12.6625 11.3048L11.3047 12.6625C11.0769 12.8903 10.7076 12.8903 10.4798 12.6625L6.83533 9.01809L5.0935 10.7453C4.78771 11.0485 4.27005 10.9272 4.13078 10.5197L1.19802 1.9387ZM2.68624 2.68568L4.93349 9.26096L6.83881 7.37165L10.8922 11.4251L11.425 10.8923L7.36987 6.83711L9.2744 4.93259L2.68624 2.68568Z"
                                          fill="#7A82A2" />
                                  </svg>
                                  {product.site}
                              </small>
                          </div>
                      </div>
                  </a>
              </article>
            ))
          }
          </div>
            </ScrollComponent>
            </div>

        </div>

    </div>
</main>

</>
  );
}

export default App;
