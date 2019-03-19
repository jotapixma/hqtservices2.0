
const NotFound = { template: '<p> Page not found</p>'}
const Home = {name:'Home',
template: //html
`
<section class='hq-services-home' id='home'>

<section class='smart-info'>
<div class='container'>
<div class='text-panel'>
<p>We are a U.S. company dedicated to provide quick and efficient solutions to the requirements of our customers, and specialized in the sales and technical support of new and used heavy equipment, for the oil, mining, construction, maintenance, transport and industrial sectors, it is formed by a multidisciplinary team of qualified and certified professionals.</p>
</div>
</div>
</section>

<section class="hqt-info">
<div class="container">

<h3 class="title">Machinery and professional equipment</h3>
<div class="row gallery-panel">
<div class="hqt-item">
<div class="img">
<img class="img-fluid" src="assets/images/PalfingerII.jpeg" alt="">
</div>
</div>
<div class="hqt-item">
<div class="img">
<img class="img-fluid" src="assets/images/IMG_0998.JPG" alt="">
</div>
</div>
<div class="hqt-item">
<div class="img">
<img class="img-fluid" src="assets/images/WA600-8-loading.jpg" alt="">
</div>
</div>
<div class="hqt-item">
<div class="img">
<img class="img-fluid" src="assets/images/komatsu-wa600.jpg" alt="">
</div>
</div>
<div class="hqt-item">
<div class="img">
<img class="img-fluid" src="assets/images/parts-grua.jpg" alt="">
</div>
</div>
<div class="hqt-item">
<div class="img">
<img class="img-fluid" src="assets/images/servicio-tecnico.jpg" alt="">
</div>
</div>

</div>
<div class="text-center">
<router-link to="/gallery" class="btn btn-dark btn-caterpilar">Ver Galeria</router-link>
</div>
</div>

</section>

<section class='partners'>
<div class='container'>
<h3 class='title text-center pt-4'>Our brands</h3>
</div>
<div class="container">
<div class="brand-slider">
<div class="brand-item" v-for= "brand in brands">
<div class='img'>
<img class='img-fluid' :src='brand.img'>
</div>
</div>
</div>
</div>
</section>

</section>

`,
  data() {
    return {
      brands: [
        {img: 'assets/images/Komatsu-logo.png'},
        {img: 'assets/images/tb-woods-logo.jpg'},
        {img: 'assets/images/terex-logo.png'},
        {img: 'assets/images/palfinger-logo-700x263.png'},
        {img: 'assets/images/new-holland-logo.jpg'},
        
        {img: 'assets/images/kana-logo.png'},
        {img: 'assets/images/logo-potain.jpg'},
        {img: 'assets/images/Baldwin Logo.gif'},
        {img: 'assets/images/cummins-vector-logo.png'},
        {img: 'assets/images/detroit-logo.png'},
        {img: 'assets/images/deutz-logo.jpg'},
        {img: 'assets/images/National-Crane-Logo-New.jpg'},
        {img: 'assets/images/Link-Belt-logo.jpg'},
        {img: 'assets/images/Donaldson-logo.jpg'},
        {img: 'assets/images/Genie-Logo.jpg'},
        {img: 'assets/images/fleetguard-logo.png'},
        {img: 'assets/images/JCB Logo.png'},
        {img: 'assets/images/Grove Logo.jpg'},
        {img: 'assets/images/haulotte_logo.jpg'},
        {img: 'assets/images/JLG Logo.jpg'},
        {img: 'assets/images/John Deere Logo.jpg'},
        {img: 'assets/images/kana-logo.png'},
        {img: 'assets/images/Komatsu-logo.png'},
        {img: 'assets/images/Manitowoc Logo.jpg'},
        {img: 'assets/images/tejas-tubular logo.jpg'}
      ]
    }
  },
mounted(){
  console.log('mounted');
    $('.partners .brand-slider').slick({
      // centerMode: true,
      // centerPadding: '90px',
      
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      // adaptiveHeight: true,
      // arrows: true,
      responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          // centerMode: true,
          // centerPadding: '80px',
          slidesToShow: 1
        }
      }
      ]
    });
},

 }
const About = {template: //html
`
<div class='about-us'>
      <div class='d-flex title-panel'>
        <div class='col-lg-4 left-side'>
          <h3 class='title'>About us</h3>
        </div>
        <div class='col-lg-8 right-side'>
          <div class='bg-icon d-flex align-items-center'>
            <div class='icon'>
              <img class='img-fluid' src='assets/images/punto-Q.png'>
            </div>
          </div>
        </div>
      </div>
      <section class='header-panel'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-7 left-side'>
              <div class='panel-hq'>
                <div class='img'>
                  <img class='img-fluid' src='assets/images/4.png'>
                </div>
              </div>
            </div>
            <div class='col-lg-5 right-side'>
              <h6>
                We are a U.S. company dedicated to provide quick and efficient solutions to the requirements of our customers, and specialized in the sales and technical support of new and used heavy equipment, for the oil, mining, construction, maintenance, transport and industrial sectors, it is formed by a multidisciplinary team of qualified and certified professionals. Our main purpose is to serve our distinguished customers, to deliver value to them by offering comprehensive solutions to their requirements related to industrial and heavy equipment, and in this way, help them achieve higher levels of productivity, efficiency, and hence, generate more wealth.
                <div class='pt-3'>It is also important for us to contribute to the personal and professional development of the employees of our organization, to establish long term relationships with our commercial allies and to promote and implement sustainable development initiatives, with the end of leaving a better planet to the future generations.</div>
                <div class='pt-3'>Our vision is to become one of the most useful and valuable commercial allies for our customers in the Americas and the Caribbean, and to turn into one of the most attractive organizations for the talent looking for a constant professional and personal growth.</div>
              </h6>
            </div>
          </div>
        </div>
      </section>
      
      <section class='info-panel'>
        <div class="container">
          <div class='d-flex flex-wrap'>
            <div class='col-lg-3 col-md-6'>
              <div class='icon'>
                <i class='fas fa-balance-scale'></i>
              </div>
              <h3>Integrity</h3>
              <p>One of the most important virtues, that both persons and organizations must practice, It keeps us honest with ourselves and our peers, It helps us to have complete transparency in our processes and negotiations.</p>
            </div>
            <div class='col-lg-3 col-md-6'>
              <div class='icon'>
                <i class='far fa-handshake'></i>
              </div>
              <h3>Responsibility</h3>
              <p>In the fulfillment of our commitments with the stakeholders, in the following priority order:</p>
              <ul>
                <li>Customers</li>
                <li>Employees</li>
                <li>Suppliers</li>
                <li>Shareholders</li>
              </ul>
            </div>
            <div class='col-lg-3 col-md-6'>
              <div class='icon'>
                <i class='fas fa-dice-d20'></i>
              </div>
              <h3>Passion</h3>
              <p>For what we do, for serving and being useful to society, It is the value that motivates and drives us to grow and innovate continuously, with positive attitude and joy.</p>
            </div>
            <div class='col-lg-3 col-md-6'>
              <div class='icon'>
                <i class='far fa-clipboard'></i>
              </div>
              <h3>Discipline</h3>
              <p>Fundamental value to achieve our goals and objectives.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
`
}
const Services = { name:'Services',
template: //html
`
<section class='services'>
      <div class='d-flex title-panel'>
        <div class='col-lg-4 left-side'>
          <h3 class='title'>Services</h3>
        </div>
        <div class='col-lg-8 right-side'>
          <div class='bg-icon d-flex align-items-center'>
            <div class='icon'>
              <img class='img-fluid' src='assets/images/punto-Q.png'>
            </div>
          </div>
        </div>
      </div>
      <div class='container-fluid'>
        <div class='row panel-1'>
          <div class='col-lg-6 col-md-6 left-side d-flex align-items-center justify-content-center order-lg-1 order-1'>
            <h6>Parts</h6>
          </div>
          <div class='col-lg-6 col-md-6 right-side order-lg-2 order-2'>
            <div class='img'>
              <img class='img-fluid' src='assets/images/parts-grua.jpg'>
            </div>
          </div>
          <div class='col-lg-6 col-md-6 right-side order-lg-3 order-4'>
            <div class='img crane'>
              <img class='img-fluid' src='assets/images/Grove-crane-telescopic-GMK6400.jpg'>
            </div>
          </div>
          <div class='col-lg-6 col-md-6 left-side d-flex align-items-center justify-content-center order-lg-4 order-3'>
            <h6>Equipment</h6>
          </div>
          <div class='col-lg-6 col-md-6 left-side d-flex align-items-center justify-content-center order-lg-6 order-5'>
            <h6>Technical service</h6>
          </div>
          <div class='col-lg-6 col-md-6 right-side order-lg-7 order-6'>
            <div class='img-1 d-none d-lg-block'>
              <img class='img-fluid' src='assets/images/servicio-tecnico-2.png'>
            </div>
            <div class='img-2 d-lg-none'>
                <img class='img-fluid' src='assets/images/services.jpg'>
              </div>
          </div>
          <div class='col-lg-6 col-md-6 right-side order-lg-8 order-9'>
            <div class='img'>
              <img class='img-fluid' src='assets/images/consultora-comercial.jpg'>
            </div>
          </div>
          <div class='col-lg-6 col-md-6 left-side d-flex align-items-center justify-content-center order-lg-9 order-8'>
            <h6>Consulting</h6>
          </div>
        </div>
      </div>

         <div class='row info-panel'>
          <div class='col-lg-6 col-md-6 col-12'>
            <div class='row item-service'>
              <div class='col-lg-2'>
                <div class='icon-service'>
                  <img class='img-fluid' src='assets/images/hoja.png'>
                </div>
              </div>
              <div class='col-lg-10'>
                <h6>Parts</h6>
                <p>Genuine or aftermarket parts that guarantee the correct operation of your equipment.</p>
              </div>
            </div>
          </div>
          <div class='col-lg-6 col-md-6 col-12'>
            <div class='row item-service'>
              <div class='col-lg-2'>
                <div class='icon-service'>
                  <img class='img-fluid' src='assets/images/edge.png'>
                </div>
              </div>
              <div class='col-lg-10'>
                <h6>Equipment</h6>
                <p>New and used machines from world class manufacturers, with the best warranty.</p>
              </div>
            </div>
          </div>
          <div class='col-lg-6 col-md-6 col-12'>
            <div class='row item-service'>
              <div class='col-lg-2'>
                <div class='icon-service'>
                  <img class='img-fluid' src='assets/images/herramienta.png'>
                </div>
              </div>
              <div class='col-lg-10'>
                <h6>Technical service</h6>
                <p>With qualified technicians to carry out preventive or corrective maintenance to your machines.</p>
              </div>
            </div>
          </div>
          <div class='col-lg-6 col-md-6 col-12'>
            <div class='row item-service'>
              <div class='col-lg-2'>
                <div class='icon-service'>
                  <img class='img-fluid' src='assets/images/map.png'>
                </div>
              </div>
              <div class='col-lg-10'>
                <h6>Consulting</h6>
                <p>To select equipment according to the application. To elaborate recommended parts lists to have in stock.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
`
}
const Gallery = { 
  name:'Gallery',
  template: //html
`
<section class='gallery'>
      <div class='d-flex title-panel'>
        <div class='col-lg-4 left-side'>
          <h3 class='title'>Gallery</h3>
        </div>
        <div class='col-lg-8 right-side'>
          <div class='bg-icon d-flex align-items-center'>
            <div class='icon'>
              <img class='img-fluid' src='/assets/images/punto-Q.png'>
            </div>
          </div>
        </div>
      </div>
      
      <div class="container">
        <div class='hq-carousel'>
          <div class='gallery-slider'>
            <div class='carousel-item' v-for="image in images">
              <div class='img'>
                <img class='img-fluid' :src='image.img'>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class='container-fluid'>
        <div class='row gallery-bg-black justify-content-center'>
          <div class=' col-xl-3 col-lg-4 col-md-4 col-5'>
            <div class='circle' style='background-image:url(assets/images/IMG_0998.JPG)'></div>
          </div>
          <div class=' col-xl-3 col-lg-4 col-md-4 col-5'>
            <div class='circle' style='background-image:url(assets/images/Potain.jpg'></div>
          </div>
          <div class=' col-xl-3 col-lg-4 col-md-4 col-5'>
            <div class='circle' style='background-image:url(assets/images/jlg-e400ajp.jpg'></div>
          </div>
          <div class=' col-xl-3 col-lg-4 col-md-4 col-5'>
            <div class='circle' style='background-image:url(assets/images/John-Deere.jpg'></div>
          </div>
          <div class=' col-xl-3 col-lg-4 col-md-4 col-5'>
            <div class='circle' style='background-image:url(assets/images/komatsu-wa600.jpg'></div>
          </div>
          <div class=' col-xl-3 col-lg-4 col-md-4 col-5'>
            <div class='circle' style='background-image:url(assets/images/Palfinger.jpg'></div>
          </div>
          <div class=' col-xl-3 col-lg-4 col-md-4 col-5'>
            <div class='circle' style='background-image:url(assets/images/WA600-8-loading.jpg'></div>
          </div>
          <div class=' col-xl-3 col-lg-4 col-md-4 col-5'>
            <div class='circle' style='background-image:url(assets/images/national-crane.jpg'></div>
          </div>
        </div>
      </div>
    </section>
`,
data(){

  return {
    images: [
      {img: 'assets/images/Palfinger.jpg'},
      {img: 'assets/images/IMG_0998.JPG'},
      {img: 'assets/images/Power plant construction site.jpg'},
      {img: 'assets/images/jlg-e400ajp.jpg'},
      {img: 'assets/images/Potain.jpg'},
      {img: 'assets/images/John-Deere.jpg'},
      {img: 'assets/images/PalfingerII.jpeg'},
      {img: 'assets/images/komatsu-wa600.jpg'},
      {img: 'assets/images/WA600-8-loading.jpg'},
      {img: 'assets/images/Manitowoc-crane.jpg'},

    ]
  }
},
mounted(){
  console.log('mounted');
    $('.hq-carousel .gallery-slider').slick({
      // centerMode: true,
      // centerPadding: '40px',
      
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      // adaptiveHeight: true,
      // arrows: true,
      responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 1
        }
      }
      ]
    });
}

}
const Contact = { template: //html
`
<section class='contact'>
      <div class='d-flex title-panel'>
        <div class='col-lg-4 left-side'>
          <h3 class='title'>Contact</h3>
        </div>
        <div class='col-lg-8 right-side'>
          <div class='bg-icon d-flex align-items-center'>
            <div class='icon'>
              <img class='img-fluid' src='assets/images/punto-Q.png'>
            </div>
          </div>
        </div>
      </div>
      <div class='container'>
        <div class='info-contact'>
          <div class='box-contact'>
            <h6>
              Email:
              <a href='mailto:hquilarque@hqtservices.com'>
                hquilarque@hqtservices.com
              </a>
            </h6>
            <h6>
              Address:
              <span>
                6001 N Falls Circle DR. 212 Lauderhill, Florida 33319
              </span>
            </h6>
            <h6>
              Phone:
              <span>
                +58 (424) 938-5951
              </span>
            </h6>
          </div>
        </div>
      </div>
    </section>
`
}

const routes = [
  {path: '/', component: Home},
  {path: '/home', component: Home},
  {path: '/about', component: About},
  {path: '/services', component: Services},
  {path: '/gallery', component: Gallery},
  {path: '/contact', component: Contact}

]

const router = new VueRouter({
  routes //
})

const app = new Vue({
  router,
  el: "#app",
  data: {
    message: "Hola planeaata",
    images: [
      {img: 'assets/images/Palfinger.jpg'},
      {img: 'assets/images/IMG_0998.JPG'},
      {img: 'assets/images/Power plant construction site.jpg'},
      {img: 'assets/images/jlg-e400ajp.jpg'},
      {img: 'assets/images/Potain.jpg'},
      {img: 'assets/images/John-Deere.jpg'},
      {img: 'assets/images/PalfingerII.jpeg'},
      {img: 'assets/images/komatsu-wa600.jpg'},
      {img: 'assets/images/WA600-8-loading.jpg'},
      {img: 'assets/images/Manitowoc-crane.jpg'},
    ]

  },
  methods:{
    // goto(url){
    //   router.push({ path: url })
    //   $('#navbarSupportedContent').removeClass('show')
    // }
  }

}).$mount('#app') ;