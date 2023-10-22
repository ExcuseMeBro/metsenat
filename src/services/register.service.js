import { AxiosService } from "./axios.service"

class RegisterService {
  async createSponsor(data) {
    return AxiosService.post('/sponsor/create/', data)
  }
}

export default new RegisterService()