const arrImg = [
  {
    img: './img/daniel-leone.jpg',
    title: 'Kilimanjaro',
    country: 'Africa ',
    info: 'Kilimanjaro is the fourth most topographically prominent peak on Earth.',
    describe:
      'Kilimanjaro is the fourth most topographically prominent peak on Earth. It is part of Kilimanjaro National Park and is a major hiking and climbing destination. Because of its shrinking glaciers and ice fields, which are projected to disappear between 2025 and 2035, it has been the subject of many scientific studies.',
    id: '1'
  },
  {
    img: './img/dirk-von-loen.jpg',
    title: 'Svitiaz Lake',
    country: 'Ukraine',
    info: 'Svitiaz belongs to groups of Shatsks lakes, which are located in Polissya.',
    describe:
      'Svitiaz belongs to groups of Shatsks lakes, which are located in Polissya (Volyn region) in the utmost north-western corner of Ukraine, close to the borders with Poland and Belarus. The lake is part of Shatsky National Natural Park (Shatsk Raion, Volyn Oblast). In the middle of the lake there is an island of 7 hectares in size. The lake occupies an area of 25.2 km², the average depth is 6.9 m., the transparency of water to 8 m.',
    id: '2'
  },
  {
    img: './img/greg-jurgajtis.jpg',
    title: 'Lofoten',
    country: 'Norway',
    info: 'Lofoten has distinctive scenery with dramatic mountains and peaks.',
    describe:
      'Lofoten has distinctive scenery with dramatic mountains and peaks, open sea and sheltered bays, beaches and untouched lands. There are two towns, Svolvær and Leknes – the latter is approximately 169 km (105 mi) north of the Arctic Circle and approximately 2,420 km (1,500 mi) away from the North Pole.',
    id: '3'
  },
  {
    img: './img/marc-pell.jpg',
    title: 'Carpathian Mountains',
    country: 'Ukraine',
    info: 'Roughly 1,500 km (930 mi) long, it is the third-longest European mountain.',
    describe:
      'Roughly 1,500 km (930 mi) long, it is the third-longest European mountain range after the Urals at 2,500 km (1,600 mi) and the Scandinavian Mountains at 1,700 km (1,100 mi). The range stretches from the far eastern Czech Republic (3%) and Austria (1%) in the northwest through Slovakia (21%), Poland (10%), Ukraine (10%), Romania (50%) to Serbia (5%) in the south.',
    id: '4'
  },
  {
    img: './img/tom-winckels.jpg',
    title: 'Surtsey',
    country: 'Iceland',
    info: 'Surtsey is the southernmost point of Iceland.',
    describe:
      'At 63.303°N 20.605°WCoordinates: 63.303°N 20.605°W Surtsey is the southernmost point of Iceland.[1] It was formed in a volcanic eruption which began 130 metres (430 feet) below sea level, and reached the surface on 14 November 1963. The eruption lasted until 5 June 1967, when the island reached its maximum size of 2.7 km2 (1.0 sq mi). Since then, wave erosion has caused the island to steadily diminish in size: as of 2012, its surface area was 1.3 km2 (0.50 sq mi).',
    id: '5'
  }
];
const header = document.querySelector('.header');
const headerButtonPrev = document.querySelector('.button_prev');
const headerButtonNext = document.querySelector('.button_next');
const counterCurrent = document.querySelector('.counter_current');
const headerTitle = document.querySelector('.header_title > h1');
const headerDescribe = document.querySelector('.header_title > p');
//render header
let currentIndex = 0;
const renderHeader = () => {
  header.style.backgroundImage = `linear-gradient(to bottom, rgb(51, 51, 51, 0.3), rgb(51, 51, 51)), url(${arrImg[currentIndex].img})`;
  headerTitle.textContent = `${arrImg[currentIndex].title}`;
  headerDescribe.textContent = `${arrImg[currentIndex].describe}`;
  counterCurrent.textContent = `${arrImg[currentIndex].id}`;
};
//render header by click previous button
headerButtonPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + arrImg.length) % arrImg.length;
  renderHeader();
});
//render header by click next button
headerButtonNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % arrImg.length;
  renderHeader();
});

const block1Img = document.querySelector('.block1_img');
const block2Img = document.querySelector('.block2_img');
const block3Img = document.querySelector('.block3_img');
const section1ButtonPrev = document.querySelector(
  '.section1_bottom .button_prev'
);
const section1ButtonNext = document.querySelector(
  '.section1_bottom .button_next'
);
const section1Title1 = document.querySelector('.content_block1 > h2');
const section1Title2 = document.querySelector('.content_block2 > h2');
const section1Title3 = document.querySelector('.content_block3 > h2');
const section1Country1 = document.querySelector('.content_block1 > h3');
const section1Country2 = document.querySelector('.content_block2 > h3');
const section1Country3 = document.querySelector('.content_block3 > h3');
const section1Info1 = document.querySelector('.content_block1 > p');
const section1Info2 = document.querySelector('.content_block2 > p');
const section1Info3 = document.querySelector('.content_block3 > p');
const section1CounterCurrent = document.querySelector(
  '.section1_bottom .counter_current'
);
//render section1
let currentIndex1 = 1;
let currentIndex2 = 2;
const renderSection1 = () => {
  block1Img.setAttribute('src', `${arrImg[currentIndex].img}`);
  block2Img.setAttribute('src', `${arrImg[currentIndex1].img}`);
  block3Img.setAttribute('src', `${arrImg[currentIndex2].img}`);
  section1Title1.textContent = `${arrImg[currentIndex].title}`;
  section1Title2.textContent = `${arrImg[currentIndex1].title}`;
  section1Title3.textContent = `${arrImg[currentIndex2].title}`;
  section1Country1.textContent = `${arrImg[currentIndex].country}`;
  section1Country2.textContent = `${arrImg[currentIndex1].country}`;
  section1Country3.textContent = `${arrImg[currentIndex2].country}`;
  section1Info1.textContent = `${arrImg[currentIndex].info}`;
  section1Info3.textContent = `${arrImg[currentIndex1].info}`;
  section1Info3.textContent = `${arrImg[currentIndex2].info}`;
  section1CounterCurrent.textContent = `${arrImg[currentIndex].id}`;
};
//render section1 by click previous button
section1ButtonPrev.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % arrImg.length;
  currentIndex1 = (currentIndex1 + 1) % arrImg.length;
  currentIndex2 = (currentIndex2 + 1) % arrImg.length;
  renderSection1();
});
//render section1 by click next button
section1ButtonNext.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + arrImg.length) % arrImg.length;
  currentIndex1 = (currentIndex1 - 1 + arrImg.length) % arrImg.length;
  currentIndex2 = (currentIndex2 - 1 + arrImg.length) % arrImg.length;
  renderSection1();
});

const image1 = document.querySelector('.image_1 img');
const image2 = document.querySelector('.image_2 img');
const image3 = document.querySelector('.image_3 img');
const image4 = document.querySelector('.image_4 img');
const image5 = document.querySelector('.image_5 img');
const section3ButtonPrev = document.querySelector(
  '.section3_bottom .button_prev'
);
const section3ButtonNext = document.querySelector(
  '.section3_bottom .button_next'
);
const section3Title = document.querySelector('.title_img > h2');
const section3Country = document.querySelector('.title_img > h3');
const section3Info = document.querySelector('.info_img > p');
const section3CounterCurrent = document.querySelector(
  '.section3_bottom .counter_current'
);

let currentIndex3 = 3;
let currentIndex4 = 4;
const renderSection3 = () => {
  image1.setAttribute('src', `${arrImg[currentIndex].img}`);
  image2.setAttribute('src', `${arrImg[currentIndex1].img}`);
  image3.setAttribute('src', `${arrImg[currentIndex2].img}`);
  image4.setAttribute('src', `${arrImg[currentIndex3].img}`);
  image5.setAttribute('src', `${arrImg[currentIndex4].img}`);
  section3Title.textContent = `${arrImg[currentIndex].title}`;
  section3Country.textContent = `${arrImg[currentIndex].country}`;
  section3Info.textContent = `${arrImg[currentIndex].info}`;
  section3CounterCurrent.textContent = `${arrImg[currentIndex].id}`;
};
//render section3 by click previous button
section3ButtonPrev.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % arrImg.length;
  currentIndex1 = (currentIndex1 + 1) % arrImg.length;
  currentIndex2 = (currentIndex2 + 1) % arrImg.length;
  currentIndex3 = (currentIndex3 + 1) % arrImg.length;
  currentIndex4 = (currentIndex4 + 1) % arrImg.length;
  renderSection3();
});
//render section3 by click next button
section3ButtonNext.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + arrImg.length) % arrImg.length;
  currentIndex1 = (currentIndex1 - 1 + arrImg.length) % arrImg.length;
  currentIndex2 = (currentIndex2 - 1 + arrImg.length) % arrImg.length;
  currentIndex3 = (currentIndex3 - 1 + arrImg.length) % arrImg.length;
  currentIndex4 = (currentIndex4 - 1 + arrImg.length) % arrImg.length;
  renderSection3();
});
