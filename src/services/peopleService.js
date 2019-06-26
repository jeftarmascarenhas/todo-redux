import { httpClient } from '../helpers'

class PeopleService {
  static getPeopleAll (page) {
    return httpClient.get(`/people/?page=${page}`)
  }
}

export default PeopleService
