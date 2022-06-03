import { Component, OnInit, VERSION } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from '@capacitor/device';
import { Camera, CameraResultType } from '@capacitor/camera';


const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
  const imageUrl = image.webPath;
  console.log(image)
  return imageUrl
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  version = VERSION.full
  title!: string

  test: any;
  test2: any;
  phone!: any;
  photo!: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    this.activatedRoute?.params?.subscribe( (res: any) => {
      this.title = res.data ?? 'I am Remote Apps'
    })

    this.test = await Device.getInfo();
    this.test2 = await Device.getLanguageCode();

  }

  async setStorage() {
    localStorage.setItem('mfe', this.phone) 
  }

  async takePhoto() {
    this.photo = await takePicture()
  }

  goNav(route: string) {
    this.router
      .navigate([route])
      .then((res) => {
        console.log('res :', res);
      })
      .catch((err) => {
        console.log('error :', err);
      });
  }



}
