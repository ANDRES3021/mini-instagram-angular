import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications: any[]; //tipo real de tus notificaciones

  constructor() {
    // Simula datos de notificaciones
    this.notifications = [
      { sender: { username: 'Pepe', profileImage: 'https://thumbs.dreamstime.com/z/imagen-de-marcador-posici%C3%B3n-perfil-silueta-gris-sin-foto-una-persona-en-el-avatar-la-predeterminada-se-utiliza-para-dise%C3%B1o-web-176390893.jpg' }, message: 'te ha enviado un mensaje privado.', time: new Date() },
      { sender: { username: 'tatto', profileImage: 'https://thumbs.dreamstime.com/z/imagen-de-marcador-posici%C3%B3n-perfil-silueta-gris-sin-foto-una-persona-en-el-avatar-la-predeterminada-se-utiliza-para-dise%C3%B1o-web-176390893.jpg' }, message: 'ha comenzado a seguirte.', time: new Date() },
      { sender: { username: 'Anna', profileImage: 'https://previews.123rf.com/images/djvstock/djvstock1701/djvstock170109013/70085945-perfil-de-la-mujer-sin-rostro-ic%C3%B3nico-dise%C3%B1o-gr%C3%A1fico-de-vector.jpg' }, message: 'ha comentado en tu publicación.', time: new Date() },
      { sender: { username: 'Willson', profileImage: 'https://thumbs.dreamstime.com/z/imagen-de-marcador-posici%C3%B3n-perfil-silueta-gris-sin-foto-una-persona-en-el-avatar-la-predeterminada-se-utiliza-para-dise%C3%B1o-web-176390893.jpg' }, message: 'te ha etiquetado en una foto.', time: new Date() },
      { sender: { username: 'Andres', profileImage: 'https://thumbs.dreamstime.com/z/imagen-de-marcador-posici%C3%B3n-perfil-silueta-gris-sin-foto-una-persona-en-el-avatar-la-predeterminada-se-utiliza-para-dise%C3%B1o-web-176390893.jpg' }, message: 'ha compartido una publicación tuya.', time: new Date() },
      { sender: { username: 'Lily', profileImage: 'https://previews.123rf.com/images/djvstock/djvstock1701/djvstock170109013/70085945-perfil-de-la-mujer-sin-rostro-ic%C3%B3nico-dise%C3%B1o-gr%C3%A1fico-de-vector.jpg' }, message: 'ha indicado que le gusta tu perfil.', time: new Date() },
      { sender: { username: 'Lizeth', profileImage: 'https://previews.123rf.com/images/djvstock/djvstock1701/djvstock170109013/70085945-perfil-de-la-mujer-sin-rostro-ic%C3%B3nico-dise%C3%B1o-gr%C3%A1fico-de-vector.jpg' }, message: 'te ha enviado una solicitud de amistad.', time: new Date() }
    ];
  }

  ngOnInit(): void {}

  handleImageError(event: any, notification: any) {
    event.target.src = 'assets/notification-profiles/default-profile.jpg';
    notification.sender.profileImage = 'assets/notification-profiles/default-profile.jpg'; 
  }
}
