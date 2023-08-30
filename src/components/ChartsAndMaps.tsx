import Navbar from './Navbar'
import { useQuery } from 'react-query';
import { Line } from 'react-chartjs-2';
import "leaflet/dist/leaflet.css";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from "chart.js"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import { Icon } from 'leaflet';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

interface CountryData {
    country: string;
    active: number;
    cases: number;
    deaths: number;
    recovered: number;
    countryInfo: {
        lat: number;
        long: number;
    };
}

interface HistoricalData {
    cases: Record<string, number>;
    deaths: Record<string, number>;
}

// Function to fetch Country Data
async function fetchCountryData(): Promise<CountryData[]> {
    const response = await axios.get('https://disease.sh/v3/covid-19/countries');
    return response.data;
}

// Function to fetch Line Graph Data
async function fetchGraphData(): Promise<HistoricalData> {
    const response = await axios.get(
        'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
    );
    return response.data;
}

const ChartsAndMaps = () => {

    const { data: countryData } = useQuery<CountryData[]>('countries', fetchCountryData);
    const { data: graphData } = useQuery<HistoricalData>('graph', fetchGraphData);

    const lineGraphData = {
        labels: Object.keys(graphData?.cases || {}),
        datasets: [
            {
                label: 'Cases',
                data: Object.values(graphData?.cases || {}),
                borderColor: 'black',
                backgroundColor: 'black',
                pointBorderColor: 'red'
            },
        ],
    };

    const options = {
        plugins: {
            legent: true
        }
    }

    const customIcon = new Icon({
        iconUrl: "/marker.png",
        iconSize: [38, 38]
    })

    return (
        <div className='w-full h-[100vh]'>
            <Navbar />
            <div className='bg-pink-200'>
                {/* Country Data */}
                <div className='h-[600px] flex flex-col gap-5 mt-10 max-w-7xl mx-auto'>
                    <h1 className='text-6xl font-bold text-center'>Country Data</h1>
                    <div className='border-4 border-black'>
                        {countryData && (
                            // @ts-ignore
                            <MapContainer style={{ height: '550px' }} center={[48.8566, 0]} zoom={2}>
                                {/* @ts-ignore */}
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                {countryData.map((country) => (

                                    <Marker key={country.country} position={[country.countryInfo.lat, country.countryInfo.long]} icon={customIcon}>
                                        <Popup>
                                            <p>Country: {country.country}</p>
                                            <p>Active Cases: {country.active}</p>
                                            <p>Recovered Cases: {country.recovered}</p>
                                            <p>Deaths: {country.deaths}</p>
                                        </Popup>
                                    </Marker>
                                ))}

                            </MapContainer>
                        )}
                    </div>
                </div>
                <div className='mt-10'>
                    <h1 className='text-6xl font-bold text-center mt-10'>Line Graph</h1>
                    <div className='max-w-7xl mx-auto mt-5 border-2 border-black p-5'>
                        {/* @ts-ignore */}
                        <Line data={lineGraphData} options={options}></Line>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ChartsAndMaps;