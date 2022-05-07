import { IonButton, IonIcon, IonContent } from '@ionic/react';
import { useEffect, useState } from 'react';
import { star } from 'ionicons/icons';
import { useHistory } from "react-router-dom";
import './InitButtons.css';
import { Geolocation } from '@capacitor/geolocation';

interface ContainerProps { }

const CheckIn: React.FC<ContainerProps> = () => {
    interface coordinates {
        lat: number;
        long:number;
        altitude?:number
    }
    const [coordinates, setCoordinates] = useState({"lat":null, "long": null, "altitude": null});
    useEffect(() => {
        getCoordinates()

      }, []);
    
    var getCoordinates= async ()=>{
        const coordinates = await Geolocation.getCurrentPosition(); 
        console.log('Current lat: ', coordinates.coords.latitude);
        console.log('Current long: ', coordinates.coords.longitude);
        console.log('Current altitude:', coordinates.coords.altitude);

        let lat = coordinates.coords.latitude;
        let long= coordinates.coords.longitude;
        if(coordinates.coords.altitude){
            let alt =coordinates.coords.altitude;
        }

    };

    var handleClickCheckIn=(event:any)=>{
        event.preventDefault();
        console.log("check in");
    };

    
    var handleClickViewWorkouts=(event:any)=>{
        event.preventDefault();
        console.log("view workouts");
    };

    return (
        <div className="container initButtons">
            <div className='checkInButtonParent'>
                <IonButton className='checkInButton'  onClick={handleClickCheckIn} color="primary">Check In</IonButton>
            </div>

            <div className='viewWorkoutsButtonParent'>
                <IonButton className='viewWorkoutsButton' onClick={handleClickViewWorkouts} color="primary">View Workouts</IonButton>
            </div>

        </div>

    )
}

export default CheckIn;