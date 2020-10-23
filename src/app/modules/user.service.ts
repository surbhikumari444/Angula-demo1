import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface SigninCredentials{
  email:string;
  password:string;
}
interface SignupCredentials{
  First_name: string;
  Last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  dob: string;
  pan: string;
  aadhar: string;
  mobile: string;
  user_role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
 baseUrl='http://caaierp.us-east-2.elasticbeanstalk.com'
 accesstoken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDIxMDM1OTc0NDEyMDc2MDJhNTgyMGIwYmNhNDViOWU0MGFiYjM1OGM2ZDAzZjQ5YWJhYzllNjRhZjk3YzgyMGYwNzkxNjczYTdhNzg2NDYiLCJpYXQiOjE2MDMwMzE3MTQsIm5iZiI6MTYwMzAzMTcxNCwiZXhwIjoxNjM0NTY3NzE0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.eHs7C_iX7B1PpAoG6Ork_YS761CIRpVlK4pax82RRcqJyLwOlcSowTCuhqZ9IxaFyN7RRYtHI4Rg655rzWGzJugEMWb5mc02IKUjzfHwNW3_6o-KlATqxIibmmOv_jAXalyeUbI1JGqGsT7n_1F-PQZHGh_xmHwIDdEeUIufMRWwcZ4hq0eNpTLvVnTgsjEfs-ZD8dHaKn1QpbJ4OstErLHfUM2SMdE6SFs5CRIEO67kOYWd9VNw1UYUQyEH3ZHdc13bxU7jKxGIbxB-e6dNEwMaw0bYEVkQ7QzUuHQzNmBABu1YHXIWL3V-XBKezxEr0mxzy8xERKi3Zpf4Rw03p0tB9EMKtg1BnjOCvk8SzfncHJBh6iR1Pme1baLSbReY2GzVlkTRLibnG2VuDheg_m9QJOEe3ML1Ak5uBSOVfd6sRb9eXw47pl2QaUlzXaNUAgpWQbabphQDNqvewo4AD6Qn7wm_FIjo5ePwvGirKXytqMq6hfCEYSjaOJ2vQKNRJb9HZQzp8wlgC6VOWbGnGXAqfnnIPm2bTYNTFmHzBQV6ga0_LsgU85C92zO9pp2M54P94lk8FoitgerhCxHJMLPeB1vIVynSNDZOL6TRjAhWe6lN53w6uFTTwtSM3V_SFfHhzouzXOeY9-uAF2oOVSjzydc01-a8dKLyLconUao"

  constructor(private http:HttpClient) { 

  }
  login(credentials: SigninCredentials){
    return this.http.post<any>(
      `${this.baseUrl}/api/login`,
      credentials
    );

  }
  signup(credentials: SignupCredentials){
    return this.http.post<any>(
      `${this.baseUrl}/api/registerSuperHyperUser?${this.accesstoken}`,
      credentials
    );

  }
}
