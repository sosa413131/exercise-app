import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import InitButtons from '../components/InitButtons';
import Workout from "../components/Workout";
import './ViewWorkouts.css';

const axios = require('axios').default;

interface ContainerProps {

}

const ViewWorkouts: React.FC<ContainerProps> = (...[match]) => {

  const [workoutArray, setWorkoutArray] = useState<any[]>();

  useEffect(() => {
    axios.get('API/workouts.json')
      .then(function (response: any) {
        var workouts = response.data
        setWorkoutArray(workouts);
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      })
  }, []);

  if (workoutArray) {
    return (
      <IonPage>
        <div className='workouts'>
          Workouts
          {workoutArray.map((workoutObject) => {
            return <Workout name={workoutObject.workoutname}/>

          })}
        </div>
      </IonPage>)
  } else {
    return (
      <IonPage>
        Loading
      </IonPage>
    )

  }

}

export default ViewWorkouts;


