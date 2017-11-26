export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      name: 'Mohammed Asaduallah',
      avatar: 'https://pbs.twimg.com/profile_images/783366275644985345/AgYm-gKW_400x400.jpg',
      uid: 'the-uid'
    }), 2000)
  })
}

export function checkIfAuthed(props) {
  // ignore firebase
  // return store.getState().isAuthed
  console.log(props)
  return true
}