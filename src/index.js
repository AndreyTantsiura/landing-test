const arrImg = [
  {
    img: './img/daniel-leone.jpg',
    title: 'Kilimanjaro',
    describe:
      'Kilimanjaro is the fourth most topographically prominent peak on Earth. It is part of Kilimanjaro National Park and is a major hiking and climbing destination. Because of its shrinking glaciers and ice fields, which are projected to disappear between 2025 and 2035, it has been the subject of many scientific studies.',
    id: '1'
  },
  {
    img: './img/dirk-von-loen.jpg',
    title: 'Svitiaz Lake',
    describe:
      'Svitiaz belongs to groups of Shatsks lakes, which are located in Polissya (Volyn region) in the utmost north-western corner of Ukraine, close to the borders with Poland and Belarus. The lake is part of Shatsky National Natural Park (Shatsk Raion, Volyn Oblast). In the middle of the lake there is an island of 7 hectares in size. The lake occupies an area of 25.2 km², the average depth is 6.9 m., the transparency of water to 8 m.',
    id: '2'
  },
  {
    img: './img/greg-jurgajtis.jpg',
    title: 'Lofoten',
    describe:
      'Lofoten has distinctive scenery with dramatic mountains and peaks, open sea and sheltered bays, beaches and untouched lands. There are two towns, Svolvær and Leknes – the latter is approximately 169 km (105 mi) north of the Arctic Circle and approximately 2,420 km (1,500 mi) away from the North Pole.',
    id: '3'
  },
  {
    img: './img/marc-pell.jpg',
    title: 'Carpathian Mountains',
    describe:
      'Roughly 1,500 km (930 mi) long, it is the third-longest European mountain range after the Urals at 2,500 km (1,600 mi) and the Scandinavian Mountains at 1,700 km (1,100 mi). The range stretches from the far eastern Czech Republic (3%) and Austria (1%) in the northwest through Slovakia (21%), Poland (10%), Ukraine (10%), Romania (50%) to Serbia (5%) in the south.',
    id: '4'
  },
  {
    img: './img/tom-winckels.jpg',
    title: 'Surtsey',
    describe:
      'At 63.303°N 20.605°WCoordinates: 63.303°N 20.605°W Surtsey is the southernmost point of Iceland.[1] It was formed in a volcanic eruption which began 130 metres (430 feet) below sea level, and reached the surface on 14 November 1963. The eruption lasted until 5 June 1967, when the island reached its maximum size of 2.7 km2 (1.0 sq mi). Since then, wave erosion has caused the island to steadily diminish in size: as of 2012, its surface area was 1.3 km2 (0.50 sq mi).',
    id: '5'
  }
];
const header = document.querySelector('.header');
const buttonPrev = document.querySelector('.button_prev');
const buttonNext = document.querySelector('.button_next');
const counterCurrent = document.querySelector('.counter_current');
const headerTitle = document.querySelector('.header_title > h1');
const headerDescribe = document.querySelector('.header_title > p');
let currentIndex = 0;

buttonPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + arrImg.length) % arrImg.length;
  header.style.backgroundImage = `linear-gradient(to bottom, rgb(51, 51, 51, 0.3), rgb(51, 51, 51)), url(${arrImg[currentIndex].img})`;
  headerTitle.textContent = `${arrImg[currentIndex].title}`;
  headerDescribe.textContent = `${arrImg[currentIndex].describe}`;
  counterCurrent.textContent = `${arrImg[currentIndex].id}`;
});

buttonNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % arrImg.length;
  header.style.backgroundImage = `linear-gradient(to bottom, rgb(51, 51, 51, 0.3), rgb(51, 51, 51)), url(${arrImg[currentIndex].img})`;
  headerTitle.textContent = `${arrImg[currentIndex].title}`;
  headerDescribe.textContent = `${arrImg[currentIndex].describe}`;
  counterCurrent.textContent = `${arrImg[currentIndex].id}`;
});
