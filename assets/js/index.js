$(function(){
  let messengerIcon = document.querySelector('.messengers_icon')
  setInterval(() => {
      messengerIcon.classList.toggle('messenger_active')
  }, 2500)
});

var swiper = new Swiper(".swiper1", {
  loop: true,
  effect: "cards",
  grabCursor: true,
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
  },
});

var swiper2 = new Swiper(".swiper2", {
  loop: true,
  effect: "cards",
  grabCursor: true,
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
  },
});

var hotelLink = document.querySelector('#hotel-link')
var hotelLinkHeader = document.querySelector('#hotel-link-header')
var detailLink = document.querySelector('#detail-link')
var detailLinkHeader = document.querySelector('#detail-link-header')
var connect = document.querySelector('#connect-link')
var doingLink = document.querySelector('#doing-link')
var doingLinkHeader = document.querySelector('#doing-link-header')
doingLink.addEventListener('click', () => {
  smoothScrollHostel('doing');
})
doingLinkHeader.addEventListener('click', () => {
  smoothScrollHostel('doing');
})
hotelLink.addEventListener('click', () => {
  smoothScrollHostel('hotel');
})
hotelLinkHeader
.addEventListener('click', () => {
  smoothScrollHostel('hotel');
})
detailLink.addEventListener('click', () => {
  smoothScrollHostel('detail');
})
detailLinkHeader.addEventListener('click', () => {
  smoothScrollHostel('detail');
})
connect.addEventListener('click', () => {
  smoothScrollHostel('connect');
})

function smoothScrollHostel(event) {
  document.querySelector(`#${event}`).scrollIntoView({
    behavior: 'smooth'
  });
}

function show_answer() {
  if (event.target.classList.contains('risk_header')){
      let a = event.target.parentNode;
      a.querySelector('.risk_answer').classList.toggle('show');
      if (a.querySelector('.risk_answer').classList.contains('show')){
          let arrow = event.target.querySelector('.risk_header_arrow div')
          arrow.style.transform = "rotate(90deg)"
          arrow.style.marginLeft = "2px"
      }else{
          let arrow = event.target.querySelector('.risk_header_arrow div')
          arrow.style.transform = "rotate(-90deg)"
      }
  }else{
      let a = event.target.parentNode.parentNode;
      a.querySelector('.risk_answer').classList.toggle('show');
      if (a.querySelector('.risk_answer').classList.contains('show')){
          let arrow = event.target.parentNode.querySelector('.risk_header_arrow div')
          arrow.style.transform = "rotate(90deg)"
      }else{
          let arrow = event.target.parentNode.querySelector('.risk_header_arrow div')
          arrow.style.transform = "rotate(-90deg)"
      }
  }
}

function showModal() {
  event.preventDefault()
  var modal = document.querySelector('.modal')
  modal.classList.toggle('showmodal');
}

function modal(){
  let e = event.target
  if (e.classList.contains('modal')){
      var modal = document.querySelector('.modal')
      modal.classList.toggle('showmodal');
  }
}


async function sendForm() {
  event.preventDefault()
  let name = document.querySelector('#name2').value
  let phone = document.querySelector('#phone2').value
  if (event.target.classList.contains('button_form') || event.target.parentNode.classList.contains('button_form')){
      name = document.querySelector('#name').value
      phone = document.querySelector('#phone').value
  }
  else{
      var modal = document.querySelector('.modal')
      modal.classList.toggle('showmodal');
  }
  if (name == "" || phone == ""){
      let s = document.querySelector('.error')
      s.style.top = '10px'
      setTimeout(() => {
          s.style.top = '-110px'
      }, 1500);
  }else{
      let s = document.querySelector('.success')
      s.style.top = '10px'
      setTimeout(() => {
          s.style.top = '-110px'
      }, 1500);
        fetch('https://api.telegram.org/bot2048192618:AAETES1TloB-FYuEqwXQVZTcMCQoQPA1dNg/sendMessage', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ chat_id: 468440854, text: `${name} \n ${phone}` })
        })
        .then(res => {
          if(res.status == 200) {
              document.querySelector('#name').value = ""
              document.querySelector('#phone').value = ""
              document.querySelector('#name2').value = ""
              document.querySelector('#phone2').value = ""
          }
        })
  }
}