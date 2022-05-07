import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './CheckIn.css';

interface ContainerProps {
}

const CheckIn: React.FC<ContainerProps> = (match) => {
    return (
        <IonPage>
            <div className='checkin'>
                Checked In
            </div>
        </IonPage>

    )
}

export default CheckIn;


