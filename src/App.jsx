import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todu from './todu'
import People from './Person'
import Actors from './Actors'
import Singers from './Singer'
import Teacher from './Teacher'


function App() {
  const actors = ['jahed khan', 'soriful raj', 'Riaz', 'Sakib khan', 'Bappi'];

  const singers = [
    { name: 'Habib Wahid', age: 34 },
    { name: 'zunayed evan', age: 31 },
    { name: 'lincoln d costa', age: 40 },
    { name: 'Pritom Hasan', age: 26 },
    { name: 'Sumon', age: 33 },
  ]

  const teachers = [
    { name: 'Kanai', subject: 'English' },
    { name: 'Jolil', subject: 'Bangla 2nd Part' },
    { name: 'Abir', subject: 'Math' },
    { name: 'Soton', subject: 'Geography' },
    { name: 'Palash', subject: 'Science' },
  ]

  return (
    <>
      <h1>Vite + React</h1>

      {
      teachers.map(teaching => <Teacher sir={teaching} ></Teacher>)
    }

      {
        singers.map(singer => <Singers singer={singer}></Singers>)
      }

      {/* <Actors name="Mojnu"></Actors> */}

      {/* {
        actors.map(actor => <Actors name={actor} ></Actors>)
      } */}

      {/* <People></People>
      <Todu task="learn React" isDone={true}></Todu>
      <Todu task="learn Redux" isDone={false}></Todu> */}

      {/* <Device name="Laptop" price="86000"></Device>
      <Device name="Mobile" price="2000"></Device>
      <Device name="Desktop Computer" price="100000"></Device>
      <Developer></Developer>
      <Random></Random> */}
    </>
  )
}


function Developer() {
  return (
    <div className='developer'>
      <h4>Hello Dev</h4>
      <p>coding: </p>
    </div>
  )
}

function Random() {
  const devStyle = {
    paddign: '20px',
    border: '2px solid green',
    borderRadius: '15px'
  }
  return (
    <div style={devStyle}>
      <h3>i started React</h3>
      <p>react is javascript libary</p>
    </div>
  )
}

function Device({ name, price }) {
  return <h3>This Devices is {name}, and this price is {price}</h3>
}

export default App
