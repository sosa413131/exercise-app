import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import InitButtons from '../components/InitButtons';
import './ViewWorkouts.css';

// interface ContainerProps {

//  }

const ViewWorkouts: React.FC<any> = (...[match]) => {
  return (
    <IonPage>
      <div className='workouts'>
        Workouts
      </div>
    </IonPage>

  )
}

export default ViewWorkouts;


