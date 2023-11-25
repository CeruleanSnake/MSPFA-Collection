console.log("#####| Audio Script by Steelo |#####");

var is_in_range = (num, track) => {
  return num >= track[0] && num <= track[1];
};

const audio_data=[
  [
    [
      [7, 18]
    ], new Audio('./assets/sound/intro_nameless_theme.mp3')
  ],
  [
    [
      [458, 473]
    ], new Audio('./assets/sound/001_conquest_of_paradise_hiphop.mp3')
  ],
  [
    [
      [732, 747]
    ], new Audio('./assets/sound/002_vangelis_antarctica.mp3')
  ],
  [
    [
      [798, 804]
    ], new Audio('./assets/sound/003_scharvona_ice_for_life.mp3')
  ],
  [
    [
      [805, 813]
    ], new Audio('./assets/sound/004_scharvona_be_wheely_careful.mp3')
  ],
  [
    [
      [825, 863]
    ], new Audio('./assets/sound/005_sanoandaihara_twelfth_chapter_final.mp3')
  ],
  [
    [
      [936, 964],
      [1840, 1858]
    ], new Audio('./assets/sound/006_monaca_and_nishimura_godsboundsbyrules.mp3')
  ],
  [
    [
      [981, 988]
    ], new Audio('./assets/sound/007_yamaoka_ice.mp3')
  ],
  [
    [
      [1062, 1087]
    ], new Audio('./assets/sound/008_yamaoka_devils_laughter.mp3')
  ],
  [
    [
      [1209, 1221]
    ], new Audio('./assets/sound/009_scharvona_say_no_to_snow.mp3')
  ],
  [
    [
      [1376, 1405]
    ], new Audio('./assets/sound/010_yamaoka_fermata_in_mistic_air.mp3')
  ],
  [
    [
      [1411, 1413]
    ], new Audio('./assets/sound/011_morricone_contamination.mp3')
  ],
  [
    [
      [1551, 1564]
    ], new Audio('./assets/sound/012_ito_grand_papillon.mp3')
  ],
  [
    [
      [1624, 1624]
    ], new Audio('./assets/sound/013_wallscoveredinblood_cattetremix.mp3')
  ],
  [
    [
      [1639, 1652]
    ], new Audio('./assets/sound/014_vangelis_eternity.mp3')
  ],
  [
    [
      [1733, 1739]
    ], new Audio('./assets/sound/015_henifin_the_gift_of_forever.mp3')
  ],
  [
    [
      [1895, 1906]
    ], new Audio('./assets/sound/016_futureworldmusic_life_goes_on.mp3')
  ],
  [
    [
      [1907, 1946]
    ], new Audio('./assets/sound/017_henifin_the_somme.mp3')
  ],
  [
    [
      [2003, 2008]
    ], new Audio('./assets/sound/018_yamaoka_butterflies.mp3')
  ],
  [
    [
      [2118, 2136]
    ], new Audio('./assets/sound/019_henifin_a_war_to_end_all_wars.mp3')
  ],
  [
    [
      [2139, 2182]
    ], new Audio('./assets/sound/020_henifin_gateway_to_destiny.mp3')
  ],
  [
    [
      [2260, 2310]
    ], new Audio('./assets/sound/021_harland_hedges_and_peasee_kain_battle_theme.mp3')
  ],
  [
    [
      [2438, 2481]
    ], new Audio('./assets/sound/022_morricone_eternity.mp3')
  ],
  [
    [
      [2655, 2674]
    ], new Audio('./assets/sound/023_vangelis_titans.mp3')
  ],
];

MSPFA.slide.push(() => {
  jQuery(document).ready(function() {
    const params = new URLSearchParams(window.location.search);
    const page_id = parseInt(params.get("p"));

    for (const data of audio_data) {
      var found = false;
      for (const range of data[0]) {
        if (is_in_range(page_id, range)) {
          found = true;
          break;
        }
      }
      if (found) {
        data[1].play();
        data[1].loop = true;
      } else {
        data[1].pause();
        data[1].currentTime = 0;
      }
    }
  });
});