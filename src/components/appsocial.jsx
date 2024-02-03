import React, { useState, useEffect, useRef  } from 'react';

const Socialapp = ({ addMensaje, addSalaChat }) => {  

  const [contacts, setContacts] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const [showCreateButton, setShowCreateButton] = useState(true); 
   
  // Define un estado para almacenar las salas de chat
  const [salasDeChat, setSalasDeChat] = useState([]);

  const smsInicial  = { 
    UserName_remitente: '',
    UserImg_remitente: '',
 
    UserName_receptor: '',
    UserImg_receptor: '', 

    sms: '',
    timeMensaje: new Date
  }

  const [mensaje, setSMS] = useState(smsInicial);
  const inputRef = useRef(null);
  
  var id_salaChat = '';
  const handleCreateSala = (user) => (e) => {
    e.preventDefault();
    // Puedes poner aquí la lógica para crear una sala antes de enviar el mensaje
    console.log('Crear sala');

    // Obtener el índice del usuario al que le estás enviando el mensaje
    const index = contacts.findIndex(contact => contact.username !== user.username); 
  
    // Asegurarte de que el índice sea válido antes de acceder al array
    if (index !== -1) {
      const currentUser = contacts[index];

      // Generar la salaId de forma única
      const salaId = [user.username, currentUser.username].sort().join(',');
      // Verificar si la sala ya existe
      const salaExistente = salasDeChat.find(sala => sala.salaId === salaId);

      if (!salaExistente) {
        // Si la sala no existe, la creamos y la agregamos al estado
        const newSalaChat = {
          salaId: salaId,
          array_users_insala: [user.username, currentUser.username]
        };
  
        setSalasDeChat([...salasDeChat, newSalaChat]);
        addSalaChat(newSalaChat); 
        setShowCreateButton(false);

        console.log("Sala creada:", newSalaChat);
        id_salaChat = salaId;
      } else {
        console.log("La sala ya existe:", salaExistente);
      } 
      
    } else {
      console.error('No se encontró un usuario receptor en la lista de contactos.');
    }

  }

  const handelSend = (user) => (e) => {
    e.preventDefault();
  
    if (mensaje.sms !== '') {
      // Obtener el índice del usuario al que le estás enviando el mensaje
      const index = contacts.findIndex(contact => contact.username !== user.username);
      
      // Asegurarte de que el índice sea válido antes de acceder al array
      if (index !== -1) {
        const currentUser = contacts[index];
  
        // Generar la salaId de forma única
        const salaId = [user.username, currentUser.username].sort().join(',');
  
        // Verificar si la sala ya existe
        const salaExistente = salasDeChat.find(sala => sala.salaId === salaId);
  
        if (!salaExistente) {
          // Si la sala no existe, la creamos y la agregamos al estado 
  
          console.log("Falta crear la Sala:", newSalaChat);
        } else {
          console.log("La sala ya existe:", salaExistente);
    
          // Crear un nuevo mensaje con la información del remitente y receptor
          const newMessage = {
            UserName_remitente: user.username,
            UserImg_remitente: user.avatar,
            UserName_receptor: currentUser.username,
            UserImg_receptor: currentUser.avatar,
            sms: mensaje.sms,
            timeMensaje: new Date()
          };
      
          console.log(newMessage);
          addMensaje(newMessage);
          getMensajes();
        }
        
      } else {
        console.error('No se encontró un usuario receptor en la lista de contactos.');
      }  
    }else{
      alert('Mensaje vacio.');
    }
  }; 

  
  var mensajes = [];

  const getMensajes  = async ()  => { 

    limpiarInput();

    console.log('_____________ id_salaChat:::::',id_salaChat); 
    /*
    const colMensajes = collection(db, 'salasChats/'+id_salaChat+'/mensajes');
    console.log('col Mensajes:::::',colMensajes); 
    //llamar a la colecion de mensajes de una sala
    // Llamar a la colección de mensajes de una sala
    const mensajesSnapshot = await getDocs(colMensajes);

    // Ordenar los mensajes por "timeMensaje" ascendente
    mensajes = mensajesSnapshot.docs.filter(doc => doc.data().sms).map(doc => doc.data()).sort((a, b) => a.timeMensaje - b.timeMensaje);

    console.log('mensajillos ',mensajes); */
  } 

  const limpiarInput = () => {
    setSMS(prevState => ({
      ...prevState,
      sms: ''
    }));

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  const handelInputChange = e => {
    //console.log( e.target.value );
    const { name, value } = e.target;
    console.log( name, value  );
    setSMS({...mensaje, [name]: value})
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
        { username: 'User 11', avatar: 'https://ultimasnoticias.com.ve/wp-content/uploads/2023/08/KAROL-G-1-696x519.jpg' },
        { username: 'User 12', avatar: 'https://people.com/thmb/E1f6WtFC4NTF2u9EF04w4x7zkSQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(993x608:995x610)/coco-jones-parents-1-f410641bae694cdbb57c06c2bbf73b7a.jpg' },
        { username: 'User 13', avatar: 'https://www.telemundo.com/sites/nbcutelemundo/files/images/promo/article/2021/07/22/sylvester-stallone-con-hijas-sistine-sophia-scarlett.jpg' },
        { username: 'User 14', avatar: 'https://hips.hearstapps.com/hmg-prod/images/jonas-brothers-camp-rock-1579686243.jpg?resize=2048:*' },
        { username: 'User 15', avatar: 'https://elcomercio.pe/resizer/uBKWwusEiQKYoYggHyW5fwildWo=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KUZV5V76BRDPBC62VMRWBO4TMM.png' },
        { username: 'User 16', avatar: 'https://hips.hearstapps.com/hmg-prod/images/bradpitt-1663933956.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*' },
        { username: 'User 17', avatar: 'https://e.radio-grpp.io/normal/2023/07/12/170717_1450774.jpg' },
        { username: 'User 18', avatar: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/01/21/17/Hugh-Jackman.jpg' },
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
  
  // Función para generar colores aleatorios
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Función para generar un arreglo de colores oscuros aleatorios
  const generateRandomDarkColors = (count) => {
    const darkColors = [];
    const letters = '0123456789ABCDEF';

    for (let i = 0; i < count; i++) {
      let color = '#';
      for (let j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 6)]; // Números más bajos para colores oscuros
      }
      darkColors.push(color);
    }

    return darkColors;
  }; 
  
  const initialDarkColors = generateRandomDarkColors(2);
  const [coloresFijos, setColoresFijos] = useState([...initialDarkColors]);

  return (
    <div className="container mt-3">
      <div className="row">
        {contacts.slice(0, 2).map((user, index) => (
          <div className="col-md-6 mb-2" key={index}>
            <div className="card" style={{ backgroundColor: coloresFijos[index] }}>
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
                {/* Mapear los mensajes y renderizar un div para cada mensaje */}
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

                  {/* Renderizar el nuevo arreglo de mensajes */}
                  
                  { mensajes.map((mensaje, index) => (
                    <div key={index} className="media mb-3">
                      <div className="row">
                        <div className="col-1">
                          <img
                            src={mensaje.UserImg_remitente}
                            alt="Usuario"
                            className="rounded-circle"
                            style={{ width: '40px', height: '40px' }}
                          />
                        </div>
                        <div className="col-10">
                          <div className="media-body bg-success rounded p-1">
                            <p className="text-white mb-0">{mensaje.sms}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )) }

                {/* Puedes agregar más mensajes aquí */}
              </div>

              {/* Entrada de texto para enviar mensajes */}
              
              <div className="card-footer">
                {showCreateButton ? (
                  <button className="btn btn-primary btn-block" type="button" onClick={handleCreateSala(user)}>
                    Crear Sala
                  </button>
                ) : (
                  <div className="input-group">
                    <input type="text" onChange={handelInputChange} name="sms" className="form-control" placeholder="Escribe tu mensaje" />
                    <div className="input-group-append">
                      <button className="btn btn-success btn-block" type="button" onClick={handelSend(user)}>
                        Enviar
                      </button>
                    </div>
                  </div>
                )}
              </div> 

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socialapp;
