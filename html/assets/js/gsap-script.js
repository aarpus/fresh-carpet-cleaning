// TextPlugin
gsap.registerPlugin(TextPlugin);

document.querySelectorAll(".rolling-text").forEach((el) => {
    const text = el.dataset.text || el.textContent.trim();

    // Setup
    el.innerHTML = "";
    const wrapper = document.createElement("span");
    wrapper.className = "text-wrapper";

    const line1 = document.createElement("span");
    line1.className = "text-line";
    line1.textContent = text;

    const line2 = document.createElement("span");
    line2.className = "text-line";
    line2.textContent = text;

    wrapper.appendChild(line1);
    wrapper.appendChild(line2);
    el.appendChild(wrapper);

    // Hover effects
    el.addEventListener("mouseenter", () => {
        gsap.to(wrapper, {
            yPercent: -50,
            duration: 0.4,
            ease: "power2.out"
        });
    });

    el.addEventListener("mouseleave", () => {
        gsap.to(wrapper, {
            yPercent: 0,
            duration: 0.4,
            ease: "power2.out"
        });
    });
});


// text-opacity-animation
document.querySelectorAll(".text-opacity-animation").forEach((el) => {
    const words = el.innerText.split(" ");
    el.innerHTML = words.map(word => `<span>${word}&nbsp;</span>`).join('');
});

document.querySelectorAll(".text-opacity-animation").forEach(el => {
    el.innerHTML = el.textContent
        .split("")
        .map(char => {
            if (char === " ") return " "; // keep spaces
            return `<span style="opacity:0.3">${char}</span>`;
        })
        .join("");
});

gsap.utils.toArray(".text-opacity-animation").forEach(el => {
    const letters = el.querySelectorAll("span");

    gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true,
            markers: false
        }
    }).to(letters, {
        opacity: 1,
        stagger: 0.05,
        ease: "power1.out",
        duration: 0.3
    });
});

// splittext-line

$(function () {
    let splitTextLines = gsap.utils.toArray(".splittext-line");
    splitTextLines.forEach((splitTextLine) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: "top 90%",
                duration: 2,
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
            },
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" });
        tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.5,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });
    });

});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

$(window).on("load", function () {
    var st = $(".poort-text");
    if (st.length == 0) return;
    gsap.registerPlugin(SplitText);
    st.each(function (index, el) {
        el.split = new SplitText(el, { type: "lines,words,chars", linesClass: "poort-line" });
        gsap.set(el, { perspective: 600 });
        if ($(el).hasClass("poort-in-right")) {
            gsap.set(el.split.chars, { opacity: 0, x: "100", ease: "Back.easeOut" });
        }
        if ($(el).hasClass("poort-in-left")) {
            gsap.set(el.split.chars, { opacity: 0, x: "-100", ease: "circ.out" });
        }
        if ($(el).hasClass("poort-in-up")) {
            gsap.set(el.split.chars, { opacity: 0, y: "80", ease: "circ.out" });
        }
        if ($(el).hasClass("poort-in-down")) {
            gsap.set(el.split.chars, { opacity: 0, y: "-80", ease: "circ.out" });
        }
        el.anim = gsap.to(el.split.chars, { scrollTrigger: { trigger: el, start: "top 90%" }, x: "0", y: "0", rotateX: "0", scale: 1, opacity: 1, duration: 0.6, stagger: 0.02 });
    });
});



/* imager scroll animation */

document.addEventListener('DOMContentLoaded', function () {
    let new_class_name_elements = document.querySelectorAll(".new_img-animet");

    new_class_name_elements.forEach((new_class_name_element) => {
        let image = new_class_name_element.querySelector("img");
        if (!image) return;

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: new_class_name_element,
                start: "top 50%",
                toggleActions: "play none none none",
                markers: false
            }
        });

        tl.set(new_class_name_element, { autoAlpha: 1 });

        tl.from(new_class_name_element, {
            xPercent: -100,
            duration: 5,
            ease: "power2.out"
        });

        tl.from(image, {
            xPercent: 100,
            duration: 5,
            ease: "power2.out"
        }, "<");
    });
});

document.addEventListener("mousemove", function (e) {
    const depth = 200;
    const moveX = (e.pageX - window.innerWidth / 2) / depth;
    const moveY = (e.pageY - window.innerHeight / 2) / depth;

    // For .image-move
    const circles1 = gsap.utils.toArray(".image-move");
    circles1.forEach((circle, index) => {
        gsap.to(circle, {
            x: moveX * (index + 1),
            y: moveY * (index + 1),
            duration: 0.5,
            ease: "power2.out",
        });
    });

    // For .image-move2
    const circles2 = gsap.utils.toArray(".image-move2");
    circles2.forEach((circle, index) => {
        gsap.to(circle, {
            x: moveX * (index + 1),
            y: moveY * (index + 1),
            duration: 0.5,
            ease: "power2.out",
        });
    });
});


// wpo-transforming-left-img
const container = document.querySelector('.wpo-transforming-left-img');
const slider = document.querySelector('.slider');

if (container && slider) {
  // Set default position
  container.style.setProperty('--position', '50%');

  slider.addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
  });
}

// HoverButton

class HoverButton {
    constructor(el) {
        this.el = el;
        this.hover = false;
        this.calculatePosition();
        this.attachEventsListener();
    }

    attachEventsListener() {
        window.addEventListener('mousemove', e => this.onMouseMove(e));
        window.addEventListener('resize', e => this.calculatePosition(e));
    }

    calculatePosition() {
        gsap.set(this.el, {
            x: 0,
            y: 0,
            scale: 1
        });
        const box = this.el.getBoundingClientRect();
        this.x = box.left + (box.width * 0.5);
        this.y = box.top + (box.height * 0.5);
        this.width = box.width;
        this.height = box.height;
    }

    onMouseMove(e) {
        let hover = false;
        let hoverArea = (this.hover ? 0.7 : 0.5);
        let x = e.clientX - this.x;
        let y = e.clientY - this.y;
        let distance = Math.sqrt(x * x + y * y);
        if (distance < (this.width * hoverArea)) {
            hover = true;
            if (!this.hover) {
                this.hover = true;
            }
            this.onHover(e.clientX, e.clientY);
        }

        if (!hover && this.hover) {
            this.onLeave();
            this.hover = false;
        }
    }

    onHover(x, y) {
        gsap.to(this.el, {
            x: (x - this.x) * 0.4,
            y: (y - this.y) * 0.4,
            scale: 1.15,
            ease: 'power2.out',
            duration: 0.4
        });
        this.el.style.zIndex = 10;
    }

    onLeave() {
        gsap.to(this.el, {
            x: 0,
            y: 0,
            scale: 1,
            ease: 'elastic.out(1.2, 0.4)',
            duration: 0.7
        });
        this.el.style.zIndex = 1;
    }
}



/* btn-move */

const all_btns = gsap.utils.toArray(".btn-wrapper");
if (all_btns.length > 0) {
    var all_btn = gsap.utils.toArray(".btn-wrapper");
}
else {
    var all_btn = gsap.utils.toArray("#btn-wrapper");
}

const all_btn_cirlce = gsap.utils.toArray(".btn-move");
all_btn.forEach((btn, i) => {
    $(btn).mousemove(function (e) {
        callParallax(e);
    });
    function callParallax(e) {
        parallaxIt(e, all_btn_cirlce[i], 80);
    }

    function parallaxIt(e, target, movement) {
        var $this = $(btn);
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        gsap.to(target, 0.5, {
            x: ((relX - $this.width() / 2) / $this.width()) * movement,
            y: ((relY - $this.height() / 2) / $this.height()) * movement,
            ease: Power2.easeOut,
        });
    }
    $(btn).mouseleave(function (e) {
        gsap.to(all_btn_cirlce[i], 0.5, {
            x: 0,
            y: 0,
            ease: Power2.easeOut,
        });
    });
});

// end animation