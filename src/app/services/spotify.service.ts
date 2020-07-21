import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 

  }
  
  
  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDnl6D4F7qpZlNvciBGTYUZeWviodVpsnu9ULE9sKyTtfNe_MKJ5NtDtcOgxZqtWQKDCKkKoxg15jhujvc'
    })
     return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  
  }

  getArtists(artist:string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDnl6D4F7qpZlNvciBGTYUZeWviodVpsnu9ULE9sKyTtfNe_MKJ5NtDtcOgxZqtWQKDCKkKoxg15jhujvc'
    })
     return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=15`, {headers});
  
  }
}