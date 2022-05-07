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
        altitude:number;
    }

    const [coordinates, setCoordinates] = useState<coordinates>({"lat":NaN, "long": NaN, "altitude": NaN});
    useEffect(() => {
        getCoordinates()

      }, []);
    
    var getCoordinates= async ()=>{
        try{
            const geo = await Geolocation.getCurrentPosition();

            var newCoordinates:coordinates = {
                lat: geo.coords.latitude? geo.coords.latitude: NaN,
                long:geo.coords.longitude? geo.coords.longitude: NaN,
                altitude: geo.coords.altitude? geo.coords.altitude: NaN,
            }

            // console.log(newCoordinates);
            setCoordinates(newCoordinates);

        } catch (error : any){
            console.log(error);

        }

    };

    var handleClickCheckIn=(event:any)=>{
        event.preventDefault();
        // console.log("check in");
        getCoordinates();
    };

    
    var handleClickViewWorkouts=(event:any)=>{
        event.preventDefault();
        // console.log("view workouts");
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