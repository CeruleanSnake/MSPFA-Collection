console.log("Audio Script by Steelo");

var is_in_range = (num, track) => {
  return num >= track[0] && num <= track[1];
};

const audio_data = [
  [
    [
      [404, 410]
    ], new Audio('./assets/sound/001_conquest_of_paradise_hiphop.mp3')
  ],
  [
    [
      [665, 680]
    ], new Audio('./assets/sound/001_conquest_of_paradise_hiphop.mp3')
  ],
  [
    [
      [729, 732]
    ], new Audio('./assets/sound/002_vangelis_antarctica.mp3')
  ],
  [
    [
      [733, 741]
    ], new Audio('./assets/sound/003_scharvona_ice_for_life.mp3')
  ],
  [
    [
      [753, 833]
    ], new Audio('./assets/sound/004_scharvona_be_wheely_careful.mp3')
  ],
  [
    [
      [864, 892]
    ], new Audio('./assets/sound/005_sanoandaihara_twelfth_chapter_final.mp3')
  ],
  [
    [
      [864, 892],
      [1725, 1748]
    ], new Audio('./assets/sound/006_monaca_and_nishimura_godsboundsbyrules.mp3')
  ],
  [
    [
      [909, 916]
    ], new Audio('./assets/sound/007_yamaoka_ice.mp3')
  ],
  [
    [
      [990, 1010]
    ], new Audio('./assets/sound/008_yamaoka_devils_laughter.mp3')
  ],
  [
    [
      [1132, 1144]
    ], new Audio('./assets/sound/009_scharvona_say_no_to_snow.mp3')
  ],
  [
    [
      [1281, 1310]
    ], new Audio('./assets/sound/010_yamaoka_fermata_in_mistic_air.mp3')
  ],
  [
    [
      [1316, 1318]
    ], new Audio('./assets/sound/011_morricone_contamination.mp3')
  ],
  [
    [
      [1439, 1452]
    ], new Audio('./assets/sound/012_ito_grand_papillon.mp3')
  ],
  [
    [
      [1512, 1512]
    ], new Audio('./assets/sound/013_wallscoveredinblood_cattetremix.mp3')
  ],
  [
    [
      [1527, 1540]
    ], new Audio('./assets/sound/014_vangelis_eternity.mp3')
  ],
  [
    [
      [1621, 1627]
    ], new Audio('./assets/sound/015_henifin_the_gift_of_forever.mp3')
  ],
  [
    [
      [1780, 1786]
    ], new Audio('./assets/sound/016_futureworldmusic_life_goes_on.mp3')
  ],
  [
    [
      [1787, 1826]
    ], new Audio('./assets/sound/017_henifin_the_somme.mp3')
  ],
  [
    [
      [1883, 1888]
    ], new Audio('./assets/sound/018_yamaoka_butterflies.mp3')
  ],
  [
    [
      [1998, 2016]
    ], new Audio('./assets/sound/019_henifin_a_war_to_end_all_wars.mp3')
  ],
  [
    [
      [2019, 2062]
    ], new Audio('./assets/sound/020_henifin_gateway_to_destiny.mp3')
  ],
  [
    [
      [2140, 2190]
    ], new Audio('./assets/sound/021_harland_hedges_and_peasee_kain_battle_theme.mp3')
  ],
  [
    [
      [2318, 2361]
    ], new Audio('./assets/sound/022_morricone_eternity.mp3')
  ],
  [
    [
      [2525, 2544]
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