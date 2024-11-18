// {
//     "cityName": "Lisbon",
//     "country": "Portugal",
//     "emoji": "🇵🇹",
//     "date": "2027-10-31T15:59:59.138Z",
//     "notes": "My favorite city so far!",
//     "position": {
//       "lat": 38.727881642324164,
//       "lng": -9.140900099907554
//     },
//     "id": "73930385"
//   },

interface IPosition {
  lat: number;
  lng: number;
}

interface IData {
  cityName: string;
  country: string;
  emoji: string;
  date: Date;
  notes: string;
  position: IPosition;
  id: string;
}

export { IData, IPosition };
