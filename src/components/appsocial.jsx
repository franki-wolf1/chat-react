import React, { useState, useEffect } from 'react';

const Socialapp = () => {
  
  const [contacts, setContacts] = useState([]);
  const [currentDate, setCurrentDate] = useState('');

  const usariomensaje = {
    userId: '',
    UserName: '',
    UserImg: '',
    UserDestiny: '',
    mensaje: '',
    timeMensaje: new Date
  }
  const [messages, setMessages] = useState(usariomensaje);

  const handelSend = e => {
    console.log( messages );
  } 

  const handelChange = e => {
    console.log( e.target.messages );
  } 

  useEffect(() => {
    // Simulación de datos de usuarios y rutas de imágenes
    const usersData = [
        { username: 'User 1', avatar: 'https://tiempo.hn/wp-content/uploads/2016/03/JLOPEZ.jpg' },
        { username: 'User 2', avatar: 'https://elcomercio.pe/resizer/pzUCikD2NxVynerOjbYQwV1CtHs=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FZWMOTBMBVEA3AR2STEGW6SMJI.jpg' },
        { username: 'User 3', avatar: 'https://album.mediaset.es/eimg/2023/02/21/madonna_f53e.jpg?w=1200&h=900' },
        { username: 'User 4', avatar: 'https://cdns-images.dzcdn.net/images/artist/1f8e268039dadf2e1908dff253f53924/264x264.jpg' },
        { username: 'User 5', avatar: 'https://www.spirit-of-metal.com/les%20goupes/B/Bruce%20Dickinson/pics/ab4f_3.jpg' },
        { username: 'User 6', avatar: 'https://i1.sndcdn.com/avatars-000113955815-oqn0l7-t500x500.jpg' },
        { username: 'User 7', avatar: 'https://hollypost.com/wp-content/uploads/2023/08/0RrGjuasR6JmX2NWr.png' },
        { username: 'User 8', avatar: 'https://image.cnbcfm.com/api/v1/image/107341579-1701376973392-gettyimages-1821107484-dsc_5130_j4s4ocdu.jpeg?v=1706182152&w=929&h=523&vtcrop=y' },
        { username: 'User 9', avatar: 'https://cdn.britannica.com/40/144440-050-DA828627/Morgan-Freeman.jpg' },
        { username: 'User 10', avatar: 'https://cdns-images.dzcdn.net/images/artist/c3a84765ad5e583fdccc87bec5a3d5b2/500x500.jpg' },
        { username: 'User 11', avatar: 'https://avatars.githubusercontent.com/u/61076196?v=4' },
        { username: 'User 12', avatar: 'https://people.com/thmb/E1f6WtFC4NTF2u9EF04w4x7zkSQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(993x608:995x610)/coco-jones-parents-1-f410641bae694cdbb57c06c2bbf73b7a.jpg' },
        { username: 'User 13', avatar: 'https://www.telemundo.com/sites/nbcutelemundo/files/images/promo/article/2021/07/22/sylvester-stallone-con-hijas-sistine-sophia-scarlett.jpg' },
        { username: 'User 14', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6G7J44zGdJLvQiPE0GdX5j3LfWSwSlnAknOXTsTNuk0I45L8ak635xEl51h11SgqjXcs&usqp=CAU' },
        { username: 'User 15', avatar: 'https://elcomercio.pe/resizer/uBKWwusEiQKYoYggHyW5fwildWo=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KUZV5V76BRDPBC62VMRWBO4TMM.png' },
        { username: 'User 16', avatar: 'https://clinch.news/__export/1678190038856/sites/clinch/img/2023/03/07/arnold-schwarzenegger-volume-workout.jpg_1532578050.jpg' },
        { username: 'User 17', avatar: 'https://e.radio-grpp.io/normal/2023/07/12/170717_1450774.jpg' },
        { username: 'User 18', avatar: 'https://www.expreso.com.pe/wp-content/uploads/2022/05/Gisela-Valcarcel-1.jpg' },
        { username: 'User 19', avatar: 'https://www.screengeek.net/wp-content/uploads/2020/10/the-matrix-4-keanu-reeves-neo.jpg' },
        { username: 'User 20', avatar: 'https://upload.wikimedia.org/wikipedia/tr/7/77/Lukepromo2321.jpg' },
    ];

    // Barajar aleatoriamente los usuarios
    const shuffledUsers = shuffleArray(usersData);
    setContacts(shuffledUsers);
    
    // Obtener la fecha actual
    const now = new Date(); 
    const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
    setCurrentDate(formattedDate); 
  }, []);  

  // Función para barajar aleatoriamente un array
  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <div className="container mt-3">
      <div className="row">
        {contacts.slice(0, 2).map((user, index) => (
          <div className="col-md-6 mb-2" key={index}>
            <div className="card bg-dark">
              {/* Encabezado del chat con el nombre del contacto */}
              <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="card-title">{user.username}</h5>
                    </div>
                    <div className="col">
                        <span className="float-right">{currentDate}</span>
                    </div>
                </div>
              </div>

              {/* Contenedor del chat */}
              <div className="card-body" style={{ height: '300px', overflowY: 'auto' }}>
                {/* Mensajes del chat */}
                <div className="media mb-3">
                  <div className="row">
                    <div className="col-1">
                      <img
                        src={user.avatar}
                        alt="Usuario"
                        className="rounded-circle"
                        style={{ width: '40px', height: '40px' }}
                      />
                    </div>
                    <div className="col-10">
                      <div className="media-body bg-success rounded p-1">
                        <p className="text-white mb-0">¡Hola! ¿Cómo estás?</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Puedes agregar más mensajes aquí */}
              </div>

              {/* Entrada de texto para enviar mensajes */}
              <div className="card-footer">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Escribe tu mensaje" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onChange={handelChange} onClick={handelSend}>
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socialapp;
