import React from "react";
import Header from "../components/header";
import Button from "../components/header/button";
import { FaChevronRight } from "react-icons/fa";

import "./style.scss";

import blogImg1 from "../assets/img/blog-1.jpg";
import blogImg2 from "../assets/img/blog-2.jpg";
import blogImg3 from "../assets/img/blog-3.jpg";

function HomePage() {
  return (
    <div className="home">
      <Header />
      <section className="intro">
        <div className="container ">
          <div className="content flow-content">
            <div className="text flow-content">
              <h1 className="title">
                Lorem ipsum dolor sit amet, consectet adipiscing
              </h1>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <Button Icon={FaChevronRight} variant="link" size="md">
              Connect
            </Button>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container flow-content">
          <div>
            <h2 className="title">About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna sed do amet.
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
            dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </p>
        </div>
      </section>

      {/* blogs */}
      <section className="blogs">
        <div className="container">
          <div className="content">
            <div>
              <h2 className="section-title">Blog</h2>
              <p className="section-subtitle">
                Latest thoughts, news and ideas
              </p>
            </div>
            <ul>
              <li>
                <div className="blog">
                  <img src={blogImg1} alt="" />
                  <h3>Lorem ipsum dolor sit amet, consectet adipiscing</h3>
                  <p>Lorem ipsum dolor sit amet, consectet adipiscing</p>
                  <div>
                    <p>Oct 8</p>
                    <p>8 min read</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="blog">
                  <img src={blogImg2} alt="" />
                  <h3>Lorem ipsum</h3>
                  <p>Lorem ipsum dolor sit amet, consectet adipiscing</p>
                  <div>
                    <p>Oct 8</p>
                    <p>8 min read</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="blog">
                  <img src={blogImg3} alt="" />
                  <h3>Lorem ipsum dolor sit amet, consectet adipiscing</h3>
                  <p>Lorem ipsum dolor sit amet, consectet adipiscing</p>
                  <div>
                    <p>Oct 8</p>
                    <p>8 min read</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
