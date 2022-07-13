import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendCodeService {

  constructor(private http: HttpClient) { }


  sendOTP(clientNumber: string)
  {
    const body = {
     "api_key" : environment.termii_api_key,
     "message_type" : "NUMERIC",
     "to" : clientNumber,
     "from" : environment.termii_channel_id,
     "channel" : "generic",
     "pin_attempts" : 10,
     "pin_time_to_live" :  5,
     "pin_length" : 4,
     "pin_placeholder" : "< 1234 >",
     "message_text" : "Bienvenue sur Fayy Fepp. Votre code verification est : < 1234 >. Sa durée de validation est de 5 minutes",
     "pin_type" : "NUMERIC"
    }

    return this.http.post("https://api.ng.termii.com/api/sms/otp/send", body);
  }


  verifyCode(pinId: string, pin: string)
  {
    // const body = 
    // {
    // "api_key": "TLAQiPOeBnzSRbPUl7nleg77GdDBKF1pYLzbbmAk8tV9GAfwE09mLKEvmaYagl",
    // "pin_id": "c8dcd048-5e7f-4347-8c89-4470c3af0b",
    // "pin": "195558"
    // }

    // pin: code OTP entré par l'utilisateur

    const body = 
    {
    "api_key": environment.termii_api_key,
    "pin_id": pinId,
    "pin": pin
    }

    return this.http.post("https://api.ng.termii.com/api/sms/otp/verify", body);
  }

  


}
