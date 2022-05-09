import { IonButton, IonIcon, IonContent } from '@ionic/react';
import { useEffect, useState } from 'react';



interface ContainerProps {
    name: string,
    targetedMuscle: string,
    video: string,
    animation: string,
    image: string
}

const Workout: React.FC<ContainerProps> = ({ name, targetedMuscle, video, animation, image }) => {

    return (
        <tr>
            <td>
                <img className="workoutImage" src={`/assets/images/${image}`} alt={name} />
            </td>
            <td>
                {name}
            </td>
            <td>
                {targetedMuscle}
            </td>
        </tr>
    )

}

export default Workout;