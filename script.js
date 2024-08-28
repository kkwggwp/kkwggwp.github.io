
// Scroll-top      
const scrolltopbtn = document.getElementById('scroll-top-btn');
      
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    scrolltopbtn.style.display = 'block';
  } else {
    scrolltopbtn.style.display = 'none';
  }
});
  
scrolltopbtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Modal

const modal = document.getElementById('subsmodal');
const openmodalbtn = document.querySelectorAll('.subsbtn');
const closebtn = document.querySelector('.close-btn');
const emailInput = document.querySelector('input[type="email"]');

const openmodal = () => {
  modal.style.display = 'block';
};

const closemodal = () => {
  modal.style.display = 'none';
};

const validateEmail = (email) => {
  const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailregex.test(email);
};

openmodalbtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (validateEmail(email)) {
      openmodal();
    } else {
      alert('유효하지 않은 이메일 주소입니다');
    }          
  });
});      

closebtn.addEventListener('click', closemodal);

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// kakao map

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
// 지도타입 컨트롤의 지도 또는 스카이뷰 버튼을 클릭하면 호출되어 지도타입을 바꾸는 함수입니다
function setMapType(maptype) { 
    var roadmapControl = document.getElementById('btnRoadmap');
    var skyviewControl = document.getElementById('btnSkyview'); 
    if (maptype === 'roadmap') {
        map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);    
        roadmapControl.className = 'selected_btn';
        skyviewControl.className = 'btn';
    } else {
        map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);    
        skyviewControl.className = 'selected_btn';
        roadmapControl.className = 'btn';
    }
}

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
    map.setLevel(map.getLevel() - 1);
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomOut() {
    map.setLevel(map.getLevel() + 1);
}

// //kakao map marker

// var mapContainer = document.getElementById('kakaomap'), // 지도를 표시할 div 
//     mapOption = { 
//         center: new kakao.maps.LatLng(33.44241793094654, 126.57149784381792), // 지도의 중심좌표
//         level: 3 // 지도의 확대 레벨
//     };

// var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// // 마커가 표시될 위치입니다 
// var markerPosition  = new kakao.maps.LatLng(33.44241793094654, 126.57149784381792); 

// // 마커를 생성합니다
// var marker = new kakao.maps.Marker({
//     position: markerPosition
// });

// // 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);

// // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// // marker.setMap(null);
