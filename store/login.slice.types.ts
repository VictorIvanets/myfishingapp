export interface UserState {
  jwt: string | null
  login: string | null
  userId: string | null
}

export interface UserRegisterState {
  login: string | null
  password: string | null
  name: string | null
  subname: string | null
  country: string | null
  city: string | null
  loginErrorMass?: string
  registerErrorMass?: string
  errorMassege?: string | null
}

export interface UserPerSate {
  jwt: string | null
  login: string | null
  userId: string | null
}

export interface Profile {
  id: number
  email: string
  name: string
  phone: string
  address: string
}

export interface LoginResponse {
  access_token: string
  login: string
  message?: string
  userId: string
}

export interface RegisterResponse {
  login: string
  password: string
  name: string
  subname: string
  country: string
  city: string
}
