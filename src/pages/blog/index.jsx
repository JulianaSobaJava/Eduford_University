import React from "react";
import Banner from "../../views/banner/index";
import certificate from "../../image/certificate.jpg";

import "../../styles/blog.scss";

export default function Blog() {
  return (
    <>
      <Banner title="Our Certificate e Online Programs for 2022" />
      <main>
        <section className="blog">
          <div className="row">
            <div className="blog-left">
              <img src={certificate} alt="" />
              <h2>Our Certificate e Online Programs for 2022</h2>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus quis illum voluptates ducimus voluptate
                reprehenderit eum quam iste culpa itaque eius, sint minus nam
                minima cumque. Quo cupiditate labore vitae architecto, magni
                saepe quaerat, doloremque rerum, inventore veniam ducimus animi
                odit itaque asperiores dignissimos blanditiis molestias. Optio
                officia quasi ducimus?
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                assumenda eos distinctio qui error? Pariatur accusamus sit ipsum
                ex quod!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis nam dolor debitis. Recusandae hic nemo ex. Sapiente
                alias rerum modi, unde similique laboriosam totam aliquid id
                deleniti pariatur possimus ea magnam omnis quod quisquam saepe
                quis rem commodi quibusdam ut accusantium. Ex perspiciatis quod
                quam ea quis, incidunt dolore, in molestias aliquam repellendus
                ratione blanditiis vero fuga laborum magnam amet.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus nihil ea temporibus commodi? Eum esse, neque sint
                in recusandae iure velit praesentium consequatur ea, delectus
                sequi aperiam dolorum voluptatem. Aspernatur eius maxime
                voluptatem cumque iusto obcaecati, rem tempore ab voluptate
                deserunt reprehenderit esse perferendis quibusdam vel qui enim
                excepturi impedit nam amet dicta. Et perferendis esse minus hic
                voluptas doloribus aspernatur iure maiores quibusdam, cum eum
                laudantium excepturi sequi tempora vitae nulla consequuntur sed
                qui aperiam praesentium possimus! Quidem voluptatibus
                dignissimos ratione libero vitae temporibus suscipit! Aut
                soluta, ab magni necessitatibus cumque minus eius, fugiat
                perspiciatis quasi eveniet perferendis laboriosam?
              </p>
              <div className="comment-box">
                <h3>Leave a comment</h3>
                <form className="comment-form">
                  <input type="text" placeholder="Enter Name" />
                  <input type="email" placeholder="Enter Email" />
                  <textarea rows="5" placeholder="Your Commment"></textarea>
                  <button className="btn" id="btn-red" type="submit">
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
            <div className="blog-right">
              <h3>Post Categories</h3>
              <div>
                <span>Comerce</span>
                <span>12</span>
              </div>
              <div>
                <span>Marketing</span>
                <span>32</span>
              </div>
              <div>
                <span>Cooker</span>
                <span>23</span>
              </div>
              <div>
                <span>Airplane</span>
                <span>19</span>
              </div>
              <div>
                <span>Lawer</span>
                <span>11</span>
              </div>
              <div>
                <span>English</span>
                <span>67</span>
              </div>
              <div>
                <span>Babysitting</span>
                <span>20</span>
              </div>
              <div>
                <span>Spanish</span>
                <span>72</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
