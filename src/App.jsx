import React, { useState, useEffect } from 'react';

import './App.css'  
import Links from './components/links'
import LinkForm from './components/linksform'
import Count from './components/count'  
import Socialapp from './components/appsocial'  

import 'bootswatch/dist/quartz/bootstrap.min.css'
import { db } from './firebase' 
import { collection, getDoc, setDoc, doc, getDocs, deleteDoc, addDoc } from 'firebase/firestore';

function App() {   

  var id_salaChat = '';

  const addSalaChat = async (salaChat) => {
    try { 
      id_salaChat = salaChat.salaId;

      // Construir la referencia a la colección de salas usando el UID proporcionado
      const salasChats = collection(db, `salasChats/${salaChat.salaId}/mensajes`);
  
      // Construir la referencia a un documento específico usando el UID
      const salaDoc = await addDoc(salasChats, salaChat);
   
      console.log('SalaChat añadida con uid:', id_salaChat, '  ', salaDoc);
    } catch (error) {
      console.error('Error al añadir SalaChat:', error);
    }
  };

  const addMensaje = async (mensaje)  => {
    console.log('Mensaje por añadir:::::',mensaje); 
 
    // Verificar que idSala esté definido
    if (id_salaChat) {
      // Construir la referencia a la colección de mensajes
      const colMensajes = collection(db, `salasChats/${id_salaChat}/mensajes`);

      // Llamar a la colección de mensajes de una sala
      const addmensaje = await addDoc(colMensajes, mensaje);
      console.log('mensaje añadido ', addmensaje); 
    } else {
      console.error('Error: id_salaChat no definido al intentar añadir mensaje.');
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    }
  }  

  const deleteMensaje = async (mensaje)  => {
    console.log('Mensaje delete:::::',Mensaje); 
    const docMensaje = collection(db, 'salasChats'+id_salaChat+'mensajes', mensaje.timeMensaje);
    console.log('col Mensajes delete:::::',colMensajes); 
    //llamar a la colecion de mensajes de una sala
    const mensajes = await deleteDoc(docMensaje);

  }

  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-md-3 col-sm-4 col-lg-2 bg-dark d-flex align-items-center flex-column justify-content-between min-vh-100"> 
          <div>

            <div className="nav flex-column nav-pills mt-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            
              <a href="#" className="text-decoration-none text-white my-2 d-flex align-items-center">
                <img src="https://avatars.githubusercontent.com/u/61076196?v=4" className='avatar' alt="Franki Briones" width="40" height="40"/>
                <span className="fs-4 d-none d-sm-inline ml-2">FrankiB</span>
              </a>

              <hr className='text-white d-none d-sm-block'/>
              
              
              <a className="nav-link active" id="v-pills-appsocial-tab" data-toggle="pill" href="#v-pills-appsocial" role="tab" aria-controls="v-pills-appsocial" aria-selected="true">
                <i className="bi">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                </i>
                <span className="ms-2 d-none d-sm-inline">Social app</span>
              </a>
              
              <a className="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                <i className="bi">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                  </svg>
                </i>
                <span className="ms-2 d-none d-sm-inline">Counterclick</span>
              </a>

              <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                <i className="bi">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16">
                    <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z"/>
                    <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"/>
                  </svg>
                </i>
                <span className="ms-2 d-none d-sm-inline">Profile</span></a>
              <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                <i className="bi">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                  </svg>
                </i>
                <span className="ms-2 d-none d-sm-inline">Messages</span></a>
              <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                <i className="bi"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
                  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                </svg></i>
                <span className="ms-2 d-none d-sm-inline">Settings</span></a>
            </div>

          </div>

          <div className="dropdown dropup open">
            <button className="btn border-none dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="bi fs-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-wide-connected" viewBox="0 0 16 16">
                  <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z"/>
                </svg>
              </i> 
            </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Action 2</a>
                <a className="dropdown-item" href="#">Action 3</a>
              </div>
          </div> 

        </div>
        
        <div className="col">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-appsocial" role="tabpanel" aria-labelledby="v-pills-appsocial-tab">
              <Socialapp addMensaje={addMensaje} addSalaChat={addSalaChat} />
            </div>
            <div className="tab-pane fade show" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <Count/> 
            </div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
              <Links/>
            </div>
            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
              <LinkForm/></div>
            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">..f</div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default App
