import { IonButton, IonIcon, IonContent } from '@ionic/react';
import { useEffect, useState } from 'react';



interface ContainerProps { 
    name:string
}

const Workout: React.FC<ContainerProps> = ({name}) => {

    return (
        <div className='workout'>
           {name}
        </div>
    )

}

export default Workout;