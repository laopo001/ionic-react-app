import { IonContent, IonPage, } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        <img alt="" src="./assets/首页.jpg"></img>
        <div className="under">
          <img alt="" src="./assets/首页.jpg"></img>
        </div>
        <a href="/tab2">
          <div className="daxue" ></div>
        </a>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
