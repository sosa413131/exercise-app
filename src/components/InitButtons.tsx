import { IonButton, IonIcon, IonContent } from '@ionic/react';
import { useEffect, useState } from 'react';
import { star } from 'ionicons/icons';
import { useHistory, Redirect } from "react-router-dom";
import './InitButtons.css';
import { Geolocation } from '@capacitor/geolocation';

interface ContainerProps { }

const CheckIn: React.FC<ContainerProps> = (props) => {

    interface coordinates {
        lat: number;
        long: number;
        altitude: number;
    }

    const [coordinates, setCoordinates] = useState<coordinates>({ "lat": NaN, "long": NaN, "altitude": NaN });

    var history = useHistory();

    useEffect(() => {

        getCoordinates()

    }, []);

    var getCoordinates = async () => {
        try {
            const geo = await Geolocation.getCurrentPosition();

            var newCoordinates: coordinates = {
                lat: geo.coords.latitude ? geo.coords.latitude : NaN,
                long: geo.coords.longitude ? geo.coords.longitude : NaN,
                altitude: geo.coords.altitude ? geo.coords.altitude : NaN,
            }

            setCoordinates(newCoordinates);

        } catch (error: any) {
            console.log(error);
        }

    };

    var handleClickCheckIn = (event: any) => {
        event.preventDefault();
        console.log("check in");
        console.log("data: ",coordinates);
        history.push({
            pathname: "/checkin",
            state: { "geoData": coordinates }
        });
    };


    var handleClickViewWorkouts = (event: any) => {
        event.preventDefault();
        console.log("view workouts");
        history.push("/workouts");
    };

    return (
        <div className="container initButtons">
            <div className='checkInButtonParent'>
                <IonButton className='checkInButton' onClick={handleClickCheckIn} color="primary">Check In</IonButton>
            </div>

            <div className='viewWorkoutsButtonParent'>
                <IonButton className='viewWorkoutsButton' onClick={handleClickViewWorkouts} color="primary">View Workouts</IonButton>
            </div>

        </div>

    )
}

export default CheckIn;