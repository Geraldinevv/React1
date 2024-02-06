import React from 'react';
import Header from './Components/Header/Header';
import MyCard from './Components/MyCard/MyCard';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = () => {
  const dogs = [
    {
      image: 'https://media.istockphoto.com/id/1252455620/es/foto/golden-retriever-dog.jpg?s=612x612&w=0&k=20&c=3EXj38x_IPSOuBHMNp9Wgn6jmS_yr0sFPFwVrSlN30A=',
      name: 'Chiquita',
      description: 'Chiquita es una perrita muy juguetona y cariñosa.',
      tags: [
        { text: 'Chihuahua', color: 'primary' },
        { text: 'hembra', color: 'success' },
        { text: 'Joven', color: 'warning' },
      ],
    },
    {
      image: 'https://media.istockphoto.com/id/1435010849/es/foto/labrador-retriever-perro-jadeando-y-gato-jengibre-sentado-frente-a-fondo-amarillo-oscuro.jpg?s=612x612&w=0&k=20&c=Ri4CxPKtI7lnPUUg926-l7HU6YVXxcO7bdPheWuth2I=',
      name: 'cahantun',
      description: 'cachantun es un perro muy tranquilo y amigable.',
      tags: [
        { text: 'Bulldog', color: 'primary' },
        { text: 'Macho', color: 'success' },
        { text: 'Adulto', color: 'warning' },
      ],
    },
    {
      image: 'https://media.istockphoto.com/id/1361794658/es/foto/un-perro-labrador-retriever-en-el-parque.jpg?s=612x612&w=0&k=20&c=QVHD371BQKwztHQoEgejJudHVG2ET3uaTubQVIWyo0Q=',
      name: 'cebolla',
      description: 'Chiqui es una perrita muy jugueton y cariños.',
      tags: [
        { text: 'Chihuahua', color: 'primary' },
        { text: 'Macho', color: 'success' },
        { text: 'Joven', color: 'warning' },
      ],
    },
    {
      image: 'https://media.istockphoto.com/id/1306167086/es/foto/hermoso-jack-russell-terrier-de-pura-raza.jpg?s=612x612&w=0&k=20&c=KbDLSfLIX_lgu7Ghh7nLFaBZ1uN7egx9Zhh3uMIV57M=',
      name: 'naco',
      description: 'naco es un perro muy tranquilo y amigable.',
      tags: [
        { text: 'Bulldog', color: 'primary' },
        { text: 'Macho', color: 'success' },
        { text: 'Adulto', color: 'warning' },
      ],
    },
  ];
  

  return (
    <div className="App">
      <Header title="Adopta un perrito" />
      <div className="my-card-container"></div>
      {dogs.map((dog, index) => (
        <MyCard key={index} {...dog} />
      ))}
      <Footer />
    </div>
  );
};

export default App;