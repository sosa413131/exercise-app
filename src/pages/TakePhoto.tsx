import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import InitButtons from '../components/InitButtons';
import { Camera, CameraResultType } from '@capacitor/camera';
import { takePicture } from "../utils/utility";

const newPhoto = () => {
    takePicture().then((response) => {
        var image = response;
        var profileImg = document.getElementsByClassName("profilePhoto")[0]
        profileImg.setAttribute("src", image.webPath!);
    })
}

interface ContainerProps {

}

const TakePhoto: React.FC<ContainerProps> = (...[match]) => {

    return (
        <IonPage>
            <IonContent>
                <div>Take Photo</div>
                <IonButton onClick={newPhoto}>Take Photo</IonButton>
                <img alt="profile pic" className='profilePhoto' />
            </IonContent>
        </IonPage>
    )


}

export default TakePhoto;