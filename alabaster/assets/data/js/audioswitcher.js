var one = new Audio('./assets/sound/001_conquest_of_paradise_hiphop.mp3');
var two = new Audio('./assets/sound/002_vangelis_antarctica.mp3');
var three = new Audio('./assets/sound/003_scharvona_ice_for_life.mp3');
var four = new Audio('./assets/sound/004_scharvona_be_wheely_careful.mp3');
var five = new Audio('./assets/sound/005_sanoandaihara_twelfth_chapter_final.mp3');
var six = new Audio('./assets/sound/006_monaca_and_nishimura_godsboundsbyrules.mp3');
var seven = new Audio('./assets/sound/007_yamaoka_ice.mp3');
var eight = new Audio('./assets/sound/008_yamaoka_devils_laughter.mp3');
var nine = new Audio('./assets/sound/009_scharvona_say_no_to_snow.mp3');
var ten = new Audio('./assets/sound/010_yamaoka_fermata_in_mistic_air.mp3');
var eleven = new Audio('./assets/sound/011_morricone_contamination.mp3');
var twelve = new Audio('./assets/sound/012_ito_grand_papillon.mp3');
var thirteen = new Audio('./assets/sound/013_wallscoveredinblood_cattetremix.mp3');
var fourteen = new Audio('./assets/sound/014_vangelis_eternity.mp3');
var fifteen = new Audio('./assets/sound/015_henifin_the_gift_of_forever.mp3');
var sixteen = new Audio('./assets/sound/016_futureworldmusic_life_goes_on.mp3');
var seventeen = new Audio('./assets/sound/017_henifin_the_somme.mp3');
var eighteen = new Audio('./assets/sound/018_yamaoka_butterflies.mp3');
var nineteen = new Audio('./assets/sound/019_henifin_a_war_to_end_all_wars.mp3');
var twenty = new Audio('./assets/sound/020_henifin_gateway_to_destiny.mp3');
var twentyone = new Audio('./assets/sound/021_harland_hedges_and_peasee_kain_battle_theme.mp3');
var twentytwo = new Audio('./assets/sound/022_morricone_eternity.mp3');
var twentythree = new Audio('./assets/sound/023_vangelis_titans.mp3');


MSPFA.slide.push(() => {
  jQuery(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    
    if([404,405,406,407,408,409,410].includes(parseInt(params.get("p")))) {
      one.play();
    } else {
      one.pause();
      one.currentTime=0
    }

    if([665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680].includes(parseInt(params.get("p")))) {
      two.play();
    } else {
      two.pause();
      two.currentTime=0
    }

    if([729,730,731,732].includes(parseInt(params.get("p")))) {
      three.play();
    } else {
      three.pause();
      three.currentTime=0
    }

    if([733,734,735,736,737,738,739,740,741].includes(parseInt(params.get("p")))) {
      four.play();
    } else {
      four.pause();
      four.currentTime=0
    }

    if([753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,780,781,782,783,784,785,786,788,789,790,791,792,793,794,795,796.797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833].includes(parseInt(params.get("p")))) {
      five.play();
    } else {
      five.pause();
      five.currentTime=0
    }

    if([864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,1725,1726,1727,1728,1729,1730,1731,1732,1733,1734,1735,1736,1737,1738,1739,1740,1741,1742,1743].includes(parseInt(params.get("p")))) {
      six.play();
    } else {
      six.pause();
      six.currentTime=0
    }

    if([909,910,911,912,913,914,915,916].includes(parseInt(params.get("p")))) {
      seven.play();
    } else {
      seven.pause();
      seven.currentTime=0
    }

    if([990,991,992,993,994,995,996,97,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010].includes(parseInt(params.get("p")))) {
      eight.play();
    } else {
      eight.pause();
      eight.currentTime=0
    }

    if([1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144].includes(parseInt(params.get("p")))) {
      nine.play();
    } else {
      nine.pause();
      nine.currentTime=0
    }

    if([1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310].includes(parseInt(params.get("p")))) {
      ten.play();
    } else {
      ten.pause();
      ten.currentTime=0
    }

    if([1316,1317,1318].includes(parseInt(params.get("p")))) {
      eleven.play();
    } else {
      eleven.pause();
      eleven.currentTime=0
    }

    if([1439,1440,1441,1442,1443,1444,1445,1446,1447,1448,1449,1450,1451,1452].includes(parseInt(params.get("p")))) {
      twelve.play();
    } else {
      twelve.pause();
      twelve.currentTime=0
    }

    if([1512].includes(parseInt(params.get("p")))) {
      thirteen.play();
    } else {
      thirteen.pause();
      thirteen.currentTime=0
    }

    if([1527,1528,1529,1530,1531,1532,1533,1534,1535,1536,1537,1538,1539,1540].includes(parseInt(params.get("p")))) {
      fourteen.play();
    } else {
      fourteen.pause();
      fourteen.currentTime=0
    }

    if([1621,1622,1623,1624,1625,1626,1627].includes(parseInt(params.get("p")))) {
      fifteen.play();
    } else {
      fifteen.pause();
      fifteen.currentTime=0
    }

    if([1780,1781,1782,1783,1784,1785,1786].includes(parseInt(params.get("p")))) {
      sixteen.play();
    } else {
      sixteen.pause();
      sixteen.currentTime=0
    }

    if([1787,1788,1789,1790,1791,1792,1793,1794,1795,1796,1797,1798,1799,1800,1801,1802,1803,1804,1805,1806,1807,1808,1809,1810,1811,1812,1813,1814,1815,1816,1817,1818,1819,1820,1821,1822,1823,1824,1825,1826].includes(parseInt(params.get("p")))) {
      seventeen.play();
    } else {
      seventeen.pause();
      seventeen.currentTime=0
    }

    if([1883,1884,1885,1886,1887,1888].includes(parseInt(params.get("p")))) {
      eighteen.play();
    } else {
      eighteen.pause();
      eighteen.currentTime=0
    }

    if([1998,1999,2000,2001,2002,203,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016].includes(parseInt(params.get("p")))) {
      nineteen.play();
    } else {
      nineteen.pause();
      nineteen.currentTime=0
    }

    if([2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060,2061,2062].includes(parseInt(params.get("p")))) {
      twenty.play();
    } else {
      twenty.pause();
      twenty.currentTime=0
    }

    if([2140,2141,2142,2143,2144,2145,2146,2147,2148,2149,2150,2151,2152,2153,2154,2155,2156,2157,2158,2159,2160,2161,2162,2163,2164,2165,2166,2167,2168,2169,2170,2171,2172,2173,2174,2175,2176,2177,2178,2179,2180,2181,2182,2183,2184,2185,2186,2187,2188,2189,2190].includes(parseInt(params.get("p")))) {
      twentyone.play();
    } else {
      twentyone.pause();
      twentyone.currentTime=0
    }

    if([2318,2319,2320,2321,2322,2323,2324,2325,2326,2327,2328,2329,2330,2331,2332,2333,2334,2335,2336,2337,2338,2339,2340,2341,2342,2343,2344,2345,2346,2347,2348,2349,2350,2351,2352,2353,2354,2355,2356,2357,2358,2359,2360,2361].includes(parseInt(params.get("p")))) {
      twentytwo.play();
    } else {
      twentytwo.pause();
      twentytwo.currentTime=0
    }

    if([2525,2526,2527,2528,2529,2530,2531,2532,2533,2534,2535,2536,2537,2538,2539,2540,2541,2542,2543,2544].includes(parseInt(params.get("p")))) {
      twentythree.play();
    } else {
      twentythree.pause();
      twentythree.currentTime=0
    }

  });
});