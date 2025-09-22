import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

import "./InfoBox.css"

export default function InfoBox({info}) {
    let INIT_URL = "https://images.unsplash.com/photo-1533812451773-f2b04c2bdeb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	
	let HOT_URL = "https://images.unsplash.com/12/sun-trees.jpg?q=80&w=1340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	let COLD_URL = "https://images.unsplash.com/photo-1640882681635-9a79c8233e45?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	let RAIN_URL = "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

	return (
		<div className="Info-Box">
            <div className='cardContainer'>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					sx={{ height: 140 }}
					image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
					title="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
						<p>Temprature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
					</Typography>
				</CardContent>
			</Card>
            </div>
		</div>
	);
}
