import { AxiosService } from '@/api/axios.service';
import { AxiosInstance } from 'axios';

export class ChargeAccountServices {
  private service: AxiosInstance;

  constructor() {
    this.service = new AxiosService().instance();
  }

  async generate(payload: any) {
    return this.service.post(`/api/charge-account/generate`, {
      params: payload,
    });
  }
}
