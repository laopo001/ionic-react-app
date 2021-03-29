import { IonContent, IonPage, } from '@ionic/react';

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>

      <IonContent fullscreen>
        <img alt="" src="./assets/请假.jpg"></img>
        <a href="/tab2">
          <div className="back"></div>
        </a>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
