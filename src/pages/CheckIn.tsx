import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useLocation } from "react-router-dom";
import './CheckIn.css';

interface ContainerProps {
}

const CheckIn: React.FC<any> = () => {
    const location:any = useLocation();
    var geoData = location.state.geoData;

    return (
        <IonPage>
            <div className='checkin'>
                <div>
                lat : {geoData.lat}
                </div>
                <div>
                long : {geoData.long}
                </div>
                <div>
                altitude: {geoData.altitude}
                </div>      
            </div>
        </IonPage>
    );
};

export default CheckIn;