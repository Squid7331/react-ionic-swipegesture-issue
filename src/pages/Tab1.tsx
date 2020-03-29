import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer name="Tab 1 page" />
        <IonButton
          onClick={e => {
            e.preventDefault();
            history.push('/tab2');
          }}>
          Goto page 2
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
