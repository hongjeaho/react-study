import dummy from 'dummy-data-generator'

const _sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const dummyData =  dummy({
  count: 20,
  columnData: {
    "id": {type: 'randomNumber', length:5},
    "name": {type: 'name'},
    "twitter": {type: 'domainName', length:10},
    "notes": {type: 'paragraph', length:20},
  },
  isCSV: false
})

export const getUserList = async () => {
  await _sleep(500)
  return dummyData.map(item => {
    item.avatar = 'https://placekitten.com/g/200/200'
    item.favorite = Math.random() > 0.5
    return item
  })
}

export const getUser = async (id) => {
  const userList = await getUserList()
  return userList.find(item => item.id === id)
}