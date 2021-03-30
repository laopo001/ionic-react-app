import { IonContent, IonPage, } from '@ionic/react';

import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>

      <IonContent fullscreen>
        <img alt="" src="./assets/我的大学.jpg"></img>
        <div className="under">
          <img alt="" src="./assets/我的大学.jpg"></img>
        </div>
        <a href="/tab3">
          <div className="qingjia" ></div>
        </a>
        <a href="/tab1">
          <div className="back"></div>
        </a>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
