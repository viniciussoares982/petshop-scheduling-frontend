import {
  IonButton,
  IonContent,
  IonDatetime,
  IonHeader, IonPage, IonTitle, IonToolbar
} from '@ionic/react';
import './Tab1.css';

export const Tab1 = () => {
  
  const isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * Date will be enabled if it is not
     * Sunday
     */
    return utcDay !== 0;
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agendamentos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Agende seu horario</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{ display: 'grid', justifyContent: 'center', marginTop: 32 }}>
          <IonDatetime 
            locale="pt-BR" 
            showDefaultTitle={true} 
            isDateEnabled={isWeekday}
            presentation="date"
          >
            <span slot="title">O dia escolhido foi:</span>
          </IonDatetime>

          <div style={{ display: 'flex', marginTop: 24 }} >
            <IonButton 
              fill="outline"
              size="small"
            >
              13:00
            </IonButton>
            <p className='teste'>13:00</p>
            <p className='teste'>13:00</p>
            <p className='teste'>13:00</p>
            <p className='teste'>13:00</p>
            
            
          </div>
        </div> 
      </IonContent>
    </IonPage>
  );
};
