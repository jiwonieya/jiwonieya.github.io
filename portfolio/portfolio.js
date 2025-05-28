const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const imgList = document.querySelector(".img-list");
const imgSlide = document.querySelector(".img-slide");
const totalImgs = imgList.children.length;
const imgWidth = 480;
let currentImg = 0;

let autoSlide = null;
let isAutoSliding = false;

// 텍스트 요소들 선택
const h4_1 = document.querySelector(".small>h4:first-child");
const h4_2 = document.querySelector(".small>h4:last-child");
const h1 = document.querySelector("h1");
const h2 = document.querySelector(".explain>h2");
const h4_3 = document.querySelector(".explain>h4");

// 이미지별 문구 데이터
const textData = [
    {
        h4_1: "HELLO",
        h4_2: "I'm",
        h1: "JIWON",
        h2: "ABOUT ME!",
        h4_3: "PORTFOLIO"
    },
    {
        h4_1: "JIWON",
        h4_2: "'S",
        h1: "FAVORITE",
        h2: "BOOK",
        h4_3: "조용한 공간에서 책 읽는 것을 좋아해요"
    },
    {
        h4_1: "JIWON",
        h4_2: "'S",
        h1: "MBTI",
        h2: "INFJ-A",
        h4_3: "깊이 있는 시선으로 사람과 세상을 바라보아요"
    },
    {
        h4_1: "JIWON",
        h4_2: "'S",
        h1: "ROUTINE",
        h2: "DRINK TEA",
        h4_3: "아침에 한 잔, 그리고 애프터눈티를 꼭 마셔요!"
    },
    {
        h4_1: "JIWON",
        h4_2: "'S",
        h1: "TO BE",
        h2: "BRAND WD",
        h4_3: "창의적으로 나의 색을 넣어 표현해내는 웹디자이너"
    },
    {
        h4_1: "JIWON",
        h4_2: "'S",
        h1: "SKILL",
        h2: "LICENSE",
        h4_3: "GTQ GTQi GTQid"
    }
];

function updateSlide() {
    imgList.style.transform = `translateX(${-imgWidth * currentImg}px)`;
    const current = textData[currentImg];

    h4_1.textContent = current.h4_1;
    h4_2.textContent = current.h4_2;
    h1.textContent = current.h1;
    h2.textContent = current.h2;
    h4_3.textContent = current.h4_3;
}

function stopAutoSlide() {
    if (isAutoSliding) {
        clearInterval(autoSlide);
        isAutoSliding = false;
    }
}

nextBtn.addEventListener("click", () => {
    if (currentImg < totalImgs - 1) {
        currentImg++;
        stopAutoSlide(); // 자동 슬라이드 멈추기
        updateSlide();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentImg > 0) {
        currentImg--;
        stopAutoSlide(); // 자동 슬라이드 멈추기
        updateSlide();
    }
});

imgSlide.addEventListener("click", () => {
    if (!isAutoSliding) {
        autoSlide = setInterval(() => {
            if (currentImg < totalImgs - 1) {
                currentImg++;
                updateSlide();
            } else {
                stopAutoSlide(); // 마지막에 도달하면 멈춤
            }
        }, 3000);
        isAutoSliding = true;
    } else {
        stopAutoSlide();
    }
});

// 초기 상태 반영
updateSlide();