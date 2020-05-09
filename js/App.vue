<template>
  <div class="reveal" id="app">
    <div class="slides">
      <section class="intro" data-background-video="images/intro.mp4"
                             data-background-color="#000"
                             data-background-video-muted
                             data-background-video-loop>
        <div class="title">
          <img style="margin-top: 7em;" src="images/cameo_price_is_right.png" />
        </div>
      </section>
      <section class="intro" data-background-video="images/intro.mp4"
                             data-background-color="#000"
                             data-background-video-muted
                             data-background-video-loop>
        <h1>The Price Is Right</h1>
      </section>
      <section data-background-image="images/cameo_front_page.png">
      </section>
      <section data-background-video="images/john_goblikon.mp4"
               data-background-color="#000">
        <h1>COVID-19</h1>
      </section>
      <section>
        <h3 class="fragment">Celebrity</h3>
        <h3 class="fragment">Video Intro</h3>
        <h3 class="fragment">Guess the Rate</h3>
        <h3 class="fragment">Price Is Right Rules</h3>
        <h3 class="fragment">TP for Winner!</h3>
        <h1>Gameplay</h1>
      </section>
      <add-player-card></add-player-card>
      <round celebrity="Sean Astin"
             hint1="The Shire"
             hint2="Intensely Loyal"
             hint3="Not Great At Football"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-s45CjnGa5.mp4"
             price="295"
             image="https://i.ytimg.com/vi/uhAPUf-w64o/maxresdefault.jpg"></round>
      <add-player-card></add-player-card>
      <round celebrity="Chris Hansen"
             hint1="Big Hero For Rob"
             hint2="Journalist"
             hint3="Least Welcome Camera"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-CvmPLQMEJs.mp4"
             price="50"
             image="https://media.tegna-media.com/assets/WTIC/images/d40d6a85-c327-4dd7-ac02-c38514293aed/d40d6a85-c327-4dd7-ac02-c38514293aed_1920x1080.jpg"></round>
      <add-player-card></add-player-card>
      <round celebrity="Ernie Hudson"
             hint1="Killer Stache"
             hint2="Twinkie"
             hint3="Who You Gonna Call?"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-5FZ-qSWcNh6.mp4"
             price="135"
             image="https://deadentertainment.com/uploads/ernie-hudson-confirms-involvement-in-new-ghostbusters-sequel-jason-reitman-winston-zeddemore-13ys150187.png"></round>
      <add-player-card></add-player-card>
      <round celebrity="Johnny Damon"
             hint1="Baseball Jesus"
             hint2="2 Critical At-Bats"
             hint3="Traitor"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-Z-NjAA9e4P.mp4"
             price="100"
             image="https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fbosoxinjection.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F51523062-850x560.jpeg"></round>
      <add-player-card></add-player-card>
      <round celebrity="Steve Guttenberg"
             hint1="Archetypical 80s Lead Man"
             hint2="Cop"
             hint3="Roboticist"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-CfPXn8TkK7.mp4"
             price="150"
             image="https://doomrocket.com/wp-content/uploads/2014/11/short_circuit_still_04_8x10.jpg"></round>
      <add-player-card></add-player-card>
      <round celebrity="Gary Busey"
             hint1="Lethal Bad Guy"
             hint2="Taxi Driver"
             hint3="Certifiably Crazy"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-5o70bpxoE.mp4"
             price="350"
             image="https://cdn2.newsok.biz/cache/w620-82984c26d6d75dbc514b6fe25a0ccc29.jpg"></round>
      <add-player-card></add-player-card>
      <round celebrity="Anthony Michael Hall"
             hint1="SNL Alum"
             hint2="Early Programmer"
             hint3="John Hughes"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-_a19XKIz-ah.mp4"
             price="150"
             image="https://bloximages.newyork1.vip.townnews.com/dentonrc.com/content/tncms/assets/v3/editorial/3/3b/33bc1be3-acad-5823-8a7c-7ed4bac8c1de/5d3bed1536ef6.image.jpg?resize=1200%2C787"></round>
      <add-player-card></add-player-card>
      <section class="intro" data-background-video="images/covid-19.mp4"
                             data-background-color="#000"
                             data-background-video-loop>
        <div class="title">
          <img style="margin-top: 7em;" src="images/cameo_price_is_right.png" />
          <h3>Beverage Break</h3>
          <h3>covid-19</h3>
          <h3>Rad Jet bro</h3>
        </div>
      </section>
      <add-player-card></add-player-card>
      <round celebrity="Dolph Lundgren"
             hint1="1 of 4"
             hint2="Jacked"
             hint3="Not Russian"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-wKF56m4CLN.mp4"
             price="250"
             image="https://www.telegraph.co.uk/content/dam/films/2018/11/29/Lundgren_trans_NvBQzQNjv4Bq7PJn9ps4IyDNr2w-BoesQZxCWy5ffZoUVLnp9tp0Oug.JPG?imwidth=450"></round>
      <add-player-card></add-player-card>
      <round celebrity="Ray Lewis"
             hint1="Linebacker"
             hint2="Likely Murderer"
             hint3="Cheaper Than Vick"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-xALJE5FqFv.mp4"
             price="300"
             image="https://clutchpoints.com/wp-content/uploads/2019/12/Ray-Lewis-tells-Tom-Brady-to-_handle-your-business_-heading-into-season-finale.jpg"></round>
      <add-player-card></add-player-card>
      <round celebrity="Anthony Scaramucci"
             hint1="Hedge fund manager"
             hint2="11 Days"
             hint3="The Mooch"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-Fp9p0IdMNh.mp4"
             price="50"
             image="https://images.axios.com/EhiFEakFYiz2jb4Wa_ke91sjiLA=/2019/08/11/1565565354100.jpg"></round>
      <add-player-card></add-player-card>
      <round celebrity="Stoney LaRue"
             hint1="Barber County Fave"
             hint2="Billy Bob's"
             hint3="Red Dirt Royalty"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-mkaYOqRi75.mp4"
             price="50"
             image="https://bloximages.chicago2.vip.townnews.com/wacotrib.com/content/tncms/assets/v3/editorial/d/da/dda38bb1-7216-5f79-8487-753e359832ff/5e4e6a33422cd.image.jpg?resize=1200%2C858"></round>
      <add-player-card></add-player-card>
      <round celebrity="Santa Claus"
             hint1="Most Famous Beard"
             hint2="4th Century"
             hint3="Ole Saint Nick"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-Qp2LTnNcp.mp4"
             price="15"
             image="https://resize.hswstatic.com/w_907/gif/santa-claus-orig.jpg"></round>
      <add-player-card></add-player-card>
      <round celebrity="Brett Favre"
             hint1="1 Day"
             hint2="Hall of Famer"
             hint3="297 starts"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-Nd_sTAfuE.mp4"
             price="250"
             image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/packers/z0dpry6g8exrat1ivdwd.jpg"></round>
      <add-player-card></add-player-card>
      <round celebrity="Not Tom Cruise"
             hint1="Recognizable Face"
             hint2="Maverick"
             hint3="Scientologist"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-waMkw8skBw.mp4"
             price="65"
             image="https://i.kym-cdn.com/photos/images/facebook/001/158/297/130.jpg"></round>
      <add-player-card></add-player-card>
      <section class="intro" data-background-video="images/raining_tacos.mp4"
                             data-background-color="#000"
                             data-background-video-loop>
        <div class="title">
          <img style="margin-top: 7em;" src="images/cameo_price_is_right.png" />
          <h3>Beverage Break</h3>
          <h3>It might snow tonight</h3>
          <h3>This is a crazy year</h3>
        </div>
      </section>
      <add-player-card></add-player-card>
      <round celebrity="Scott Stapp"
             hint1="Buttrock"
             hint2="Worst National Anthem"
             hint3="Arms Wide Open"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-pdPNkNZ2p.mp4"
             price="500"
             image="https://www.chicagotribune.com/resizer/_30znbEJ2vxbC2-fIyltejiXw6A=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/RIZUKETZX5CTBJ5KSMXRNFR7PQ.jpg"></round>
      <add-player-card></add-player-card>
      <round celebrity="Toiley T. Paper"
             hint1="TikTok"
             hint2="1M followers"
             hint3="Most Coveted"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-bbXCB9yoi.mp4"
             price="24"
             image="https://yt3.ggpht.com/a/AATXAJw7I5jqD891Y5V7i-FQgplPivroi_Bhoe3p2A=s900-c-k-c0xffffffff-no-rj-mo"></round>
      <add-player-card></add-player-card>
      <round celebrity="John Finlay"
             hint1="Hates Shirts"
             hint2="Dental Work"
             hint3="Private Zoo"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-gcXrbq5PD.mp4"
             price="80"
             image="https://www.oxygen.com/sites/oxygen/files/2020-03/john-finlay-netflix.jpg"></round>
      <add-player-card></add-player-card>
      <round celebrity="Ed Asner"
             hint1="TV Legend"
             hint2="Elf"
             hint3="Mary Tyler Moore"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-iRF9IT7GsDo.mp4"
             price="200"
             image="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY5NDY3NjQyMDk1MDg1MDE5/mary-tyler-moore-ed-asner-gettyimages-71599960.jpg"></round>
      <add-player-card></add-player-card>
      <round celebrity="Chantal Kreviazuk"
             hint1="Winnipeg, Manitoba"
             hint2="5 noms 2 wins"
             hint3="Armageddon Cover"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-gagFCPgmbXD.mp4"
             price="300"
             image="https://upload.wikimedia.org/wikipedia/en/1/1a/Chantal_Kreviazuk_Surrounded.jpg"></round>
      <add-player-card></add-player-card>
      <round celebrity="Gloria Gaynor"
             hint1="Soul Satisfiers"
             hint2="Park Avenue Sound"
             hint3="Rob's Cover"
             video="https://d3el26csp1xekx.cloudfront.net/v/no-wm-q7W7-Af9-3.mp4"
             price="350"
             image="https://cdn.nashvillescene.com/files/base/scomm/nvs/image/2019/06/960w/Gloria_Gaynor_photo_credit_Alex_Arroyo_4.5d0035b81c94a.jpg"></round>
      <add-player-card></add-player-card>
    </div>
  </div>
</template>

<script>
import store from './store'
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

import AddPlayerCard from '../components/AddPlayerCard.vue'
import Round from '../components/Round.vue'

export default {
  name: 'CameoPriceIsRight',
  store,
  components: {
    AddPlayerCard,
    Round
  },
  mounted() {
    initReveal()
  },
  computed: mapState(['game'])
}
</script>
