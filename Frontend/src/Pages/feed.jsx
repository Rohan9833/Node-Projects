import React, { useEffect, useState } from "react";
import axios from "axios";
import "./feed.scss";
import { gsap } from "gsap";
import { useRef } from "react";

// import { Navigate, useNavigate } from 'react-router-dom';

function feed() {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      caption: "Beautiful Scenery",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:4000/get-post").then((res) => {
      console.log(res.data.display);

      setPosts(res.data.display);
    });
  }, []);

  //Button jsx

  return (
    <>
      <div
        style={{
          margin: "50px auto",
          display: "grid",
          gridTemplateColumns: "repeat(    1fr)",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {posts.map((post) => (
          <div
            key={post._id}
            style={{
              background: "#fff",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 0 5px rgba(0,0,0,0.2",
            }}
          >
            <img
              src={post.image}
              width={"100%"}
              style={{ borderRadius: "6px" }}
            />
            <div className="desc">
              <p style={{ marginTop: "8px", display: "inline" }}>
                {post.caption}
              </p>
              <button
                class="btn-love"
                onClick={(e) => {
                  const btn = e.currentTarget;

                  if (!btn.classList.contains("act")) {
                    btn.classList.add("act");

                    gsap.set(btn.querySelectorAll(".circle, .small-ornament"), {
                      rotation: 0,
                      scale: 0,
                    });

                    gsap.set(btn.querySelectorAll(".ornament"), {
                      opacity: 0,
                      scale: 1,
                    });

                    let tl = gsap.timeline();

                    tl.to(btn.querySelector(".fa"), {
                      duration: 0.1,
                      scale: 0,
                    });

                    tl.to(btn.querySelector(".circle"), {
                      duration: 0.2,
                      scale: 1.2,
                      opacity: 1,
                    });

                    tl.to(btn.querySelector(".fa"), {
                      duration: 0.2,
                      delay: 0.1,
                      scale: 1.3,
                      color: "#e3274d",
                    });

                    tl.to(btn.querySelector(".fa"), {
                      duration: 0.2,
                      scale: 1,
                    });

                    // Eclipse stroke animation
                    gsap
                      .timeline({ delay: 0.1 })
                      .to(btn.querySelector("#eclipse"), {
                        duration: 0.2,
                        strokeWidth: 10,
                      })
                      .to(btn.querySelector("#eclipse"), {
                        duration: 0.2,
                        strokeWidth: 0,
                      });

                    // Small ornament animation
                    gsap
                      .timeline({ delay: 0.1 })
                      .to(btn.querySelector(".small-ornament"), {
                        duration: 0.3,
                        scale: 0.8,
                        opacity: 1,
                      })
                      .to(btn.querySelector(".small-ornament"), {
                        duration: 0.2,
                        scale: 1.2,
                        opacity: 1,
                        rotation: 15,
                      });

                    // Ornament burst
                    gsap
                      .timeline({ delay: 0.3 })
                      .to(btn.querySelectorAll(".ornament"), {
                        duration: 0.2,
                        opacity: 1,
                      })
                      .to(btn.querySelectorAll(".ornament"), {
                        duration: 0.1,
                        scale: 0,
                      });
                  } else {
                    btn.classList.remove("act");

                    gsap.set(btn.querySelector(".fa"), {
                      color: "#c0c1c3",
                    });
                  }
                }}
              >
                <span class="fa fa-heart"></span>
                <div class="small-ornament">
                  <div class="ornament o-1"></div>
                  <div class="ornament o-2"></div>
                  <div class="ornament o-3"></div>
                  <div class="ornament o-4"></div>
                  <div class="ornament o-5"></div>
                  <div class="ornament o-6"></div>
                </div>
                <div class="circle" style={{display:"inline"}}>
                  <svg>
                    <ellipse
                      id="eclipse"
                      rx="50"
                      ry="50"
                      cx="67.5"
                      cy="67.5"
                      fill-opacity="1"
                      stroke-linecap=""
                      stroke-dashoffset=""
                      fill="transparent"
                      stroke-dasharray=""
                      stroke-opacity="1"
                      stroke-width="0"
                      stroke="#988ADE"
                    ></ellipse>
                  </svg>
                </div>
                <p style={{display:"inline"}}>55</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default feed;
