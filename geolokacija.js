import { Geolocation } from '@capacitor/geolocation';


const postaje = {

    14: { name: "Zajci", lat: 45.204147, lon: 14.070761, polutanti: ["5", "2", "4", "3"] },
    20: { name: "Čambarelići", lat: 45.181331, lon: 14.101011, polutanti: ["5", "2", "4"] },
    37: { name: "Zoljan", lat: 45.536200, lon: 17.607800, polutanti: ["1", "5", "2"]},
    38: { name: "Vrhovec", lat: 45.818300, lon: 15.947800, polutanti: ["1", "38"] },
    39: { name: "Pula Fižela", lat: 44.866000, lon: 13.852500, polutanti: ["1", "38", "31", "5", "2", "3"] },
    40: { name: "Koromačno", lat: 45.051667, lon: 14.124722, polutanti: ["1", "38", "5", "31", "2", "	3"] },
    41: { name: "Ksaverska cesta", lat: 45.832500, lon: 15.966667, polutanti: ["34", "269", "80", "285", "285", "287", "266", "279", "1", "347", "291", "33", "5", "256", "35", "30", "	31", "422", "	2", "3", "268"] },
    46: { name: "Gripe", lat: 43.508132, lon: 16.441249, polutanti: ["90"] },
    47: { name: "Visoka", lat: 43.509446, lon: 16.464366, polutanti: ["90"] },
    48: { name: "Poljud", lat: 43.517347, lon: 16.433052, polutanti: ["37", "2", "90"] },
    49: { name: "Žrnovnica", lat: 43.502122, lon: 16.568085, polutanti: ["90"] },
    101: { name: "Đorđićeva ulica (Stanica za hitnu pomoć)", lat: 45.815399, lon: 15.978282, polutanti: ["95", "34", "269", "266", "	37", "1", "33", "5", "28", "256", "35", "30", "	31", "	2", "90", "268"] },
    102: { name: "Pešćenica", lat: 45.810242, lon: 15.997418, polutanti: ["34", "269", "266", "37", "1", "33", "	5", "256", "35", "30", "31", "2", "90", "268"] },
    103: { name: "Prilaz baruna Filipovića", lat: 45.806690, lon: 15.955080, polutanti: ["95", "34", "269", "266", "	37", "1", "33", "	5", "256", "35", "	30", "	31", "	2", "	90", "268"] },
    118: { name: "Susedgrad (Tvornica 'Utenzilija')", lat: 45.781931, lon: 15.892476, polutanti: ["1"] },
    119: { name: "Siget (Dom zdravlja)", lat: 45.769618, lon: 15.980230, polutanti: ["34", "269", "80", "266", "37", "1", "	33", "5", "28", "256", "35", "30", "31", "2", "90", "268"] },
    121: { name: "Velika Gorica", lat: 45.712235, lon: 16.076860, polutanti: ["1", "38", "28", "31", "1", "38", "	28", "31"] },
    133: { name: "Sisak 3", lat: 45.491935, lon: 16.375778, polutanti: ["32", "1", "5", "2", "4", "3"] },
    137: { name: "Banija 18", lat: 45.482841, lon: 16.374833, polutanti: ["37", "2"] },
    140: { name: "Domobranska ulica 2", lat: 45.485832, lon: 16.376110, polutanti: ["37", "2"] },
    141: { name: "Dr.V.Mačeka 48", lat: 45.490555, lon: 16.382222, polutanti: ["2", "90"] },
    151: { name: "Sisak 2 Galdovo", lat: 45.475833, lon: 16.364167, polutanti: ["34", "32", "1", "	33", "5", "	5", "256", "35", "30", "2", "4", "3"] },
    152: { name: "Riva 4", lat: 45.492222, lon: 16.376389, polutanti: ["37", "1", "2"] },
    153: { name: "Ulica Kamenjak (Dječji vrtić)", lat: 45.497222, lon: 16.384167, polutanti: ["37", "1", "2"] },
    155: { name: "ZAGREB-1", lat: 45.817333, lon: 15.978611, polutanti: ["34", "32", "283", "80", "285", "295", "287", "280" ,"1", "38", "291", "33", "5", "28", "35", "30", "2", "3", "244"] },
    156: { name: "ZAGREB-2", lat: 45.819611, lon: 15.979778, polutanti: ["1", "38", "5", "5", "28", "2", "3"] },
    157: { name: "ZAGREB-3", lat: 45.821889, lon: 15.981111, polutanti: ["34", "283", "80", "285", "295", "287", "280", "	1", "38", "291", "33", "5", "28", "35", "30", "31", "	2", "3"] },
    158: { name: "RIJEKA-1", lat: 45.327222, lon: 14.442222, polutanti: ["32", "1", "38", "5", "2", "4", "3"] },
    159: { name: "RIJEKA-2", lat: 45.330555, lon: 14.435555, polutanti: ["104", "32", "	283", "80", "285", "295", "287", "201", "280", "1", "38", "128", "291", "120", "123", "121", "5", "28", "124", "125", "105", "129", "31", "106", "2", "3"] },
    160: { name: "OSIJEK-1", lat: 45.553611, lon: 18.683611, polutanti: ["32", "1", "38", "5", "5", "31", "2", "3"] },
    161: { name: "KUTINA-1", lat: 45.480833, lon: 16.780833, polutanti: ["95", "1	", "38", "5", "28", "31", "2", "4", "3"] },
    162: { name: "SISAK-1", lat: 45.490833, lon: 16.370556, polutanti: ["34", "32", "283", "80", "285", "295", "287", "280", "1", "38", "291", "33", "5", "28", "35", "30", "2", "4", "3"] },
    165: { name: "SLAVONSKI BROD-1", lat: 45.157778, lon: 18.013889, polutanti: ["309", "104", "34", "112", "32", "32", "283", "80", "285", "295", "287", "201", "49", "109", "280", "1", "38", "128", "291", "33", "120", "123", "121", "110", "100", "5", "28", "124", "101", "125", "35", "105", "30", "129", "31", "106", "2", "4", "108"] },
    168: { name: "Split-1", lat: 43.508132, lon: 16.441249, polutanti: ["34", "1", "38", "33", "5", "28", "35	", "	30", "2"] },
    173: { name: "AMS1 Kaštel Sućurac", lat: 43.550833, lon: 16.405556, polutanti: ["34", "1", "38", "33", "5", "28", "35", "30	", "2"] },
    179: { name: "AMS2 Sveti Kajo", lat: 43.551111, lon: 16.394722, polutanti: ["34", "1", "33", "5", "28", "35", "30", "2"] },
    180: { name: "Ripenda", lat: 45.083611, lon: 14.126389, polutanti: ["1", "5", "31", "2"] },
    189: { name: "Sv. Katarina", lat: 45.016667, lon: 13.866667, polutanti: ["1", "31", "2"] },
    190: { name: "Plomin", lat: 45.125833, lon: 14.162222, polutanti: ["1", "2"] },
    191: { name: "Klavar", lat: 45.195278, lon: 14.147778, polutanti: ["5"] },
    215: { name: "Kostrena - Martinšćica", lat: 45.307778, lon: 14.510833, polutanti: ["5"] },
    221: { name: "Urinj", lat: 45.294167, lon: 14.533056, polutanti: ["95", "32", "1", "5", "28", "2", "4", "3"] },
    224: { name: "Paveki", lat: 45.319167, lon: 14.564722, polutanti: ["32", "1", "5", "28", "31", "2", "4", "3"] },
    232: { name: "Viškovo - Marišćina", lat: 45.377222, lon: 14.390556, polutanti: ["95", "32", "1", "5", "28", "474", "31", "4", "3"] },
    235: { name: "Viškovo - Viševac", lat: 45.375278, lon: 14.397500, polutanti: ["95", "5", "71", "4", "3"] },
    241: { name: "Opatija - Gorovo", lat: 45.340833, lon: 14.309167, polutanti: ["31"] },
    243: { name: "Krasica", lat: 45.353611, lon: 14.529722, polutanti: ["32", "1", "31", "2", "4"] },
    245: { name: "Krešimirova ul.", lat: 45.330833, lon: 14.434167, polutanti: ["1", "5", "31", "2", "3"] },
    246: { name: "Vrh Martinšćice", lat: 45.298333, lon: 14.510556, polutanti: ["32", "4"] },
    254: { name: "SLAVONSKI BROD - privremena pokretna postaja", lat: 45.159444, lon: 18.008611, polutanti: ["32", "5", "28", "2", "4", "3"] },
    255: { name: "KOPAČKI RIT", lat: 45.616944, lon: 18.761111, polutanti: ["3", "201", "5", "28", "31"] },
    256: { name: "DESINIĆ", lat: 46.154722, lon: 15.698611, polutanti: ["32", "1", "38", "5", "28", "31", "2", "3"] },
    257: { name: "PLITVIČKA JEZERA", lat: 44.880000, lon: 15.617222, polutanti: ["65", "	64", "66", "46", "52", "104", "32", "283", "80", "285", "295", "287", "49", "48", "280", "1", "38", "128", "39", "40", "61", "41", "291", "45", "51", "54", "120", "123", "121", "5", "28", "62", "124", "	125", "44", "55", "57", "105", "58", "50", "63", "129", "31", "42", "106", "2", "60", "47", "3"] },
    258: { name: "PARG", lat: 45.605278, lon: 14.607222, polutanti: ["5", "28", "31"] },
    259: { name: "VIŠNJAN", lat: 45.301111, lon: 13.734444, polutanti: ["32", "201", "5", "28", "31"] },
    260: { name: "VELA STRAŽA (Dugi otok)", lat: 44.073611, lon: 14.921111, polutanti: ["5", "28"] },
    261: { name: "POLAČA (Ravni kotari)", lat: 44.072222, lon: 15.598611, polutanti: ["309", "104", "34", "269", "201", "255", "1", "38", "128", "33", "120", "123", "121", "5", "28", "124", "125", "35", "105", "30", "129", "31", "106", "2", "491", "268"] },
    262: { name: "HUM (otok Vis)", lat: 43.060000, lon: 16.143611, polutanti: ["1", "38", "5", "28", "31", "2"] },
    263: { name: "OPUZEN (Delta Neretve)", lat: 43.018889, lon: 17.568611, polutanti: ["31"] },
    264: { name: "ŽARKOVICA (Dubrovnik)", lat: 42.641667, lon: 18.125278, polutanti: ["1", "38", "5", "28", "	31"] },
    265: { name: "Bijenik", lat: 45.806389, lon: 15.964444, polutanti: ["2", "5", "5"] },
    267: { name: "ZAGREB PPI PM2,5 - Ksaverska cesta", lat: 45.829444, lon: 15.969722, polutanti: ["104", "128", "120", "123", "121", "28", "124", "125", "105", "129", "106"] },
    273: { name: "Vatrogasni dom (K2) - Kutina", lat: 45.483889, lon: 16.784444, polutanti: ["1", "38", "2"] },
    274: { name: "Jakuševec", lat: 45.759444, lon: 16.014444, polutanti: ["95", "5", "4"] },
    275: { name: "SLAVONSKI BROD-2", lat: 45.153056, lon: 18.015000, polutanti: ["32", "5", "5", "28", "2", "4", "3"] },
    276: { name: "Mlaka", lat: 45.322778, lon: 14.439444, polutanti: ["1", "31", "2", "3"] },
    277: { name: "VARAŽDIN-1", lat: 46.304167, lon: 16.337222, polutanti: ["1", "38", "31"] },
    278: { name: "KARLOVAC-1", lat: 45.490833, lon: 15.547500, polutanti: ["1", "38", "	31"] },
    280: { name: "Mirogojska cesta", lat: 45.825000, lon: 15.989167, polutanti: ["1", "38", "5", "28", "31", "2", "3"] }
  }


  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };
  
  const findNearestStation = async () => {
    try {
      const { coords } = await Geolocation.getCurrentPosition();
      const userLat = coords.latitude;
      const userLon = coords.longitude;
  
      let nearestStation = null;
      let minDistance = Infinity;
  
      for (const [id, postaja] of Object.entries(postaje)) {
        const distance = getDistance(userLat, userLon, postaja.lat, postaja.lon);
        if (distance < minDistance) {
          minDistance = distance;
          nearestStation = { id, ...postaja };
        }
      }
  
      const resultMessage = nearestStation
        ? `Najbliža postaja je ${nearestStation.name} koja se nalazi ${minDistance.toFixed(2)} km od vas.`
        : 'Nema dostupnih postaja.';
  
      document.getElementById('resultMessage').innerText = resultMessage;
      document.getElementById('resultModal').style.display = 'block';
  
      document.getElementById('selectStation').onclick = () => {
        selectStation(nearestStation.id);
        document.getElementById('resultModal').style.display = 'none';
      };
  
    } catch (error) {
      console.error('Greška pri dohvaćanju lokacije:', error);
      alert('Došlo je do pogreške pri dohvaćanju lokacije.');
    }
  };
  
  const selectStation = (stationId) => {
    const stationSelect = document.getElementById('postaja');
    stationSelect.value = stationId;
  };
  
  document.getElementById('saznaj').addEventListener('click', findNearestStation);
  
  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('resultModal').style.display = 'none';
  });
  



