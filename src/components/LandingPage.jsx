import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaCircleArrowDown } from "react-icons/fa6";

import "./animation.css";

const LandingPage = () => {
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const buttonRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    var width,
      height,
      landing,
      canvas,
      ctx,
      points,
      target,
      animateHeader = true;

    // Main
    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width / 2, y: height / 2 };
      console.log(width, height);

      landing = document.getElementById("landing");
      landing.style.height = height + "px";

      canvas = document.getElementById("demo-canvas");
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext("2d");

      // create points
      points = [];
      for (var x = 0; x < width; x = x + width / 20) {
        for (var y = 0; y < height; y = y + height / 20) {
          var px = x + (Math.random() * width) / 20;
          var py = y + (Math.random() * height) / 20;
          var p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      // Add a special point for the mouse position
      var mousePoint = { x: 0, originX: 0, y: 0, originY: 0 };
      points.push(mousePoint);

      // Update the mouse point position on mouse move
      canvas.addEventListener("mousemove", function (e) {
        mousePoint.x = e.clientX;
        mousePoint.y = e.clientY;
      });

      // for each point find the 5 closest points
      for (var i = 0; i < points.length; i++) {
        var closest = [];
        var p1 = points[i];
        for (var j = 0; j < points.length; j++) {
          var p2 = points[j];
          if (!(p1 == p2)) {
            var placed = false;
            for (var k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] == undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (var k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      // assign a circle to each point
      let condition = 0;
      for (var i in points) {
        if (condition % 2 === 0) {
          var c = new Circle1(
            points[i],
            1 + Math.random() * 1,
            "rgba(255,255,255,0.3)"
          );
        } else {
          var c = new Circle2(
            points[i],
            1 + Math.random() * 1,
            "rgba(255,255,255, 0.3)"
          );
        }
        points[i].circle = c;
        condition++;
      }
    }

    // Event handling
    function addListeners() {
      if (!("ontouchstart" in window)) {
        window.addEventListener("mousemove", mouseMove);
      }
      window.addEventListener("scroll", scrollCheck);
      window.addEventListener("resize", resize);
    }

    function mouseMove(e) {
      var posx = 0,
        posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        posy =
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
    }

    function scrollCheck() {
      if (document.body.scrollTop > height) animateHeader = false;
      else animateHeader = true;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      landing.style.height = height + "px";
      canvas.width = width;
      canvas.height = height;
    }

    // animation
    function initAnimation() {
      animate();
      for (var i in points) {
        shiftPoint(points[i]);
      }
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (var i in points) {
          // detect points in range
          if (Math.abs(getDistance(target, points[i])) < 60000) {
            points[i].active = 0.3;
            points[i].circle.active = 0.5;
          } else if (Math.abs(getDistance(target, points[i])) < 500000) {
            points[i].active = 0.02;
            points[i].circle.active = 0.3;
          } else {
            points[i].active = 0;
            points[i].circle.active = 0;
          }

          drawLines(points[i]);
          points[i].circle.draw();
        }
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
      gsap.to(p, {
        duration: 5 + 1 * Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: "sine.inOut",
        onComplete: function () {
          shiftPoint(p);
        },
      });
    }

    // Canvas manipulation
    function drawLines(p) {
      if (!p.active) return;
      for (var i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = "rgb(102, 153, 255, " + p.active + ")";
        ctx.stroke();
      }
    }

    function Circle1(pos, rad, color) {
      var _this = this;

      // constructor
      (function () {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
      })();

      this.draw = function () {
        if (!_this.active) return;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "rgba(156,217,249," + _this.active + ")";
        ctx.fill();
      };
    }

    function Circle2(pos, rad, color) {
      var _this = this;

      // constructor
      (function () {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
      })();

      this.draw = function () {
        if (!_this.active) return;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "rgb(255, 102, 0," + _this.active + ")";
        ctx.fill();
      };
    }

    // Util
    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#heading1",
      {
        x: -250,
        duration: 2,
        ease: "power1.in",
      },
      {
        x: 0,
        duration: 2,
        ease: "power1.in",
      }
    );
    gsap.fromTo(
      "#heading2",
      {
        x: 250,
        duration: 2,
        ease: "power1.in",
      },
      {
        x: 0,
        duration: 2,
        ease: "power1.in",
      }
    );
    gsap.fromTo(
      "#button",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 3,
        ease: "power2.in",
      }
    );
    gsap.fromTo(
      "#icon",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 3,
        ease: "power2.in",
      }
    );
  }, []);

  return (
    <div
      id="canvas1"
      className="flex box-border justify-center h-screen min-w-screen items-center"
    >
      <canvas
        className="z-0 box-border absolute h-screen inset-0 min-w-screen"
        id="demo-canvas"
      ></canvas>
      <div className="z-10 flex flex-col justify-center h-screen items-center">
        <h1
          ref={heading1Ref}
          id="heading1"
          className="text-red-600 leading-relaxed md:leading-relaxed font-display text-4xl md:text-6xl md:tracking-widest text-center"
        >
          Thomas Lunt
        </h1>
        <h1
          ref={heading2Ref}
          id="heading2"
          className="text-gray-200 leading-relaxed md:leading-relaxed font-display text-4xl md:text-4xl md:tracking-widest text-center"
        >
          Full Stack Developer <br />
        </h1>
        <div
          className="block justify-center font-display"
          ref={buttonRef}
          id="button"
        >
          <a
            href="#story"
            type="button"
            className="inline-block bg-black px-6 py-3 text-xl leading-relaxed font-bold border-4 border-red-600 rounded text-red-600 hover:ring-4 hover:ring-white hover:bg-opacity-20 transition duration-300 ease-in-out mt-10"
          >
            Check Out My Story
          </a>
          <div className="flex justify-center">
            <FaCircleArrowDown
              className="justify-center text-red-600 text-4xl animate-bounce mt-10"
              id="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
