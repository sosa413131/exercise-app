import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType } from '@capacitor/camera';

interface coordinates {
    lat: number;
    long: number;
    altitude: number;
}

var getCoordinates = async () => {

    try {
        const geo = await Geolocation.getCurrentPosition();

        var geoData: coordinates = {
            lat: geo.coords.latitude ? geo.coords.latitude : NaN,
            long: geo.coords.longitude ? geo.coords.longitude : NaN,
            altitude: geo.coords.altitude ? geo.coords.altitude : NaN,
        }
        return geoData;

    } catch (error: any) {

        console.log(error);
    }
};

const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    return image;
}

export { getCoordinates, takePicture };
export type { coordinates };
