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
        <IonContent>
          <div className='workouts'>
            Workouts
            <table>
              <thead>
                <tr>
                  <th>Demo</th>
                  <th>Name</th>
                  <th>Targeted Muscle</th>
                </tr>
              </thead>
              <tbody>
                {workoutArray.map((workoutObject: any, index: number) => {
                  return (
                    <Workout key={index} name={workoutObject.workoutname} targetedMuscle={workoutObject["targeted muscles"]} video={workoutObject["video"]} animation={workoutObject["animation"]} image={workoutObject["image"]} />
                  )
                })}
              </tbody>
            </table>
          </div>
        </IonContent>
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


