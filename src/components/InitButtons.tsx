import { IonButton, IonIcon, IonContent } from '@ionic/react';
import { useEffect, useState } from 'react';
import { star } from 'ionicons/icons';
import { useHistory, Redirect } from "react-router-dom";
import './InitButtons.css';
import {getCoordinates, coordinates} from "../utils/utility";


interface ContainerProps { }

const CheckIn: React.FC<ContainerProps> = (props) => {

    const [coordinates, setCoordinates] = useState<coordinates>({ "lat": NaN, "long": NaN, "altitude": NaN });

    var history = useHistory();

    useEffect(() => {
        getCoordinates().then((response:any)=>{
            setCoordinates(response);

        })}, []);


    var handleClickCheckIn = (event: any) => {
        event.preventDefault();
        history.push({
            pathname: "/checkin",
            state: { "geoSpacialData": coordinates }
        });
    };

    var handleClickViewWorkouts = (event: any) => {
        event.preventDefault();
        history.push("/workouts");
    };

    var handleClickTakePhoto=(event:any)=>{
        event.preventDefault();
        history.push("/takephoto");
    }

    return (
        <div className="container initButtons">
            <div className='checkInButtonParent'>
                <IonButton className='checkInButton' onClick={handleClickCheckIn} color="primary">Check In</IonButton>
            </div>

            <div className='viewWorkoutsButtonParent'>
                <IonButton className='viewWorkoutsButton' onClick={handleClickViewWorkouts} color="primary">View Workouts</IonButton>
            </div>
            <div className='takePhotoButtonParent'>
                <IonButton className='takePhotoButton' onClick={handleClickTakePhoto} color="primary">Take Photo</IonButton>
            </div>
        </div>

    )
}

export default CheckIn;