
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/static/assets/vendor/bootstrap/css/bootstrap.min.css',
    '@/static/assets/vendor/icofont/icofont.min.css',
    '@/static/assets/vendor/boxicons/css/boxicons.min.css',
    '@/static/assets/vendor/venobox/venobox.css',
    '@/static/assets/vendor/owl.carousel/assets/owl.carousel.min.css',
    '@/static/assets/css/style.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    //
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    //
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    //
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  script: [
    '~/static/assets/vendor/jquery/jquery.min.js',
    '~/static/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
    '~/static/assets/vendor/jquery.easing/jquery.easing.min.js',
    '~/static/assets/vendor/waypoints/jquery.waypoints.min.js',
    '~/static/assets/vendor/counterup/counterup.min.js',
    '~/static/assets/vendor/isotope-layout/isotope.pkgd.min.js',
    '~/static/assets/vendor/venobox/venobox.min.js',
    '~/static/assets/vendor/owl.carousel/owl.carousel.min.js',
    '~/static/assets/js/main.js',
  ]
}
