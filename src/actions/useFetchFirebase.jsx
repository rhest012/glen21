import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCdLWtS1XuYsbitVtQTISZFL5n-HfW3pUA",
    authDomain: "glen21-eec91.firebaseapp.com",
    databaseURL: "https://glen21-eec91-default-rtdb.firebaseio.com",
    projectId: "glen21-eec91",
    storageBucket: "glen21-eec91.appspot.com",
    messagingSenderId: "275553875644",
    appId: "1:275553875644:web:d127cb28363db8658282b9",
    measurementId: "G-CDRV7J4M52"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export const useFetchFirebase = (collectionName) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        const ref = database.ref(collectionName);
        ref.on('value', (snapshot) => {
          const fetchedData = snapshot.val();
          setData(fetchedData);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      const ref = database.ref(collectionName);
      ref.off(); // Unsubscribe from the database changes when the component unmounts
    };
  }, [collectionName]);

  return data;
};
