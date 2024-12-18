import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import './Tab1.css';

function parseACF(obj: any): any {
  // loop thru each object in array returned as JSON
  console.log('in',obj);
  obj.forEach(
    function(item: any): any {
      let x = '{"' + item.acf_fields + '"}';
      x = x.replaceAll(',','","');
      x = x.replaceAll(':','":"');
      let y = JSON.parse(x);
      item.acf_fields = y;
    }
  );
  ///console.log('out',obj);
  return obj;
}
const Tab1: React.FC = () => {
  const [dataset, setDataset] = useState<any[]>([]);
  const dataUrl = "https://dev-srjc-fall-2024-cs55-13.pantheonsite.io/wp-json/twentytwentyone-child/v1/things";

  useEffect(() => {
    fetch(dataUrl) 
    .then(response => response.json())
    .then(data => setDataset(data)) 
  },[])
  console.log({dataset})
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
                <p>{item.thing_address}</p>
                <img alt="Silhouette of mountains" src="https://dev-srjc-fall-2024-cs55-13.pantheonsite.io/wp-content/uploads/2024/12/bulletin-board-e1734415354724.png" />


              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>

  );
};

export default Tab1;
