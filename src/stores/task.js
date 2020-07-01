import { writable } from 'svelte/store'
const { subscribe, set, update } = writable([])

const createTask = ({ name, done = false }) => ({
  name,
  done,
  key: `${name}${Date.now()}`
})

const updateTask = (task, fields) => ({
  ...task,
  ...fields
})

const addOne = (name) => {
  update((list) => [
    ...list,
    createTask({
      name
    })
  ])
}

const removeOne = (key) => {
  update((list) => list.filter((val) => val.key !== key))
}

const updateOne = (key, fields) => {
  update((list) => {
    const targetIndex = list.findIndex((val) => val.key === key)
    if (targetIndex < 0) {
      return list
    }

    const task = { ...list[targetIndex] }
    const updatedList = [...list]
    updatedList.splice(targetIndex, 1, updateTask(task, fields))
    return updatedList
  })
}

export const taskStore = {
  subscribe,
  addOne,
  removeOne,
  updateOne,
  reset: () => set([])
}
