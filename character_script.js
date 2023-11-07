var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./img/00001.png
     ./img/00002.png
     ./img/00003.png
     ./img/00004.png
     ./img/00005.png
     ./img/00006.png
     ./img/00007.png
     ./img/00008.png
     ./img/00009.png
     ./img/00010.png
     ./img/00011.png
     ./img/00012.png
     ./img/00013.png
     ./img/00014.png
     ./img/00015.png
     ./img/00016.png
     ./img/00017.png
     ./img/00018.png
     ./img/00019.png
     ./img/00020.png
     ./img/00021.png
     ./img/00022.png
     ./img/00023.png
     ./img/00024.png
     ./img/00025.png
     ./img/00026.png
     ./img/00027.png
     ./img/00028.png
     ./img/00029.png
     ./img/00030.png
     ./img/00031.png
     ./img/00032.png
     ./img/00033.png
     ./img/00034.png
     ./img/00035.png
     ./img/00036.png
     ./img/00037.png
     ./img/00038.png
     ./img/00039.png
     ./img/00040.png
     ./img/00041.png
     ./img/00042.png
     ./img/00043.png
     ./img/00044.png
     ./img/00045.png
     ./img/00046.png
     ./img/00047.png
     ./img/00048.png
     ./img/00049.png
     ./img/00050.png
     ./img/00051.png
     ./img/00052.png
     ./img/00053.png
     ./img/00054.png
     ./img/00055.png
     ./img/00056.png
     ./img/00057.png
     ./img/00058.png
     ./img/00059.png
     ./img/00060.png
     ./img/00061.png
     ./img/00062.png
     ./img/00063.png
     ./img/00064.png
     ./img/00065.png
     ./img/00066.png
     ./img/00067.png
     ./img/00068.png
     ./img/00069.png
     ./img/00070.png
     ./img/00071.png
     ./img/00072.png
     ./img/00073.png
     ./img/00074.png
     ./img/00075.png
     ./img/00076.png
     ./img/00077.png
     ./img/00078.png
     ./img/00079.png
     ./img/00080.png
     ./img/00081.png
     ./img/00082.png
     ./img/00083.png
     ./img/00084.png
     ./img/00085.png
     ./img/00086.png
     ./img/00087.png
     ./img/00088.png
     ./img/00089.png
     ./img/00090.png
 `;
  return data.split("\n")[index];
}

const frameCount = 90;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / (img.width * 1.1);
  var vRatio = canvas.height / (img.height * 1.1);
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page4", {
  scrollTrigger: {
    trigger: `#page4`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
