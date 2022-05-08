import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { getCoordinates, coordinates } from "../utils/utility";
import './CheckIn.css';

interface ContainerProps {
}

var geo: coordinates;

const CheckIn: React.FC<ContainerProps> = () => {

    const location: any = useLocation();


    useEffect(() => {

        if (location.state) {
            geo = location.state.geoSpacialData;
        } else {
            getCoordinates().then((response: any) =>
                geo = response)
        }


    }, [location]);



    if (geo) {
        return (
            <IonPage>

                <div className='checkin'>
                    <div>
                        lat : {geo["lat"]}
                    </div>
                    <div>
                        long : {geo["long"]}
                    </div>
                    <div>
                        altitude: {geo["altitude"]}
                    </div>
                </div>
            </IonPage>
        )
    }  else {
        return (<IonPage>Loading</IonPage>)
    }
}

export default CheckIn;