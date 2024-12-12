import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import './Tab1.css';
const Tab1: React.FC = () => {
  const [dataset, setDataset] = useState<any[]>([]);
  const dataURL = "https://dev-srjc-fall-2024-cs55-13.pantheonsite.io/wp-json/twentytwentyone-child/v1/special";
  
  useEffect(() => {
    fetch(dataURL) 
    .then(response => response.json()) 
    .then(data => setDataset(data)) 
  },[])
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Posts</IonTitle>
          </IonToolbar>
        </IonHeader>
      
        <IonList id="thing-list">
          <IonListHeader>Things</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
              <IonLabel>
                <h4>{item.post_title}</h4> <br></br>
             <br></br>  <p>{item.thing_description}</p>
                <address>{item.thing_address}</address>
                <h6>{item.acf_fields}</h6>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>

  );
};

export default Tab1;
