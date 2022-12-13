import axios from 'axios'

// 인스턴스(객체) 만들기
const api = axios.create({
  // 공통으로 들어가는 주소(앞부분)
  baseURL: 'https://api.themoviedb.org/3',
  // 데이터 타입 : headers: {'Content-type': 'Application/json'} 
  headers: {'Content-type': 'Application/json'} 
});