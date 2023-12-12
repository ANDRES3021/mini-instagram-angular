import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  getMessages(): Observable<any[]> {
    const messages = [
      { sender: { username: 'Favio_Eder', profileImage: 'https://thumbs.dreamstime.com/z/imagen-de-marcador-posici%C3%B3n-perfil-silueta-gris-sin-foto-una-persona-en-el-avatar-la-predeterminada-se-utiliza-para-dise%C3%B1o-web-176390893.jpg' }, content: 'Hola, ¿cómo estás?🙌', time: new Date(), connected: true },
      { sender: { username: 'Laura', profileImage: 'https://previews.123rf.com/images/djvstock/djvstock1701/djvstock170109013/70085945-perfil-de-la-mujer-sin-rostro-ic%C3%B3nico-dise%C3%B1o-gr%C3%A1fico-de-vector.jpg' }, content: 'Activo(a)', time: new Date(), connected: true },
      { sender: { username: 'Miyer', profileImage: 'https://thumbs.dreamstime.com/z/imagen-de-marcador-posici%C3%B3n-perfil-silueta-gris-sin-foto-una-persona-en-el-avatar-la-predeterminada-se-utiliza-para-dise%C3%B1o-web-176390893.jpg' }, content: 'Envío un reel de rokerosforeveroficial', time: new Date(), connected: true },
      { sender: { username: 'Dani', profileImage: 'https://thumbs.dreamstime.com/z/imagen-de-marcador-posici%C3%B3n-perfil-silueta-gris-sin-foto-una-persona-en-el-avatar-la-predeterminada-se-utiliza-para-dise%C3%B1o-web-176390893.jpg' }, content: 'Visto', time: new Date(), connected: false },
      { sender: { username: 'Andrhea', profileImage: 'https://previews.123rf.com/images/djvstock/djvstock1701/djvstock170109013/70085945-perfil-de-la-mujer-sin-rostro-ic%C3%B3nico-dise%C3%B1o-gr%C3%A1fico-de-vector.jpg' }, content: 'Naa🤣🤣🤣', time: new Date(), connected: false },
      { sender: { username: 'Franco_Brenda', profileImage: 'https://thumbs.dreamstime.com/z/imagen-de-marcador-posici%C3%B3n-perfil-silueta-gris-sin-foto-una-persona-en-el-avatar-la-predeterminada-se-utiliza-para-dise%C3%B1o-web-176390893.jpg' }, content: 'Sí, somos jajaj🤣', time: new Date(), connected: true },
      { sender: { username: 'Javier', profileImage: 'https://thumbs.dreamstime.com/z/imagen-de-marcador-posici%C3%B3n-perfil-silueta-gris-sin-foto-una-persona-en-el-avatar-la-predeterminada-se-utiliza-para-dise%C3%B1o-web-176390893.jpg' }, content: 'Hola, ¿cómo vas?', time: new Date(), connected: true },
      { sender: { username: 'Alejandra_19', profileImage: 'https://previews.123rf.com/images/djvstock/djvstock1701/djvstock170109013/70085945-perfil-de-la-mujer-sin-rostro-ic%C3%B3nico-dise%C3%B1o-gr%C3%A1fico-de-vector.jpg' }, content: 'Mañana😒', time: new Date(), connected: false },
      { sender: { username: 'Hamilton', profileImage: 'https://thumbs.dreamstime.com/z/imagen-de-marcador-posici%C3%B3n-perfil-silueta-gris-sin-foto-una-persona-en-el-avatar-la-predeterminada-se-utiliza-para-dise%C3%B1o-web-176390893.jpg' }, content: 'Tal vez', time: new Date(), connected: true },
      { sender: { username: 'Esteffany', profileImage: 'https://previews.123rf.com/images/djvstock/djvstock1701/djvstock170109013/70085945-perfil-de-la-mujer-sin-rostro-ic%C3%B3nico-dise%C3%B1o-gr%C3%A1fico-de-vector.jpg' }, content: 'Ok👌', time: new Date(), connected: false },
      // Agrega aquí los mensajes adicionales
    ];

    return of(messages);
  }
}
