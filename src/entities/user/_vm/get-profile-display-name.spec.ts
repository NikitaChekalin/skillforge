import { getProfileLetters } from './get-profile-letters'

describe('get profile letters', () => {
  test('should split by .', () => {
    const res = getProfileLetters({
      email: 'nikita.cheakalin@gmail.com'
    })

    expect(res).toEqual('NC')
  })

  test('should split by -', () => {
    const res = getProfileLetters({
      email: 'chekalinnik@gmail.com',
      name: 'Nikita-Chekalin'
    })

    expect(res).toEqual('NC')
  })

  test('should split by space', () => {
    const res = getProfileLetters({
      email: 'chekalinnik@gmail.com',
      name: 'Nikita Chekalin'
    })

    expect(res).toEqual('NC')
  })

  test('should return first 2 letters if no separator', () => {
    const res = getProfileLetters({
      email: 'chekalinnik@gmail.com',
      name: 'NikitaChekalin'
    })

    expect(res).toEqual('NI')
  })
  test('should return first 2 letters if no separator email', () => {
    const res = getProfileLetters({
      email: 'admin@gmail.com'
    })

    expect(res).toEqual('AD')
  })
  test('should return email if empty username', () => {
    const res = getProfileLetters({
      email: 'admin@gmail.com',
      name: ''
    })

    expect(res).toEqual('AD')
  })

  test('should work with short names', () => {
    const res = getProfileLetters({
      email: 'admin@gmail.com',
      name: 'N'
    })

    expect(res).toEqual('N')
  })
})
